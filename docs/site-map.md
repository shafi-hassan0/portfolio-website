# Personal Portfolio Site Map

Version: 1.0

## Overview

This document defines the v1 route structure for the portfolio and which backend/API resources each route depends on.

Scope decisions (blog, desk-metaphor navigation, Easter eggs) are also recorded here so they aren't re-litigated later.

---

## v1 Routes

| Route | Page | Backed by | Notes |
|---|---|---|---|
| `/` | Home | — (static content) | "Desk of a Software Engineer" scene — see below |
| `/about` | About / Story Book | `GET /api/story-chapters` | Interactive book, one chapter per page. A dynamic table of contents (built from chapter `order`/dates) appears above the book once it's open — this **is** the timeline. There is no separate `/timeline` route. |
| `/experience` | Experience | `GET /api/experiences?expand=skills` | Career roadmap style |
| `/projects` | Projects (list) | `GET /api/projects` | Cards, filter by `category`/`featured` |
| `/projects/:id` | Project detail | `GET /api/projects/:id?expand=skills` | Screenshots, GitHub/demo links |
| `/skills` | Skills | `GET /api/skills` | Grouped by `skillType` |
| `/skills/:id` | Skill detail | `GET /api/skills/:id?expand=projects,experience` | "Used in" view |
| `/certifications` | Certifications | `GET /api/certifications` | Own route |
| `/education` | Education | `GET /api/education` | Own route |
| `/resume` | Resume | static/PDF + links | Download, LinkedIn, GitHub buttons |
| `/now` | Now | `GET /api/now` | Own route |
| `/playground` | Playground | — (client-side only) | Drawing pad, tic-tac-toe vs. computer, room for more games later. No collection, no API involvement — same pattern as contact. |
| `/contact` | Contact | — (EmailJS, no API) | Form only, sends directly from the browser |
| `*` | 404 | — | |

---

## Home Page — "Desk of a Software Engineer"

The home page (`/`) is an illustrated scene instead of a standard hero section. Each object on the desk links to one of the routes above. This is the entry point only — once a visitor navigates into any page, a normal nav bar/menu is used to move between pages from then on (the desk is not the permanent navigation method, just the front door).

| Desk object | Routes to |
|---|---|
| Leather journal | `/about` |
| Laptop | `/projects` |
| Toolbox | `/skills` |
| Resume printout | `/resume` |
| Certificate on wall | `/certifications` |
| Diploma frame | `/education` |
| Calendar / corkboard | `/experience` |
| Envelope | `/contact` |
| Game controller / notepad | `/playground` |
| Sticky note / small monitor | `/now` |

### Mobile variant

Below the desktop breakpoint, the desk scene is replaced with a phone home-screen layout — the same objects become app icons in a grid, keeping the metaphor while staying usable on small screens. Same object-to-route mapping applies.

---

## Explicitly Out of Scope for v1

- **Blog** — not being built. Removed from consideration entirely, not deferred.
- **Easter eggs** (Konami code, hidden terminal, lamp-styled dark/light toggle) — explicitly post-launch. Nothing about v1 should be built in a way that blocks adding these later, but none are required for launch.

---

## Notes

- Timeline, Certifications, and Education were all originally ambiguous (own page vs. embedded section) — resolved above.
- Playground and Contact are the only two v1 pages with no backend dependency.
