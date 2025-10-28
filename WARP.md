# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

- Frontend (root)
  - Install: `npm i`
  - Dev server: `npm run dev` (Vite on http://localhost:8080)
  - Build: `npm run build` (outputs `dist/`)
  - Preview built app: `npm run preview`
  - Lint: `npm run lint`
- Backend (server/)
  - Install: `npm i` in `server/`
  - Dev server: `npm run dev` (nodemon on http://localhost:5000)
  - Start: `npm start`
  - Env: copy `server/.env.example` to `server/.env` and set `GEMINI_API_KEY`
- Tests: no test runner is configured in frontend or backend.

## Architecture and Flow

- Top-level: Vite + React (TypeScript) frontend at `/`, Express API in `server/`.
- Frontend
  - Routing: `src/App.tsx` uses React Router; catch-all 404 at `src/pages/NotFound.tsx`.
  - Data: TanStack Query provider initialized in `App.tsx`.
  - UI system: shadcn-ui components under `src/components/ui/` with Tailwind CSS.
  - API client: `src/services/api.ts` targets `http://localhost:5000/api` and exposes `uploadDocument`, `generateLecture`, `healthCheck`.
  - Key screen: `src/pages/Index.tsx` composes `Hero`, `HowItWorks`, `Features`, `UploadSection`.
- Backend
  - Entry: `server/index.js` enables CORS, JSON body parsing, and mounts routes under `/api`.
  - Uploads: `server/routes/upload.js` uses Multer to save files to `server/uploads/`, validates types (PDF/DOC/DOCX/TXT), and returns `{ documentId, textPreview, wordCount }` after parsing.
  - Lecture generation: `server/routes/lecture.js` validates inputs, re-parses the stored file, then calls generators and returns `{ script, sceneBreakdown, estimatedDuration }`.
  - Services:
    - `server/services/documentParser.js`: extracts text using `pdf-parse`, `mammoth`, or raw read; normalizes whitespace.
    - `server/services/scriptGenerator.js`: uses `@google/generative-ai` (Gemini 1.5 Flash) with mode/style-specific prompts and a separate scene breakdown pass; requires `GEMINI_API_KEY`.
  - Health: `GET /api/health` returns service status.

## Ports, Paths, and Conventions

- Ports: frontend 8080, backend 5000. The frontend assumes `API_BASE_URL = http://localhost:5000/api` (see `src/services/api.ts`).
- Path alias: `@/*` → `./src/*` (configured in `vite.config.ts` and `tsconfig.json`).
- Vite plugin: `@vitejs/plugin-react-swc`; dev-only `lovable-tagger` is enabled when `mode === "development"`.

## Notes from README

- Project can be edited locally or via Lovable; pushing to Git syncs with Lovable.
- To run locally, install Node.js, then `npm i` and `npm run dev` at the root; start the backend in `server/` separately.
