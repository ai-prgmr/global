# ==============================================================================
# THE GLOBALIZERS DESIGN FRAMEWORK
# ==============================================================================
#
# Version      : 1.0
# Project      : The Globalizers
# Framework    : Next.js 15 + Tailwind CSS v4 + shadcn/ui
# Animation    : Framer Motion
# Icons        : Lucide React
#
# This document is the single source of truth for every UI decision.
#
# Every AI Agent (Claude Code, Codex, Cursor, Gemini CLI, Windsurf)
# MUST read this file completely before making ANY UI changes.
#
# This document overrides personal preferences.
#
# The objective is NOT redesign.
#
# The objective is DESIGN MATURITY.
#
# ==============================================================================

# ==============================================================================
# TABLE OF CONTENTS
# ==============================================================================

1. Client Configuration
2. Project Vision
3. Design Philosophy
4. Design DNA
5. Brand Identity
6. Design Tokens
7. Typography System
8. Color System
9. Layout System
10. Spacing System
11. Grid System
12. Component Specifications
13. Marketing Section Library
14. Motion System
15. Accessibility
16. AI Development Rules
17. Code Standards
18. Refactoring Workflow
19. Quality Checklist
20. Design Scorecard
21. Master AI Prompt

==============================================================================
1. CLIENT CONFIGURATION
==============================================================================

Project Name
-------------
The Globalizers

Industry
--------
International Education Consultancy

Website Type
------------
Marketing Website

Framework
---------
Next.js 15 (App Router)

Language
--------
TypeScript

Styling
-------
Tailwind CSS v4

Component Library
-----------------
shadcn/ui

Icons
-----
Lucide React ONLY

Animation
----------
Framer Motion ONLY

Deployment
----------
Cloudflare

Architecture
------------
Server Components whenever possible.

Client Components only when interaction is required.

Target Audience
---------------
• Students
• Parents
• Working Professionals
• International Applicants

Primary Goals
-------------
1. Build Trust
2. Explain Services
3. Showcase Destinations
4. Showcase Universities
5. Generate Leads

Primary Conversion
------------------
Contact Form Submission

Secondary Conversion
--------------------
Phone Call

Tertiary Conversion
-------------------
WhatsApp

==============================================================================

2. PROJECT VISION

The Globalizers should become the benchmark website for premium education
consultancies.

The website should communicate professionalism before creativity.

The website should communicate trust before persuasion.

The website should feel established.

Not experimental.

Visitors should feel

"We're in safe hands."

within the first three seconds.

This website is NOT

• an EdTech startup

• a university

• a travel company

• a student social network

It is an INTERNATIONAL CONSULTANCY.

Everything should reinforce this.

==============================================================================

3. DESIGN PHILOSOPHY

The website exists to reduce uncertainty.

Every visual decision should reduce cognitive load.

The design should feel

Professional

Modern

Premium

International

Calm

Confident

Human

Accessible

Minimal

Timeless

Never

Flashy

Playful

Over-decorated

Over-animated

Loud

Busy

Immature

==============================================================================
Core Principle
==============================================================================

Trust before Beauty.

Every decision should increase trust.

Examples

Increase spacing

YES

Increase readability

YES

Increase consistency

YES

Add gradients everywhere

NO

Add glowing buttons

NO

Use random colors

NO

Overuse animation

NO

==============================================================================
4. DESIGN DNA
==============================================================================

These rules are immutable.

Rule 01

One page.

One purpose.

Rule 02

One section.

One story.

Rule 03

Every section begins with SectionHeader.

Rule 04

Every icon belongs inside IconBadge.

Rule 05

Cards are the primary composition unit.

Rule 06

Increase whitespace before decoration.

Rule 07

Blue establishes trust.

Rule 08

Red creates action.

Rule 09

White creates clarity.

Rule 10

Never invent spacing.

Rule 11

Never invent typography.

Rule 12

Never invent colors.

Rule 13

Never duplicate components.

Rule 14

Compose.

Don't customize.

Rule 15

Motion guides attention.

Motion never entertains.

Rule 16

Accessibility is mandatory.

Rule 17

Consistency creates trust.

Rule 18

Every section answers exactly one question.

Rule 19

Every page has one primary CTA.

Rule 20

Business logic is never modified during UI improvements.

==============================================================================
5. BRAND IDENTITY
==============================================================================

Brand Personality

Professional

Reliable

Global

Knowledgeable

Experienced

Premium

Approachable

Trustworthy

Brand Voice

Confident

Helpful

Clear

Simple

Professional

Never

Salesy

Pushy

Aggressive

Funny

Sarcastic

Immature

Brand Promise

Helping students make informed international education decisions through
professional guidance.

Brand Emotion

Visitors should leave feeling

"I know exactly what to do next."

instead of

"I saw a beautiful website."

==============================================================================
6. DESIGN PRINCIPLES
==============================================================================

Principle 1

Whitespace is a Feature.

Never compress content.

Never reduce spacing because it "fits."

Premium design breathes.

------------------------------------------------------------------------------

Principle 2

Hierarchy before Decoration.

Users should immediately understand

• what is important

• what is secondary

• what is optional

------------------------------------------------------------------------------

Principle 3

Composition before Components.

Good pages are not built from beautiful cards.

Good pages are built from good composition.

------------------------------------------------------------------------------

Principle 4

Every section has a visual anchor.

Examples

Large Image

Statistics

Timeline

Illustration

Grid

Never let multiple elements compete equally.

------------------------------------------------------------------------------

Principle 5

Predictability.

Users should never wonder

Is this clickable?

Is this important?

Where do I go next?

Everything should be obvious.

------------------------------------------------------------------------------

Principle 6

Restraint.

Whenever two solutions exist,

choose the simpler one.

==============================================================================

7. VISUAL LANGUAGE

Primary Color

Navy

Purpose

Trust

Authority

Structure

Accent Color

Red

Purpose

Action

Urgency

CTA

Background

White

Purpose

Clarity

Surface

Light Grey

Purpose

Visual Separation

Cards

White

Elevation

Subtle

Never floating excessively.

Border

Visible but subtle.

Radius

Large.

Shadows

Soft.

Animation

Restrained.

==============================================================================

8. VISUAL WEIGHT

Every section has a limited attention budget.

One Primary Element

One Secondary Element

Everything else supports those.

Example

Hero

Primary

Headline

Secondary

CTA

Everything else

Supports.

Never let

Buttons

Images

Badges

Icons

Illustrations

Cards

all compete equally.

==============================================================================

9. PAGE STORYTELLING

Every page should follow this narrative.

Hero

↓

Trust

↓

Problem

↓

Solution

↓

Process

↓

Proof

↓

FAQ

↓

CTA

↓

Footer

Do not rearrange without business justification.

==============================================================================

10. LAYOUT PHILOSOPHY

Layout creates premium perception.

Not colors.

Not shadows.

Not animations.

Layout.

Every section should feel intentional.

Every section should have breathing room.

Every section should align with the same container.

Every section should use the same rhythm.

Never allow arbitrary layouts.

==============================================================================
11. LAYOUT SYSTEM
==============================================================================

The layout system is the foundation of visual consistency.

All pages MUST use the same layout primitives.

Never create custom layouts unless there is a business requirement.

------------------------------------------------------------------------------
11.1 Layout Hierarchy
------------------------------------------------------------------------------

Every page follows this structure.

<Page>

    <Navbar />

    <Main>

        <HeroSection />

        <MarketingSection />

        <MarketingSection />

        <MarketingSection />

        <CTASection />

    </Main>

    <Footer />

Never skip levels.

Never render content directly inside <main> without a Section.

------------------------------------------------------------------------------
11.2 Section
------------------------------------------------------------------------------

Every content block is wrapped in a Section component.

Desktop

py-32

Tablet

py-24

Mobile

py-20

Never use

py-14

py-18

py-27

Random spacing is forbidden.

------------------------------------------------------------------------------
11.3 Container
------------------------------------------------------------------------------

One container.

One width.

max-width

1280px

Tailwind

max-w-7xl

Center

mx-auto

Horizontal Padding

px-6

Large Screens

lg:px-8

Extra Large

xl:px-10

Never invent new container widths.

------------------------------------------------------------------------------
11.4 Reading Width
------------------------------------------------------------------------------

Long paragraphs

max-w-3xl

Marketing copy

max-w-2xl

Hero

max-w-4xl

Forms

max-w-2xl

Blog Content

max-w-3xl

Never allow paragraphs to span the full container width.

------------------------------------------------------------------------------
11.5 Vertical Rhythm
------------------------------------------------------------------------------

Visual rhythm creates premium perception.

Use only these values.

Hero

py-40

Major Sections

py-32

Secondary Sections

py-24

Footer

py-20

Section Header Bottom Margin

mb-16

Card Grid Gap

gap-8

Element Gap

gap-4

Small Element Gap

gap-2

------------------------------------------------------------------------------
11.6 Alignment Rules
------------------------------------------------------------------------------

Section Headers

Left aligned

Hero

Center or Split Layout

Cards

Left aligned

Statistics

Center aligned

Forms

Left aligned

Buttons

Aligned with surrounding content

------------------------------------------------------------------------------
11.7 Section Composition
------------------------------------------------------------------------------

Every section follows exactly this order.

Eyebrow

↓

Heading

↓

Description

↓

Content

↓

Optional CTA

Nothing should appear above the eyebrow.

Nothing should appear below the CTA.

------------------------------------------------------------------------------
11.8 Layout Balance
------------------------------------------------------------------------------

Every section must contain one visual anchor.

Examples

Image

Illustration

Statistics

Timeline

Grid

Everything else supports the anchor.

Never create two competing anchors.

==============================================================================
12. SPACING SYSTEM
==============================================================================

Spacing is part of the brand.

Never invent spacing values.

------------------------------------------------------------------------------
12.1 Allowed Padding
------------------------------------------------------------------------------

p-4

p-6

p-8

p-10

Never

p-7

p-9

p-11

------------------------------------------------------------------------------
12.2 Allowed Gaps
------------------------------------------------------------------------------

gap-2

gap-4

gap-6

gap-8

gap-10

gap-12

Nothing else.

------------------------------------------------------------------------------
12.3 Margin Rules
------------------------------------------------------------------------------

Spacing should primarily be created with

gap

not

margin

Use margin only for isolated components.

------------------------------------------------------------------------------
12.4 Card Padding
------------------------------------------------------------------------------

Small Card

p-6

Standard Card

p-8

Large Card

p-10

------------------------------------------------------------------------------
12.5 Section Header Spacing
------------------------------------------------------------------------------

Eyebrow → Title

8px

Title → Description

16px

Description → Content

48px

------------------------------------------------------------------------------
12.6 Button Groups
------------------------------------------------------------------------------

Gap

16px

Wrap on mobile.

Never stack buttons unless necessary.

==============================================================================
13. GRID SYSTEM
==============================================================================

Only use CSS Grid.

Avoid Flexbox for card layouts.

------------------------------------------------------------------------------
13.1 Standard Marketing Grid
------------------------------------------------------------------------------

Desktop

4 Columns

Tablet

2 Columns

Mobile

1 Column

Gap

32px

------------------------------------------------------------------------------
13.2 Three Column Grid
------------------------------------------------------------------------------

Desktop

3

Tablet

2

Mobile

1

------------------------------------------------------------------------------
13.3 Statistics Grid
------------------------------------------------------------------------------

Desktop

4

Tablet

2

Mobile

2

------------------------------------------------------------------------------
13.4 Testimonials
------------------------------------------------------------------------------

Desktop

3

Tablet

2

Mobile

1

------------------------------------------------------------------------------
13.5 Forms
------------------------------------------------------------------------------

Desktop

2 Columns

Left

Information

Right

Form

Mobile

Single Column

==============================================================================
14. TYPOGRAPHY SYSTEM
==============================================================================

Typography establishes authority.

Never use typography randomly.

------------------------------------------------------------------------------
14.1 Font Families
------------------------------------------------------------------------------

Headings

Montserrat

Body

Inter

Code

JetBrains Mono

------------------------------------------------------------------------------
14.2 Heading Scale
------------------------------------------------------------------------------

Hero

text-6xl

Desktop

Section Title

text-5xl

Desktop

Subsection

text-4xl

Card Title

text-2xl

Body

text-lg

Caption

text-sm

------------------------------------------------------------------------------
14.3 Font Weight
------------------------------------------------------------------------------

Hero

700

Section

700

Card

600

Body

400

Buttons

600

------------------------------------------------------------------------------
14.4 Paragraph Rules
------------------------------------------------------------------------------

Maximum width

70 characters

Maximum paragraph

4 lines

Split long content.

------------------------------------------------------------------------------
14.5 Text Colors
------------------------------------------------------------------------------

Heading

Foreground

Body

Muted Foreground

Caption

Muted Foreground

Links

Primary

Never use pure black.

==============================================================================
15. COLOR SYSTEM
==============================================================================

Never introduce additional brand colors.

Primary

Brand Navy

Secondary

Brand Red

Background

White

Surface

Light Neutral

Cards

White

Text

Foreground

Muted Text

Muted Foreground

Success

Existing Success Token

Warning

Existing Warning Token

Error

Existing Destructive Token

Always reference semantic tokens.

Never hardcode hex values inside components.

==============================================================================
16. ELEVATION SYSTEM
==============================================================================

Only three elevation levels exist.

Level 0

Flat

Level 1

Default Card

shadow-sm

Level 2

Hover

shadow-lg

Nothing else.

No glow.

No neon.

No exaggerated shadows.

==============================================================================
17. BORDER SYSTEM
==============================================================================

Border Radius

Cards

rounded-3xl

Buttons

rounded-full

Inputs

rounded-xl

Badges

rounded-full

Icon Containers

rounded-2xl

Never invent custom radius values.

Border Color

border-border

Only.

==============================================================================
18. RESPONSIVE RULES
==============================================================================

Desktop First

No.

Mobile First

Yes.

------------------------------------------------------------------------------
18.1 Mobile
------------------------------------------------------------------------------

Every section must work on

360px

390px

430px

------------------------------------------------------------------------------
18.2 Tablet
------------------------------------------------------------------------------

768px

1024px

------------------------------------------------------------------------------
18.3 Desktop
------------------------------------------------------------------------------

1280px

1440px

1600px

------------------------------------------------------------------------------
18.4 Responsive Images
------------------------------------------------------------------------------

Always

object-cover

Rounded

Responsive

Never distort.

------------------------------------------------------------------------------
18.5 Responsive Typography
------------------------------------------------------------------------------

Hero

text-4xl

Mobile

↓

text-6xl

Desktop

Section

text-3xl

Mobile

↓

text-5xl

Desktop

------------------------------------------------------------------------------
18.6 Responsive Buttons
------------------------------------------------------------------------------

Desktop

Auto Width

Mobile

Full Width (preferred for stacked CTAs)

------------------------------------------------------------------------------
18.7 Responsive Cards
------------------------------------------------------------------------------

Cards should always maintain equal height within a row where practical.

Avoid uneven visual rhythm.

------------------------------------------------------------------------------
18.8 Responsive Navigation
------------------------------------------------------------------------------

Desktop

Horizontal Navigation

Mobile

Drawer Navigation

No multi-level menus on mobile.

==============================================================================
19. VISUAL CONSISTENCY RULES
==============================================================================

Every page must feel like it was designed by the same designer.

Checklist:

✓ Same card radius

✓ Same shadows

✓ Same spacing

✓ Same typography

✓ Same icon treatment

✓ Same button styles

✓ Same CTA hierarchy

✓ Same animation language

✓ Same section rhythm

If any component breaks these rules, refactor it instead of introducing a new style.

==============================================================================
20. COMPONENT SPECIFICATIONS
==============================================================================

This section defines every reusable UI primitive.

No page should create one-off UI.

Every page must compose existing primitives.

Component Hierarchy

Primitive Components

↓

Marketing Components

↓

Sections

↓

Pages

==============================================================================
20.1 SECTION
==============================================================================

Purpose

Defines a vertical content block.

Usage

<Section>
    <Container>
        ...
    </Container>
</Section>

Rules

• Never contain business logic.
• Never set custom widths.
• Never define custom spacing.
• Never use inline styles.

Responsibilities

✓ Vertical spacing
✓ Background
✓ Overflow handling

==============================================================================
20.2 CONTAINER
==============================================================================

Purpose

Defines maximum readable width.

Rules

Width

max-w-7xl

Center

mx-auto

Padding

px-6
lg:px-8
xl:px-10

Never override.

==============================================================================
20.3 SECTION HEADER
==============================================================================

Purpose

Introduces every marketing section.

Usage

<SectionHeader
    eyebrow=""
    title=""
    description=""
/>

Hierarchy

Eyebrow

↓

Heading

↓

Description

Rules

Eyebrow

• Uppercase
• Tracking Wide
• Brand Primary
• Font Medium

Heading

• Font Heading
• Bold
• Maximum 2 lines

Description

• Maximum 3 lines
• Muted Foreground

Alignment

Default

Left

Hero

Center

Never build custom section headers.

==============================================================================
20.4 BUTTON
==============================================================================

Only two variants exist.

PRIMARY

Purpose

Primary conversion.

Style

Background

Primary

Foreground

White

Radius

Full

Height

56px

Padding

px-8

Shadow

Small

Hover

Lift

Shadow Increase

SECONDARY

Purpose

Supporting action.

Style

Transparent

Border

Primary

Text

Primary

Hover

Subtle Fill

Never create tertiary buttons.

==============================================================================
20.5 ICON BADGE
==============================================================================

Every icon MUST be wrapped.

Usage

<IconBadge icon={GraduationCap} />

Structure

48x48

Rounded-2xl

Primary Tint Background

Primary Icon

Border

Shadow-sm

Allowed Icons

Lucide React ONLY

Never

Heroicons

FontAwesome

Material Icons

Random SVG packs

==============================================================================
20.6 CARD
==============================================================================

The base primitive.

Every marketing card extends this.

Structure

Rounded-3xl

Border

Background

Shadow-sm

Padding

p-8

Hover

Shadow-lg

TranslateY(-2px)

Duration

300ms

Never

Remove borders

Invent new shadows

Use custom radius

==============================================================================
20.7 FEATURE CARD
==============================================================================

Purpose

Explain a capability.

Structure

IconBadge

↓

Heading

↓

Description

↓

Optional CTA

Maximum

Title

2 lines

Description

4 lines

Never

Place icon below title.

==============================================================================
20.8 COUNTRY CARD
==============================================================================

Purpose

Destination overview.

Structure

Image

↓

Country

↓

Programs

↓

University Count

↓

CTA

Hover

Image Zoom

Card Lift

Rules

Equal Heights

Consistent Image Ratio

==============================================================================
20.9 UNIVERSITY CARD
==============================================================================

Purpose

Highlight partner universities.

Structure

Logo

↓

University Name

↓

Country

↓

Ranking

↓

Programs

Minimal.

No heavy styling.

==============================================================================
20.10 STAT CARD
==============================================================================

Purpose

Quick credibility.

Structure

Large Number

↓

Label

Optional

Small Description

Never

Paragraphs.

==============================================================================
20.11 PROCESS CARD
==============================================================================

Purpose

Explain workflow.

Structure

Step Number

↓

Title

↓

Description

Connect cards visually.

Timeline preferred.

==============================================================================
20.12 TESTIMONIAL CARD
==============================================================================

Purpose

Social proof.

Structure

Avatar

↓

Name

↓

University

↓

Quote

↓

Rating

Maximum

Quote

4 lines

==============================================================================
20.13 FOUNDER CARD
==============================================================================

Purpose

Humanize the brand.

Structure

Portrait

↓

Mission Statement

↓

Founder Name

↓

Designation

↓

CTA

Never biography.

==============================================================================
20.14 BLOG CARD
==============================================================================

Purpose

Content discovery.

Structure

Featured Image

↓

Category

↓

Title

↓

Excerpt

↓

Read More

Keep equal heights.

==============================================================================
20.15 CTA SECTION
==============================================================================

Purpose

Generate leads.

Structure

Headline

↓

Supporting Text

↓

Primary CTA

↓

Secondary CTA (optional)

↓

Illustration

Rules

Only ONE primary CTA.

==============================================================================
20.16 FAQ
==============================================================================

Use Accordion.

Rounded.

Minimal.

No excessive borders.

Maximum

One answer expanded.

==============================================================================
20.17 CONTACT FORM
==============================================================================

Fields

Name

Email

Phone

Message

Optional

Preferred Destination

Rules

Labels always visible.

Never placeholder-only forms.

==============================================================================
20.18 NAVBAR
==============================================================================

Purpose

Orientation.

Structure

Logo

↓

Navigation

↓

Primary CTA

Sticky

Yes

Transparent over Hero

Allowed

Solid after scroll

Yes

==============================================================================
20.19 FOOTER
==============================================================================

Structure

Logo

↓

Quick Links

↓

Services

↓

Contact

↓

Social

↓

Copyright

Large spacing.

Readable.

No clutter.

==============================================================================

21. MARKETING SECTION LIBRARY

Marketing sections are reusable business patterns.

Do not redesign these.

Compose them.

==============================================================================

21.1 HERO SECTION

Purpose

Create trust immediately.

Blueprint

Eyebrow

↓

Headline

↓

Supporting Copy

↓

Primary CTA

↓

Secondary CTA

↓

Trust Indicators

↓

Hero Visual

Rules

• Never use carousel.
• Never autoplay video.
• Never exceed two CTAs.
• Hero should fit within first viewport where practical.

==============================================================================

21.2 TRUST SECTION

Purpose

Reduce uncertainty.

Examples

Partner Logos

Achievements

Accreditations

Media Mentions

Statistics

Layout

SectionHeader

↓

Logo Cloud / Stats

==============================================================================

21.3 SERVICES SECTION

Purpose

Explain offerings.

Blueprint

SectionHeader

↓

3–6 Feature Cards

↓

CTA

Cards must have equal height.

==============================================================================

21.4 DESTINATIONS SECTION

Purpose

Help users self-identify.

Blueprint

SectionHeader

↓

Country Grid

↓

CTA

Never use tabs or carousels.

==============================================================================

21.5 UNIVERSITIES SECTION

Purpose

Increase credibility.

Blueprint

SectionHeader

↓

University Grid

↓

CTA

Prefer logos over long descriptions.

==============================================================================

21.6 EXAM PREPARATION

Purpose

Show additional services.

Blueprint

SectionHeader

↓

Bento Grid

↓

CTA

Keep hierarchy simple.

==============================================================================

21.7 PROCESS SECTION

Purpose

Reduce anxiety.

Blueprint

SectionHeader

↓

Timeline

↓

CTA

Each step answers one question.

==============================================================================

21.8 TESTIMONIAL SECTION

Purpose

Emotional proof.

Blueprint

SectionHeader

↓

Testimonials

↓

CTA

Never overload with long testimonials.

==============================================================================

21.9 SUCCESS STORIES

Purpose

Demonstrate outcomes.

Blueprint

Statistics

↓

Student Story

↓

University

↓

Result

Highlight measurable success.

==============================================================================

21.10 FOUNDER SECTION

Purpose

Humanize the consultancy.

Blueprint

Portrait

↓

Mission

↓

Credentials

↓

CTA

Authenticity over promotion.

==============================================================================
21.11 STATISTICS SECTION
==============================================================================

Purpose

Build credibility through measurable achievements.

Blueprint

SectionHeader

↓

Statistics Grid

↓

Optional Supporting Copy

Rules

• 3–6 statistics only.
• Large numbers.
• Small labels.
• Optional supporting description.
• Never mix statistics with testimonials.

Examples

1200+

Students Guided

95%

Visa Success Rate

50+

Partner Universities

15+

Countries

==============================================================================

21.12 WHY CHOOSE US
==============================================================================

Purpose

Differentiate from competitors.

Blueprint

SectionHeader

↓

Feature Cards

↓

Comparison (optional)

↓

CTA

Rules

• Focus on outcomes.
• Avoid generic marketing language.
• Every feature must solve a student problem.

==============================================================================

21.13 BLOG SECTION
==============================================================================

Purpose

Establish authority.

Blueprint

SectionHeader

↓

Latest Articles Grid

↓

View All CTA

Rules

• Equal card heights.
• Featured image mandatory.
• Maximum 3 featured articles.
• Show publication date.

==============================================================================

21.14 FAQ SECTION
==============================================================================

Purpose

Remove objections.

Blueprint

SectionHeader

↓

Accordion

↓

CTA

Rules

• Questions written in natural language.
• One accordion open at a time.
• Keep answers concise.

==============================================================================

21.15 CONTACT SECTION
==============================================================================

Purpose

Generate qualified leads.

Blueprint

Left Column

Business Information

↓

Contact Details

↓

Office Hours

↓

Social Links

Right Column

Contact Form

Rules

• Form always visible.
• Phone number clickable.
• Email clickable.
• WhatsApp optional.

==============================================================================

22. MOTION SYSTEM
==============================================================================

Motion exists to improve usability.

Never animate for decoration.

Every animation must have purpose.

------------------------------------------------------------------------------
22.1 Motion Principles
------------------------------------------------------------------------------

Purpose over novelty.

Fast over flashy.

Subtle over dramatic.

Consistent over creative.

------------------------------------------------------------------------------
22.2 Animation Library
------------------------------------------------------------------------------

Allowed

Fade

Slide

Scale

Stagger

Reveal

Parallax (very subtle)

Forbidden

Bounce

Spin

Shake

Flash

Elastic

Random floating

Infinite looping

------------------------------------------------------------------------------
22.3 Duration Scale
------------------------------------------------------------------------------

Fast

150ms

Normal

250ms

Slow

350ms

Maximum

500ms

Never exceed 500ms for UI interactions.

------------------------------------------------------------------------------
22.4 Easing
------------------------------------------------------------------------------

ease-out

Default for entrances.

ease-in-out

Default for interactions.

Never use linear except loaders.

------------------------------------------------------------------------------
22.5 Scroll Animations
------------------------------------------------------------------------------

Animate once.

Viewport threshold

20%

Fade Up

20px

Opacity

0 → 1

Duration

350ms

Never animate every tiny element.

------------------------------------------------------------------------------
22.6 Hover Animations
------------------------------------------------------------------------------

Buttons

Translate Y

-2px

Cards

Translate Y

-4px

Shadow

Increase slightly

Icons

Scale

1.05

Never rotate icons.

------------------------------------------------------------------------------
22.7 Page Transitions
------------------------------------------------------------------------------

Very subtle.

Fade

Opacity

0 → 1

Duration

250ms

==============================================================================

23. ACCESSIBILITY
==============================================================================

Accessibility is mandatory.

Every feature must remain usable.

------------------------------------------------------------------------------
23.1 Keyboard Navigation
------------------------------------------------------------------------------

Every interactive element must be reachable.

Visible focus states required.

Logical tab order required.

------------------------------------------------------------------------------
23.2 Color Contrast
------------------------------------------------------------------------------

Meet WCAG AA minimum.

Never use low-contrast text.

------------------------------------------------------------------------------
23.3 Images
------------------------------------------------------------------------------

Decorative

Empty alt

Informative

Meaningful alt text

Never omit alt attributes.

------------------------------------------------------------------------------
23.4 Forms
------------------------------------------------------------------------------

Every input needs

Visible label

Error message

Focus state

ARIA support

------------------------------------------------------------------------------
23.5 Motion
------------------------------------------------------------------------------

Respect prefers-reduced-motion.

Disable non-essential animation.

------------------------------------------------------------------------------
23.6 Touch Targets
------------------------------------------------------------------------------

Minimum

44px

Buttons

Links

Icons

Inputs

==============================================================================

24. AI DEVELOPMENT RULES
==============================================================================

This section governs ALL AI-generated code.

------------------------------------------------------------------------------
24.1 Before Editing
------------------------------------------------------------------------------

Read this document completely.

Understand existing architecture.

Search for reusable components.

Never begin coding immediately.

------------------------------------------------------------------------------
24.2 Preserve
------------------------------------------------------------------------------

Always preserve

Business logic

SEO

Routing

Accessibility

Responsiveness

Content hierarchy

Metadata

Structured data

Performance

------------------------------------------------------------------------------
24.3 Never
------------------------------------------------------------------------------

Never

Hardcode colors

Hardcode spacing

Hardcode typography

Duplicate components

Break layouts

Remove accessibility

Introduce new dependencies without approval

Invent new design language

Rewrite business copy

Rename routes

Change API logic

------------------------------------------------------------------------------
24.4 Always
------------------------------------------------------------------------------

Always

Use design tokens

Reuse primitives

Compose components

Improve whitespace

Improve hierarchy

Reduce duplication

Prefer Server Components

Optimize images

Use semantic HTML

------------------------------------------------------------------------------
24.5 Component Search Rule
------------------------------------------------------------------------------

Before creating any component

Search existing components.

If one exists

Reuse it.

If two are similar

Merge them.

If three duplicates exist

Create one primitive.

==============================================================================

25. CODE STANDARDS
==============================================================================

Folder Structure

components/

primitives/

marketing/

layout/

forms/

navigation/

sections/

Rules

• One component per file.
• Named exports preferred.
• Barrel exports allowed.
• No anonymous default exports.

------------------------------------------------------------------------------
Naming
------------------------------------------------------------------------------

Good

FeatureCard.tsx

HeroSection.tsx

SectionHeader.tsx

Bad

card.tsx

newcard.tsx

hero2.tsx

------------------------------------------------------------------------------
TypeScript
------------------------------------------------------------------------------

Strict mode.

No any.

Interfaces preferred.

Readonly where possible.

------------------------------------------------------------------------------
Tailwind
------------------------------------------------------------------------------

Use utility classes.

No inline styles.

No arbitrary values unless approved.

------------------------------------------------------------------------------
Imports
------------------------------------------------------------------------------

Absolute imports preferred.

Group imports

React

Third Party

Internal

Styles

==============================================================================

26. PERFORMANCE RULES
==============================================================================

Images

Next/Image only.

Lazy load below fold.

Optimize sizes.

Fonts

Self-host where possible.

Use font-display swap.

Animation

GPU accelerated.

Avoid layout thrashing.

Bundle

Tree shake.

Remove dead code.

Dynamic import heavy sections.

==============================================================================

27. SEO PRESERVATION
==============================================================================

Never remove

Metadata

Canonical URLs

Open Graph

Twitter Cards

JSON-LD

Heading hierarchy

Image alt text

Internal links

==============================================================================

28. REFACTORING WORKFLOW
==============================================================================

Every page follows the same workflow.

Step 1

Read page.

↓

Step 2

Understand purpose.

↓

Step 3

Identify duplicated UI.

↓

Step 4

Replace with primitives.

↓

Step 5

Improve hierarchy.

↓

Step 6

Improve spacing.

↓

Step 7

Improve responsiveness.

↓

Step 8

Improve accessibility.

↓

Step 9

Improve performance.

↓

Step 10

Verify visual consistency.

Never skip steps.

==============================================================================

29. PAGE QUALITY CHECKLIST
==============================================================================

Every completed page must satisfy all items.

Layout

✓ Uses Section

✓ Uses Container

✓ Uses SectionHeader

✓ Uses Grid System

Components

✓ Uses reusable primitives

✓ Uses IconBadge

✓ Uses Button variants

✓ Uses Card primitives

Design

✓ Consistent spacing

✓ Consistent typography

✓ Consistent radius

✓ Consistent shadows

✓ Proper hierarchy

Performance

✓ Optimized images

✓ No layout shift

✓ Lazy loading

Accessibility

✓ Keyboard support

✓ Visible focus

✓ Proper labels

✓ Alt text

Responsive

✓ Mobile

✓ Tablet

✓ Desktop

SEO

✓ Metadata preserved

✓ Headings preserved

✓ Structured data preserved

==============================================================================

30. DESIGN SCORECARD
==============================================================================

Every page receives a score.

Visual Hierarchy ............. /10

Spacing ...................... /10

Consistency .................. /10

Typography ................... /10

Component Reuse .............. /10

Accessibility ................ /10

Performance .................. /10

Responsiveness ............... /10

Brand Alignment .............. /10

Conversion Clarity ........... /10

Total

100

Minimum acceptable score

90

Nothing ships below 90.

==============================================================================

31. MASTER AI EXECUTION PROMPT
==============================================================================

You are a Senior Staff Product Designer and Senior Frontend Engineer.

Read this DESIGN_FRAMEWORK.md completely before making any changes.

This document is the constitution of the project.

Your objective is to increase the design maturity of the application while preserving business logic and functionality.

You MUST:

• Preserve all routes.
• Preserve all SEO.
• Preserve all metadata.
• Preserve accessibility.
• Preserve responsiveness.
• Preserve business copy unless instructed otherwise.
• Preserve branding.
• Use Next.js 15 best practices.
• Use Tailwind CSS v4.
• Use shadcn/ui.
• Use Lucide React.
• Use Framer Motion for subtle animations.
• Reuse existing components before creating new ones.
• Replace duplicated UI with reusable primitives.
• Improve spacing, hierarchy, typography, and composition.
• Follow the layout, spacing, grid, and component rules defined in this document.
• Produce production-ready code only.

Do NOT redesign the website.

Do NOT change business intent.

Do NOT introduce unnecessary complexity.

The result should feel like a premium marketing website designed with the consistency and restraint of Stripe, Linear, Vercel, or Apple while preserving The Globalizers' brand identity.

END OF DESIGN FRAMEWORK
==============================================================================
