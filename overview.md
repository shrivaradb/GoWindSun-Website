# GoWindSun India Pvt Ltd Website
## Developer Documentation & Project Blueprint
**Version:** 1.0
**Status:** Active Development
**Framework:** Next.js 16 App Router + TypeScript

---

# 1. Project Overview

## Company

**GoWindSun India Pvt Ltd**

GoWindSun India Pvt Ltd is an Indian renewable energy engineering company delivering integrated clean energy solutions across utility-scale, commercial, industrial and institutional sectors.

The company specializes in designing, consulting, developing and delivering renewable energy infrastructure that combines multiple technologies into reliable energy ecosystems.

Unlike residential solar companies, GoWindSun positions itself as an engineering partner capable of delivering large-scale renewable energy projects for enterprises, developers, government organizations and financial institutions.

---

# 2. Business Objective

The website should position GoWindSun as a premium engineering company.

The website is NOT intended to look like:

- startup SaaS
- crypto company
- AI company
- template website
- portfolio

Instead it should communicate:

- Engineering Excellence
- Technical Competence
- Enterprise Trust
- Long-term Stability
- Financial Credibility
- Renewable Innovation

A visitor should immediately understand that GoWindSun is capable of delivering projects worth crores of rupees.

---

# 3. Company Services

Primary services include:

- Solar Power Projects
- Wind Energy Projects
- Hybrid Renewable Energy Systems
- Battery Energy Storage Systems (BESS)
- Renewable Energy Consulting
- Engineering Procurement Construction (EPC)
- Project Development
- Technical Advisory
- Owner's Engineering
- Energy Infrastructure Planning
- Feasibility Studies
- Grid Integration

---

# 4. Industries Served

- Independent Power Producers (IPPs)
- Commercial Buildings
- Manufacturing Industries
- Government Organizations
- OEMs
- Infrastructure Developers
- EPC Companies
- Financial Institutions
- Banks
- NBFCs
- Data Centers
- Industrial Parks
- Energy Consultants
- Renewable Developers

---

# 5. Primary Audience

## Tier 1

Decision Makers

- CEOs
- Directors
- CXOs
- Plant Heads
- Project Heads
- Procurement Heads
- Energy Managers
- Government Officials

---

## Tier 2

Financial

- Investors
- Banks
- NBFCs
- Infrastructure Funds

---

## Tier 3

Technical

- EPC Contractors
- Consultants
- Developers
- OEM Partners

---

# 6. Website Goal

The website should:

- Build trust immediately
- Generate qualified enterprise leads
- Showcase engineering capability
- Demonstrate technical expertise
- Present premium brand perception
- Encourage contact and consultation
- Support long-term business growth

---

# 7. Brand Personality

The brand is:

Professional

Engineering-first

Reliable

Timeless

Confident

Minimal

Elegant

Premium

Not flashy

Not trendy

Not playful

---

# 8. Brand Voice

Use language that is:

Clear

Professional

Technical where necessary

Business friendly

Confident

Short

Direct

Never exaggerated.

Avoid marketing buzzwords like:

- Revolutionizing
- Disrupting
- Amazing
- Cutting-edge
- World-class
- Best-in-class

Instead use:

- Engineered
- Integrated
- Reliable
- Sustainable
- Scalable
- Optimized
- Delivered
- Designed

---

# 9. Design Philosophy

Primary inspiration comes from:

- Apple
- Stripe
- Siemens Energy
- GE Vernova
- Vestas
- Tesla Energy
- Schneider Electric

The website should understand WHY these companies look premium rather than copying their layouts.

---

# 10. Visual Direction

Overall feel:

Modern engineering.

Large white space.

Strong typography.

Clean grids.

Sharp alignment.

Minimal decoration.

Sophisticated motion.

No unnecessary effects.

---

# 11. Color System

Primary Background

#06111F

---

Surface

#0D1B2A

---

Surface Elevated

#13263D

---

Primary Accent

#2563EB

---

Hover Accent

#3B82F6

---

Success

#10B981

---

Primary Text

#FFFFFF

---

Secondary Text

#CBD5E1

---

Muted Text

#94A3B8

---

Borders

rgba(255,255,255,0.08)

---

Glass

rgba(255,255,255,0.05)

---

# 12. Typography

Primary Font

Geist

Fallback

Inter

---

Hero Heading

72–80px

Bold

Line height:

1.02

Tracking:

-0.04em

---

Section Heading

48px

Bold

---

Body

18px

Line Height

1.8

---

Navigation

15px

Medium

---

Buttons

15–16px

Semibold

---

# 13. Spacing System

Section Padding

140px desktop

100px tablet

80px mobile

---

Container Width

1280px

---

Content Width

700px

---

Grid

12 Columns

---

Border Radius

Buttons

999px

Cards

24px

Sections

32px

---

# 14. Shadows

Soft.

Natural.

No harsh black shadows.

Primary

0 20px 60px rgba(0,0,0,.18)

---

# 15. Motion Language

Use motion only to improve clarity.

Animation library:

Framer Motion

GSAP only where scroll storytelling is required.

Lenis for smooth scrolling.

Avoid:

Bounce

Elastic

Crazy rotations

Large zoom effects

---

Animation Style

Fade

TranslateY

Opacity

Parallax

Blur

Scale

Very subtle.

---

# 16. Tech Stack

Framework

Next.js 16 App Router

---

Language

TypeScript

Strict Mode

---

Styling

Tailwind CSS

---

Animations

Framer Motion

GSAP

Lenis

---

Icons

Lucide React

---

Forms

React Hook Form

Zod

---

Utilities

clsx

tailwind-merge

class-variance-authority

---

# 17. Folder Structure

```text
src
│
├── app
│
├── components
│   ├── home
│   ├── layout
│   ├── sections
│   ├── ui
│
├── config
│   └── site.ts
│
├── data
│
├── hooks
│
├── lib
│   └── utils.ts
│
├── styles
│
├── types
│
└── public
    ├── images
    ├── icons
    └── documents
```

---

# 18. Components Completed

- utils.ts

- site.ts

- Button.tsx

- Container.tsx

- Section.tsx

- SectionHeading.tsx

- Navbar.tsx

- MobileMenu.tsx

- Hero.tsx

---

# 19. Planned Sections

Home

Hero

About

Services

Industries

Projects

Resources

Leadership

Why GoWindSun

Statistics

Testimonials

FAQ

CTA

Contact

Footer

---

# 20. Navigation

Home

About

Services

Industries

Projects

Resources

Contact

---

# 21. Performance Goals

Lighthouse

Performance

95+

Accessibility

100

SEO

100

Best Practices

100

---

# 22. Accessibility

Keyboard navigation

Visible focus states

Semantic HTML

ARIA where required

Color contrast compliant

Screen reader friendly

Reduced motion support

---

# 23. SEO Strategy

Metadata API

Dynamic OG Images

Structured Data (JSON-LD)

Open Graph

Twitter Cards

Canonical URLs

Robots.txt

Sitemap.xml

Breadcrumb Schema

Organization Schema

Service Schema

FAQ Schema

---

# 24. Image Strategy

Next/Image

AVIF

WebP

Responsive sizes

Lazy loading

Priority only for hero assets

---

# 25. Coding Standards

- TypeScript strict
- No `any`
- Reusable components
- Server Components by default
- Client Components only when necessary
- Clean imports
- Absolute imports
- No duplicated logic
- Production-ready code only

---

# 26. Development Workflow

1. Build reusable UI primitives.
2. Create global configuration.
3. Build layout components.
4. Build homepage section by section.
5. Implement SEO.
6. Optimize performance.
7. Add animations.
8. Test responsiveness.
9. Accessibility audit.
10. Production deployment.

---

# 27. Deployment

Platform: Vercel

Environment Variables:
- (Add as required)

Image Optimization: Enabled

Compression: Enabled

Static Generation: Preferred where applicable

---

# 28. Future Enhancements

- CMS integration (Sanity/Contentful/Strapi)
- Blog & Insights
- Case Studies
- Careers portal
- Project filtering
- Download center
- Multi-language support
- Dark/Light theme (if ever required)
- Analytics dashboard
- CRM integration
- Lead capture automation
- Contact form email integration
- Newsletter subscription

---

# 29. Project Vision

The goal is to create one of the highest-quality renewable energy corporate websites in India—one that reflects engineering excellence, earns the trust of enterprise clients, investors, and government stakeholders, and remains visually timeless for years without relying on short-lived design trends.

Every design decision, animation, interaction, and line of code should reinforce GoWindSun's identity as a dependable, technically capable, and premium renewable energy engineering company.