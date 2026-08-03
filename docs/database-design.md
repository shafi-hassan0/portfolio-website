# Personal Portfolio Database Design

**Version:** 1.0

## Overview

The Personal Portfolio application uses MongoDB as the primary database. The database is responsible for storing all portfolio content and providing structured data to the backend API.

The frontend application will not directly communicate with MongoDB. All data access will occur through the Node.js API layer.

### Architecture

```
Angular Frontend
        |
     REST API
        |
  Node.js Backend
        |
     MongoDB
```

---

## Database Collections

The portfolio database contains the following collections:

```
portfolio_db
├── story_chapters
├── experiences
├── projects
├── skills
├── certifications
├── education
└── now_updates
```

---

## Collection Design

### Story Chapters

**Collection:** `story_chapters`

**Purpose:** Stores the chapters displayed in the interactive "My Life Story" book. The chapter dates will also be used to generate the timeline displayed throughout the About Me page.

**Example:**

```json
{
  "chapterNumber": 1,
  "title": "The Beginning",
  "dateStart": "2000",
  "dateEnd": "2018",
  "content": "My journey into technology started...",
  "images": [
    {
      "url": "/images/story/beginning.jpg",
      "caption": "Early memories"
    }
  ],
  "order": 1,
  "published": true
}
```

**Fields:**

| Field | Description |
|---|---|
| chapterNumber | Order of the story chapter |
| chapterTitle | Chapter title |
| dateStart | Timeline starting date |
| dateEnd | Timeline ending date |
| content | Story content |
| images | Supporting images |
| order | Display order |
| published | Visibility control |

---

### Experiences

**Collection:** `experiences`

**Purpose:** Stores professional work experience.

**Example:**

```json
{
  "company": "Company Name",
  "role": "QA Engineer",
  "startDate": "2024-01",
  "endDate": null,
  "description": "Worked on software quality and automation.",
  "responsibilities": [
    "Created automated tests",
    "Validated application functionality"
  ],
  "skillsUsed": [
    "skill-python",
    "skill-sql"
  ],
  "order": 1,
  "published": true
}
```

**Fields:**

| Field | Description |
|---|---|
| company | Employer name |
| role | Job title |
| startDate | Employment start date |
| endDate | Employment end date |
| description | Role overview |
| responsibilities | Major responsibilities |
| skillsUsed | Related skills |
| order | Display order |
| published | Visibility control |

---

### Projects

**Collection:** `projects`

**Purpose:** Stores software projects, personal projects, and portfolio demonstrations.

**Example:**

```json
{
  "title": "Personal Portfolio",
  "description": "Full-stack portfolio application.",
  "category": "Web Application",
  "skillsUsed": [
    "skill-angular",
    "skill-node",
    "skill-mongodb"
  ],
  "githubUrl": "",
  "demoUrl": "",
  "images": [],
  "featured": true,
  "dateCreated": "2026",
  "published": true
}
```

**Fields:**

| Field | Description |
|---|---|
| title | Project name |
| description | Project overview |
| category | Project classification |
| skillsUsed | Related skills |
| githubUrl | Source repository |
| demoUrl | Live demonstration |
| images | Project screenshots |
| featured | Display prominently |
| dateCreated | Project creation date |
| published | Visibility control |

---

### Skills

**Collection:** `skills`

**Purpose:** Stores individual technical and professional skills. Each skill is its own document to allow users to explore where and how each skill has been used.

**Example:**

```json
{
  "name": "Angular",
  "skillType": "framework",
  "category": "Frontend",
  "description": "A TypeScript framework used to build scalable web applications.",
  "yearsExperience": 2,
  "proficiency": "Intermediate",
  "relatedProjects": [
    "project-portfolio"
  ],
  "relatedExperience": [
    "experience-company"
  ],
  "icon": "/images/skills/angular.svg",
  "order": 1,
  "published": true
}
```

**Skill Types**

Skills will be categorized by type:

- `language`
- `framework`
- `library`
- `database`
- `tool`
- `platform`
- `soft-skill`

**Examples:**

| Skill | Type |
|---|---|
| JavaScript | language |
| Angular | framework |
| Tailwind CSS | library |
| MongoDB | database |
| Git | tool |
| Communication | soft-skill |

---

### Certifications

**Collection:** `certifications`

**Purpose:** Stores professional certifications.

**Example:**

```json
{
  "name": "ISTQB Foundation Level",
  "issuer": "ISTQB",
  "dateEarned": "2024",
  "credentialUrl": "",
  "image": "",
  "published": true
}
```

---

### Education

**Collection:** `education`

**Purpose:** Stores educational background.

**Example:**

```json
{
  "school": "Virginia Commonwealth University",
  "degree": "Bachelor of Science",
  "field": "Computer Science",
  "startDate": "2019",
  "endDate": "2023",
  "achievements": [
    "Computer Science Degree"
  ],
  "published": true
}
```

---

### Now Updates

**Collection:** `now_updates`

**Purpose:** Stores current activities and goals. This allows the portfolio to show what is currently being worked on.

**Example:**

```json
{
  "currentlyLearning": [
    "Angular",
    "Docker"
  ],
  "currentlyBuilding": [
    "Personal Portfolio"
  ],
  "recentlyCompleted": [
    "Architecture Design"
  ],
  "updatedDate": "2026-08-03"
}
```

---

## Image Storage

Images are **not** stored in MongoDB. Every `images`/`icon`/`image` field is a URL string pointing to a static file served directly by the Node backend from a local folder (e.g. `backend/public/images/...`), rather than binary data in a document. This keeps documents small, avoids Atlas's free-tier storage quota being consumed by binary assets, and keeps the door open to moving to cloud storage (Cloudinary/S3/R2) later without any schema change — only the URL values would change.

---

## Database Relationships

MongoDB references related documents using IDs.

```
                Skill
                  |
        -------------------
        |                 |
     Projects        Experiences
```

**Example:** A Python skill document may reference:

- **Projects:** Automation Framework, Data Validation Tool
- **Experience:** QA Engineer

This allows users to explore the portfolio through skills.

---

## Data Management Rules

**Rule 1**
The frontend must never directly access MongoDB. All communication must go through the backend API.

**Rule 2**
Portfolio content should be database-driven. Content should not be hardcoded into Angular components.

**Rule 3**
All content collections should support:

- Ordering
- Publishing/unpublishing
- Future admin management

---

## Future Considerations

Potential future additions:

- Media management
- Analytics data
- Admin dashboard support