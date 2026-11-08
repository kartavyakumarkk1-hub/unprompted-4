# Unprompted — Speaking Practice

A local-first speaking and debate practice app built with React, TypeScript, Vite and Tailwind CSS. The UI follows the supplied dark emerald reference screens and is responsive for mobile and desktop.

## Included

- Topic spinner with a built-in prompt collection and recent-topic avoidance.
- Spontaneous, prepared (30-second prep) and extended practice modes.
- Adjustable countdown timer with presets, pause/resume/reset and an optional end chime.
- Ten selectable speaking frameworks.
- Offline debate motions, proposition/opposition selection, preparation notes and a structured round guide.
- Microphone recording with pause/resume/stop, elapsed time and live audio-level bars.
- Post-session self-review, private reflection notes and local recording library.
- IndexedDB persistence, rename, delete, playback and original-format download.
- Progress summary based on saved recordings and user-entered ratings.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this project to a Git repository.
2. Import the repository in Vercel.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. No environment variables or backend services are required for the included offline features.

## Audio format and privacy

Recordings are stored in IndexedDB in the current browser on the current device. They are not uploaded. Microphone access requires HTTPS (Vercel provides HTTPS) or localhost.

The app checks native `MediaRecorder` MIME support and prefers MP4/AAC when the browser genuinely supports it. Otherwise it records and exports the actual supported format (commonly WebM/Opus in Chromium). It never renames WebM or WAV data to `.m4a`. This build does **not** bundle a WASM transcoder; genuine M4A conversion is therefore not available in browsers that cannot record MP4/AAC natively. The export label and extension reflect the real recording format.

## Deliberate free-tier scope

The app does not require paid APIs, accounts, a database server, AI services or subscriptions. Debate practice is currently offline and prompt-led; it does not pretend to be an AI opponent. Transcription, automated filler-word analysis, pronunciation scoring and AI feedback are not included because they require an additional speech-recognition or model service. Progress metrics are limited to actual saved durations and self-assessment scores; no performance scores are fabricated.

## Browser notes

Use a current Chrome, Edge or Safari browser. Microphone recording requires permission. IndexedDB is subject to browser storage limits and can be cleared by the user or browser; export important recordings for backup. The app is designed for local use and should be served over HTTPS in production.
