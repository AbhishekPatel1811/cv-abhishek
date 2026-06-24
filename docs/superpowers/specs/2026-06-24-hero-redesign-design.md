# Hero Redesign - Design Spec (2026-06-24)

## Goal
Replace the current left-aligned hero with a "wow", personal-brand hero that pulls visitors
into the portfolio. Validated interactively via live mockups on the dev server.

## Approved decisions
- **Layout:** split - avatar LEFT, text RIGHT (not centered).
- **Avatar:** circle (rounded-full), semi-medium (~300px), using `public/abhishek-light.jpeg`
  (cool background that matches the indigo theme). Soft indigo glow behind it.
- **Background:** Aceternity **Aurora** (vendored via shadcn registry into `components/ui/`),
  themed indigo, intensified a touch for wow. Library component, not hand-rolled.
- **Text (Yash-style intro):**
  - Eyebrow: "Hi, I'm" (pulsing accent dot).
  - Name: "Abhishek **Patel**" (Patel in accent) - **GSAP SplitText** char reveal on load.
  - **Typewriter** (react-type-animation, library) cycling 3 roles:
    "an AI-Native Full-Stack Engineer" -> "an AI Product Engineer" -> "a RAG & Voice-AI Builder".
  - Tagline: "who's shipped 4 live AI products in 2 years - RAG chatbots, voice agents and
    brand-AI - built end to end, mostly solo." (grounded in playbook/resume).
  - CTAs: magnetic "Ask my AI" (opens chat) + "View work". Small "open to roles & freelance" line.
- The old 4-stat grid, video/image slots and rotating "Lately:" line are removed from the hero
  (proof lives in the product marquee + Impact + case studies).

## Components (all library-sourced / established, no hand-rolled effects)
- `components/ui/aurora-background.tsx` (Aceternity, vendored) - change `<main>` -> `<div>` to
  avoid nesting inside the layout's `<main>`.
- `components/split-headline.tsx` - GSAP SplitText (`@gsap/react` useGSAP), `type: "words,chars"`,
  `mask: "chars"`.
- `react-type-animation` `TypeAnimation` for the role typewriter.
- `components/magnet.tsx` (existing) on the primary CTA.

## Site-wide
- Swap `abhishek.jpeg` -> `abhishek-light.jpeg` in About portrait and the chat-widget avatars.
- Add the `aurora` keyframe + `--animate-aurora` to globals.css (done).
- Remove the temporary `app/hero-mockups` page after sign-off.

## Verify
- Render `/` on the running dev (port 3000), screenshot, confirm: typewriter cycles, name reveal,
  Aurora visible, avatar harmonizes, no clipping, CTAs work. Then lint/typecheck/build before deploy.
