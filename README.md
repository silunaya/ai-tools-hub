# ai-tools-hub

Simple Next.js AI tools site (App Router) — ready for Vercel.

## Setup & Deploy (Vercel)

1. Push this repo to GitHub.
2. Create a Vercel account and import project.
3. In Vercel dashboard -> Project -> Settings -> Environment Variables add `GROQ_KEY` (value: your Groq API key).
4. Deploy. Open yoursite.vercel.app and try any tool under `/tools/<name>`.

## Notes
- All server calls use Groq chat completions via `callGroq` in `app/api/_shared.js`.
- If you prefer OpenAI or another provider, replace `callGroq` with your provider's fetch calls and env var name.

## Make it yours
- Add more tools by copying a page + API route.
- Tighten rate-limits and add usage quotas before public launch if your key has limits.

