# Personal Portfolio API Design

Version: 1.0

## Overview

The API is the only layer allowed to talk to MongoDB. The Angular frontend calls these REST endpoints; it never queries the database directly.

```
Angular Frontend
      |
      |
  REST API
      |
      |
Node.js Backend
      |
      |
   MongoDB
```

Base URL (example): `/api`

---

## API-Wide Conventions

### Response envelope

All successful responses use the same shape:

```json
{
  "success": true,
  "data": { },
  "meta": { }
}
```

`meta` is only present on list endpoints (pagination, counts).

Errors always look like:

```json
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "Project not found"
  }
}
```

### Status codes

| Code | Meaning |
|---|---|
| 200 | Success (GET, PUT, PATCH) |
| 201 | Created (POST) |
| 204 | Deleted, no content |
| 400 | Bad request / validation error |
| 404 | Resource not found |
| 500 | Server error |

### Published filtering

Every content collection has a `published` field. Public-facing GET endpoints only return `published: true` documents by default. There is no admin auth system yet (per the database design decision to drop `admin_settings`/`users`), so for v1, toggling `published` and editing content happens directly in MongoDB or via a script — the API itself is **read-only** for now (decided below under Phase 2).

### Sorting & ordering

List endpoints default to sorting by `order` ascending unless noted otherwise.

### Population/expansion

Skills, projects, and experiences reference each other by ID (e.g. `skillsUsed: ["skill-python"]`). Rather than making the frontend do a second round-trip for every reference, list/detail endpoints support a `?expand=` query param that inlines the referenced documents. This avoids N+1 calls from Angular without needing GraphQL.

---

## Endpoints by Collection

## Story Chapters

```
GET /api/story-chapters
GET /api/story-chapters/:id
```

**GET /api/story-chapters**
Returns all published chapters sorted by `order`. Used to render the book and to derive the timeline.

Response `data`: array of chapter documents.

**GET /api/story-chapters/:id**
Returns a single chapter (for deep-linking to a specific page of the book, e.g. `/about/chapter/3`).

---

## Experiences

```
GET /api/experiences
GET /api/experiences/:id?expand=skills
```

**GET /api/experiences**
Returns all published experiences sorted by `order` (or by `startDate` descending — worth deciding; I'd suggest `startDate` descending so the roadmap always shows most-recent-first regardless of manual ordering).

**GET /api/experiences/:id**
With `?expand=skills`, `skillsUsed` (array of skill IDs) is replaced with the full skill documents, so the frontend can render skill chips with icons directly without a second call.

---

## Projects

```
GET /api/projects
GET /api/projects?category=Web Application
GET /api/projects?featured=true
GET /api/projects/:id?expand=skills
```

**GET /api/projects**
Supports optional query filters:
- `category` — matches the project's `category` field
- `featured` — `true`/`false`, for a homepage highlight section

**GET /api/projects/:id**
Same `expand=skills` behavior as experiences.

---

## Skills

```
GET /api/skills
GET /api/skills?type=framework
GET /api/skills/:id?expand=projects,experience
```

**GET /api/skills**
Returns all published skills. Optional `type` filter matches `skillType` (language, framework, library, database, tool, platform, soft-skill) — this is what powers grouping the interactive skills page by category without the frontend doing the grouping logic itself.

**GET /api/skills/:id**
This is the endpoint that powers the "click a skill, see everywhere it was used" feature. With `?expand=projects,experience`, `relatedProjects` and `relatedExperience` are resolved into their full documents (title, dates, description) instead of bare IDs.

---

## Certifications

```
GET /api/certifications
```

Simple list, sorted by `dateEarned` descending by default.

---

## Education

```
GET /api/education
```

Simple list, sorted by `startDate` descending.

---

## Now Updates

```
GET /api/now
```

Since `now_updates` is a single evolving document rather than a list, this returns one object rather than an array — no `/api/now/:id`.

---

## Contact Form

```
POST /api/contact
```

Unlike the rest of the API, this is a write endpoint. Submissions go through the Node backend rather than talking to EmailJS directly from the browser — this keeps EmailJS credentials server-side and guarantees every submission is recorded even if the outbound email fails.

Request body:
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Let's talk about..."
}
```

Behavior:
1. Validates `name`, `email`, and `message` are present, and that `email` matches a basic email format. Returns `400 VALIDATION_ERROR` otherwise.
2. Saves the submission to MongoDB (`contacts` collection, `Contact` model) — this happens first, so no message is ever lost even if the email step below fails.
3. Sends a notification email via `@emailjs/nodejs` (EmailJS's server-side SDK — not the `@emailjs/browser` client SDK, which doesn't run under Node). Only `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, and `EMAILJS_PUBLIC_KEY` are required; `EMAILJS_PRIVATE_KEY` was tried and removed — EmailJS's own request validation never checks for it, so it wasn't doing anything.
4. If the email send fails, responds `500 EMAIL_FAILED` ("Message saved, but the notification email failed to send.") — the submission is still safely in MongoDB regardless.
5. On success, returns `200` with `{ message: "Message sent successfully" }`.

There is no server-side rate limiting on this endpoint yet — worth adding if spam becomes an issue.

The contact page also displays Shafi's email and phone number directly, alongside the form, so a visitor can reach out without submitting anything.

---

## Health 

```
GET /api/health
```

Checks if the API is alive.

Response:
```
{
  "success": true,
  "data": {
    "status": "healthy",
    "database": "connected"
  }
}
```

---

## Phase 2 — Write Endpoints (deferred, not part of v1)

v1 is read-only for content — the one exception is `POST /api/contact` (see above), which is a genuine write endpoint since visitor submissions have to land somewhere. Portfolio content itself is still created/edited directly in MongoDB (e.g. via MongoDB Compass or a seed script) until an admin dashboard exists. The shapes below are decided now so the collections don't need rework later, but none of this is built for launch:

```
POST   /api/projects
PUT    /api/projects/:id
DELETE /api/projects/:id
```

(same pattern for experiences, skills, certifications, education, story-chapters)

These would sit behind whatever lightweight auth you land on (the `.env`-based admin password + bcrypt approach from the database design doc), rather than the full user system you already decided against.

---

## Example Request/Response

**GET /api/skills/skill-python?expand=projects,experience**

```json
{
  "success": true,
  "data": {
    "_id": "skill-python",
    "name": "Python",
    "skillType": "language",
    "category": "Backend",
    "description": "Used for automation, scripting, and API testing.",
    "yearsExperience": 3,
    "proficiency": "Advanced",
    "relatedProjects": [
      {
        "_id": "project-api-testing",
        "title": "API Testing Framework",
        "category": "Automation"
      }
    ],
    "relatedExperience": [
      {
        "_id": "experience-kinsale",
        "company": "Kinsale",
        "role": "QA Engineer"
      }
    ],
    "order": 2,
    "published": true
  }
}
```