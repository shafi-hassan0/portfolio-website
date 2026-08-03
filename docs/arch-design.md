# Personal Portfolio Architecture

Version: 1.0

## Overview

The Personal Portfolio is a full-stack web application designed to showcase professional experience, projects, and personal development.

The application will use a modern frontend framework, backend API, and database-driven content structure.

The goal is to create a maintainable portfolio that demonstrates frontend, backend, database, and deployment skills.

---

# System Architecture

The application follows a three-tier architecture:
                     User
                       |
                       |
                 Domain Name
                       |
                       |
                Nginx Reverse Proxy
                       |
          ---------------------------
          |                         |
          |                         |
 Angular Frontend              Node API
          |                         |
          |                         |
          -------- REST API --------
                       |
                       |
                MongoDB Database

---

# Frontend

## Technology

- Angular
- TypeScript
- Tailwind CSS

## Responsibilities

The frontend is responsible for:

- Displaying portfolio content
- User interactions
- Animations
- Routing
- Form handling
- Communicating with the backend API

## Main Features

- Home page
- Interactive storybook about me page with timeline
- Work Experience
- Projects Showcase
- Skill Showcase
- Certification Showcase
- Education
- Resume
- Playground
- Now page
- Contact form

---

# Backend

## Technology

- Node.js
- Express
- TypeScript

## Responsibilities

The backend provides:

- API endpoints
- Data retrieval
- Data management
- Business logic
- Validation

The backend acts as the communication layer between the frontend and database.

## API Architecture

The frontend communicates with the backend through REST API endpoints.

Example:

GET /api/projects

Returns project information.

GET /api/experience

Returns work experience information.

GET /api/skills

Returns technical skills.

The contact form does not go through this API. Angular sends messages directly to **EmailJS**, so the backend has no involvement in contact submissions. The contact page also lists Shafi's email and phone number directly, alongside the form.
---

# Database

## Technology

MongoDB

## Responsibilities

The database stores:

- Story Chapters
- Work experience
- Projects
- Skills
- Timeline entries
- Certifications
- Education
- Current activities ("Now" page)

The website will retrieve content dynamically instead of storing information directly inside frontend code.

## Data Approach

MongoDB will be used as the primary data store.

Collections will represent individual portfolio content types and will be accessed through the backend API.

The frontend will not directly communicate with MongoDB.
---

# Deployment Architecture

## Development
Developer Machine

Angular
|
Node API
|
MongoDB Atlas

## Local Development

Required tools:

- Node.js
- Angular CLI
- MongoDB connection
- Git
- Docker (optional)

Local startup:

Frontend:
npm start

Backend:
npm run dev

## Development Workflow

Source control will be managed using Git and GitHub.

The repository will include:

- Application source code
- Documentation
- Project tracking
- Issue management

## Production


Home Server

Docker

|
├── Nginx Reverse Proxy
|
├── Angular Application
|
└── Node API


MongoDB Atlas


A custom domain will be connected to the production server.

---

# Testing Strategy

Future versions will include automated testing.

Potential tools:

Frontend:
- Jasmine
- Karma

Backend:
- Jest
- Supertest

API Testing:
- Postman

---

# Future Expansion

Potential future additions:

- Admin Dashboard
- Authentication and authorization
- Media asset management
- Analytics

## Content Management Approach

The portfolio will be designed as a lightweight Content Management System (CMS).

The initial version will manage content through the database and API.

Future versions may include an administrative interface allowing content updates without directly modifying source code.

The admin system will manage:

- Projects
- Experience
- Timeline entries
- Story chapters
- Skills
- Certifications
- "Now" page updates