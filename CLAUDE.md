# Priszm Website

This is the marketing website for Priszm (priszm.ai), built with Next.js App Router.

## Brand & Tone

All copy, content, and feature decisions should follow the brand guidelines in the brain repo:

@/Users/jbarkate/workspace/brain/priszm/brand_voice.md
@/Users/jbarkate/workspace/brain/priszm/target_audience.md
@/Users/jbarkate/workspace/brain/priszm/content_pillars.md
@/Users/jbarkate/workspace/brain/priszm/client_results.md

## Key rules (summary)

- Priszm is a **done-for-you agency service**, not a SaaS platform. Never use "platform", "free trial", "cancel anytime", or subscription language.
- Lead with outcomes: booked jobs, Google reviews, inbound calls — not AI or automation as the story.
- Audience: owner-operators of blue-collar service businesses (pest control, landscaping, HVAC, roofing, cleaning, contracting). Write for someone reading on their phone between jobs.
- All CTAs point to `mailto:joe@priszm.ai`. There is no login or signup flow.
- No buzzword stacking. No corporate SaaS voice. Short sentences.

## Stack

- Next.js 16 App Router
- Tailwind CSS + shadcn/ui
- Vercel (deployment)
- `components/` — page sections (hero, header, footer, etc.)
- `app/` — routes and layout
- `lib/seo.ts` — metadata utility
