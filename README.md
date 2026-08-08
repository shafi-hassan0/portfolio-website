# Portfolio REST API

The backend behind [shafihassan.com](https://shafihassan.com) — a Node/Express/MongoDB API that serves every piece of content on the site (projects, skills, experience, and more) so the page can be updated by editing data, not redeploying code.

**Live:** [shafihassan.com/api/health](https://shafihassan.com/api/health)
**Frontend:** [portfolio-website-ui](https://github.com/shafi-hassan0/portfolio-website-ui)

## Highlights

- Content-driven architecture — projects, skills, and experience live in MongoDB and are seeded from versioned data files, so the site's content can change without a code deploy
- A portfolio chatbot (`POST /api/chat`, powered by Claude Haiku) that answers visitor questions about Shafi's background, skills, projects, education, and certifications — with a keyword relevance gate that rejects off-topic questions before they ever reach the model
- Fully automated CI/CD: a push to `main` triggers a deploy via [portfolio-website-infra](https://github.com/shafi-hassan0/portfolio-website-infra), which then runs the [API test suite](https://github.com/shafi-hassan0/portfolio-website-api-tests) and waits for the real result before reporting success or failure back as a commit status here
- Split into focused repos ([API](https://github.com/shafi-hassan0/portfolio-website-api), [UI](https://github.com/shafi-hassan0/portfolio-website-ui), [infra](https://github.com/shafi-hassan0/portfolio-website-infra), [API tests](https://github.com/shafi-hassan0/portfolio-website-api-tests), [UI tests](https://github.com/shafi-hassan0/portfolio-website-ui-tests)) that each deploy and report independently

---

## For Developers

### Stack

- Node.js / Express
- MongoDB (Mongoose)
- TypeScript

### Running locally

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env` and fill in `MONGODB_URI`, the `EMAILJS_*` values, and `ANTHROPIC_API_KEY` first.

### Chatbot

`POST /api/chat` (see `src/routes/chat.routes.ts`) answers visitor questions using Claude Haiku, grounded in the site's own content (`src/lib/chat-context.ts` builds the system prompt from published projects, skills, experience, education, and certifications). Two layers keep it on-topic and cheap to run:

- **Relevance gate** — a keyword check rejects obviously off-topic questions with a canned reply before any API call is made, so junk/abuse traffic costs nothing
- **System prompt scope** — instructs the model to decline anything else, and to never invent experience or claim to be Shafi

Rate limited to 6 requests/minute per IP (`express-rate-limit`) — note this relies on `app.set("trust proxy", 1)` in `src/server.ts` to read the real client IP from behind the nginx reverse proxy in production.

### Seeding

```bash
npm run seed
```

### Testing

API tests live in a separate repo: [portfolio-website-api-tests](https://github.com/shafi-hassan0/portfolio-website-api-tests), built with REST Assured and JUnit.

### Docs

See `docs/` for architecture, database design, and API design notes.

### Deployment

A push to `main` triggers `.github/workflows/trigger-deploy.yml`, which notifies [portfolio-website-infra](https://github.com/shafi-hassan0/portfolio-website-infra). Infra rebuilds the backend container, reseeds the database if `src/seed/data/**` changed, then dispatches the [API test suite](https://github.com/shafi-hassan0/portfolio-website-api-tests) and waits for it to finish — the result is reported back here as a commit status.
