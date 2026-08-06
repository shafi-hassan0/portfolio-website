# portfolio-website-api

Node/Express/MongoDB backend for [shafihassan.com](https://shafihassan.com). Serves the REST API and static images consumed by [portfolio-website-ui](https://github.com/shafi-hassan0/portfolio-website-ui), and is deployed together with it via [portfolio-website-infra](https://github.com/shafi-hassan0/portfolio-website-infra).

## Stack

- Node.js / Express
- MongoDB (Mongoose)
- TypeScript

## Running locally

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env` and fill in `MONGODB_URI` and the `EMAILJS_*` values first.

## Seeding

```bash
npm run seed
```

## Testing

API tests live in a separate repo: [portfolio-website-api-tests](https://github.com/shafi-hassan0/portfolio-website-api-tests), built with REST Assured and JUnit.

## Docs

See `docs/` for architecture, database design, and API design notes.
