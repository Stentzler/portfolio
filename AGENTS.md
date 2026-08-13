# Agent Instructions

## 1. Mission

Build and maintain the static bilingual portfolio defined in `SPEC.md`.

Optimize for clarity, maintainability, accessibility, performance, and a small production footprint. Do not expand the product beyond the approved specification without explicit user direction.

## 2. Sources of Truth

Use this precedence when instructions conflict:

1. The user's current explicit request.
2. `SPEC.md` for product behavior and scope.
3. This file for implementation rules.
4. Existing repository conventions and tool configuration.

Read `SPEC.md` before planning or implementing a feature. If a requested change materially alters scope or architecture, update `SPEC.md` in the same change or ask the user whether the specification should change.

Never invent personal information, project outcomes, professional experience, URLs, credentials, or translations.

## 3. Approved Stack

- Next.js with the App Router.
- React and TypeScript in strict mode.
- Static export through `output: "export"`.
- Tailwind CSS.
- Local JSON content validated with Zod.
- pnpm and the committed lockfile.
- Active Node.js LTS version pinned by the repository.

Do not introduce another framework, styling system, state-management library, component library, CMS, backend, database, or test framework unless the user requests it and the specification is updated.

## 4. Required Commands

Use the scripts declared in `package.json` as the authoritative commands. The repository should expose these commands:

| Command | Purpose |
| --- | --- |
| `pnpm install --frozen-lockfile` | Reproduce dependencies in CI |
| `pnpm dev` | Start local development |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run TypeScript without emitting files |
| `pnpm validate:content` | Validate JSON content when not already covered by build |
| `pnpm build` | Produce the static site in `out/` |

Do not claim a change is complete unless the relevant available quality commands pass. At minimum, run lint, type-checking, content validation, and the production build after implementation changes.

There is no automated test suite in the initial version. Do not add placeholder tests, testing dependencies, or a test command without explicit approval.

## 5. Static-Only Architecture

The deployed artifact is the `out/` directory. No Next.js server may be required after the build.

### Required

- Keep `output: "export"` enabled.
- Generate every dynamic locale and project route at build time.
- Use `generateStaticParams()` for dynamic segments.
- Read local content during the build.
- Make project pages deterministic from repository files.
- Confirm static compatibility with a full production build.

### Forbidden without a specification change

- API routes or request-dependent route handlers.
- Server Actions.
- Runtime middleware.
- Authentication, sessions, or runtime cookies.
- Request-header-dependent output.
- Incremental Static Regeneration.
- Dynamic rendering or `force-dynamic`.
- Runtime databases or CMS integrations.
- Required runtime fetches for core content.
- Hosting-provider features that prevent independent static hosting.

If a requested feature conflicts with static export, explain the conflict and present a static-compatible option before changing the architecture.

## 6. Project Structure

Prefer the following organization unless the initialized project establishes an equivalent clear convention:

    src/
      app/
        projects/
          [slug]/
        pt/
          projects/
            [slug]/
      components/
        layout/
        sections/
        projects/
        ui/
      content/
        projects/
      data/
      lib/
        content/
        i18n/
        seo/
        validation/
      types/
    public/
      images/
      resumes/

Keep route files focused on composition, metadata, and static parameter generation. Move reusable presentation to components and content access or transformation to `lib`.

Do not create layers, abstractions, directories, or generic utilities without a current use case.

## 7. Component Rules

- Use Server Components by default.
- Add `"use client"` only when a component requires state, event handlers, effects, or a browser-only API.
- Keep Client Components small and near the interactive leaf that needs them.
- Do not convert a page or layout into a Client Component to support one interactive child.
- Prefer composition over large components with many boolean props.
- Keep components focused on one clear responsibility.
- Use semantic HTML before adding ARIA or JavaScript behavior.
- Avoid storing derived values in state.
- Do not add global state management for local UI behavior.
- Do not add dependencies for behavior that the platform or a small local component can provide clearly.

## 8. TypeScript Rules

- Keep strict mode enabled.
- Do not use `any` unless an external boundary makes it unavoidable and the reason is documented.
- Prefer inferred local types and explicit public component or function contracts.
- Model finite values with literal unions or validated enums.
- Parse untrusted or file-based content at its boundary.
- Do not silence TypeScript errors with broad assertions.
- Use `unknown` and narrow it safely when a value has not been validated.
- Keep domain types close to the content schema or feature that owns them.

## 9. Content Rules

All user-editable portfolio copy and structured information belongs in JSON files.

### Required practices

- Keep personal and shared profile data in `src/data/profile.json`.
- Keep localized interface text in `src/data/ui.json`.
- Keep one project per file under `src/content/projects/`.
- Validate content with centralized Zod schemas.
- Access content through centralized content utilities rather than scattered imports.
- Keep project slugs stable, unique, lowercase, and URL-safe.
- Keep language-independent metadata separate from localized text inside each project entry.
- Require both English and Portuguese content before publishing an entry.
- Omit optional project sections rather than inserting filler text.
- Exclude drafts and private projects from routes, indexes, and metadata outputs.

### Prohibited practices

- Do not hardcode portfolio copy in JSX or TSX.
- Do not duplicate the same project metadata in multiple JSON files.
- Do not store raw HTML in JSON.
- Do not render content through `dangerouslySetInnerHTML`.
- Do not silently fall back to another language for required published content.
- Do not modify factual content merely to make wording more impressive.

If content is missing, use an explicit placeholder only when the user requested scaffolding. Placeholders must be easy to find and must never be presented as real facts.

## 10. Internationalization Rules

- English is the default and uses unprefixed routes.
- Portuguese uses the `/pt` route prefix.
- Supported locale identifiers are `en` and `pt-BR`.
- Preserve the corresponding route when switching language.
- Keep project slugs the same across languages.
- Localize page metadata, navigation, visible labels, accessible names, and project content.
- Set the correct document language.
- Generate canonical and alternate-language metadata.
- Treat missing required translations as a validation failure.
- Do not add automatic locale detection or redirection in the initial version.

Avoid passing arbitrary locale strings through the application. Validate locales at the route or content boundary and use a finite locale type internally.

## 11. Tailwind CSS Rules

- Use Tailwind utilities as the default styling mechanism.
- Define shared colors, typography, spacing, radii, shadows, and breakpoints as design tokens.
- Reuse semantic tokens instead of scattering literal color values.
- Keep responsive behavior mobile-first.
- Extract a component when a meaningful visual and behavioral pattern repeats.
- Do not create wrapper components solely to hide a short set of Tailwind classes.
- Avoid excessive arbitrary values.
- Avoid long conditional class expressions; use a small class-composition helper only when needed.
- Keep global CSS limited to Tailwind setup, design tokens, base styles, and truly global behavior.
- Do not add CSS Modules, CSS-in-JS, Sass, or another styling system without approval.
- Do not add a component library merely to obtain a few basic elements.

The first release has one visual theme. Do not add dark-mode infrastructure or a theme switcher unless requested.

## 12. Accessibility Rules

- Use semantic landmarks: header, nav, main, section, article, and footer where appropriate.
- Maintain a logical heading hierarchy.
- Ensure all interactive elements are reachable and operable by keyboard.
- Preserve clear focus-visible styles.
- Use buttons for actions and links for navigation.
- Give icon-only controls an accessible name.
- Give informative images meaningful alternative text.
- Use empty alternative text for decorative images.
- Do not rely on color alone to communicate meaning.
- Meet WCAG AA contrast expectations.
- Ensure navigation works without hover.
- Respect `prefers-reduced-motion`.
- Avoid unnecessary ARIA when native HTML already provides the correct semantics.

Accessibility regressions are blocking defects, even without an automated test suite.

## 13. Performance Rules

- Minimize client-side JavaScript.
- Avoid client components for static presentation.
- Prefer local images with explicit dimensions and responsive sizes.
- Keep image handling compatible with static export.
- Prevent layout shift from images, fonts, and asynchronously initialized UI.
- Prefer locally bundled fonts.
- Avoid autoplay media and heavy animation libraries.
- Do not add analytics, trackers, or third-party scripts in the initial version.
- Remove unused dependencies, components, assets, and styles.

A visually attractive result must not depend on a large JavaScript bundle.

## 14. SEO Rules

- Generate localized titles and descriptions for every indexable route.
- Add canonical and alternate-language links.
- Generate appropriate Open Graph metadata.
- Use descriptive project slugs and link text.
- Keep drafts out of the sitemap.
- Provide a sitemap and `robots.txt` compatible with static export.
- Add structured data only when its values are supported by real content.
- Never invent ratings, employers, dates, outcomes, credentials, or other structured facts.

## 15. External Links and Personal Data

- Use only URLs provided or approved by the user.
- Validate URLs through the content schema.
- When a link opens a new tab, use the appropriate safe relationship attributes.
- Do not expose private email addresses, exact addresses, phone numbers, or other personal data unless the user explicitly approved publication.
- Do not publish confidential employer or project information.
- Clearly distinguish public repositories, private case studies, labs, and demonstrations.

## 16. Dependency Policy

- Use pnpm exclusively.
- Preserve `pnpm-lock.yaml`.
- Do not mix npm, Yarn, or Bun lockfiles into the repository.
- Prefer platform and framework capabilities over new packages.
- Explain the need before adding a production dependency.
- Do not upgrade unrelated dependencies while implementing a focused change.
- Do not edit generated dependency files manually.
- Do not use unmaintained packages when a maintained or native option exists.

## 17. Code Quality

- Prefer clear names over comments that repeat the code.
- Keep functions and components small enough to understand without navigating many abstractions.
- Remove dead code instead of commenting it out.
- Avoid premature generalization.
- Keep repeated domain rules in one place.
- Handle expected errors at content and build boundaries with actionable messages.
- Preserve existing conventions unless there is a concrete reason to change them.
- Keep changes focused; do not refactor unrelated code.
- Format files using the repository's configured tools.

## 18. Validation Without Automated Tests

The absence of an automated test suite does not remove verification requirements.

After an implementation change:

1. Run lint.
2. Run TypeScript type-checking.
3. Run content validation.
4. Run the complete production build.
5. Inspect the affected English routes.
6. Inspect the equivalent Portuguese routes.
7. Verify navigation, language switching, external links, responsive layout, and keyboard use when relevant.

If a command cannot be run, state exactly which command was skipped and why.

Do not add snapshot tests, placeholder test files, coverage tooling, or test-only abstractions during the initial version.

## 19. Agent Workflow

Before editing:

1. Read `SPEC.md` and the relevant existing files.
2. Inspect repository status and preserve unrelated user changes.
3. Identify whether the request changes product scope, content, or architecture.
4. Make the smallest coherent implementation plan.

While editing:

- Keep changes within the requested scope.
- Reuse existing patterns and tokens.
- Do not overwrite user-authored content without a direct reason.
- Do not perform destructive Git operations.
- Do not add secrets or environment-specific credentials.
- Update documentation when commands, structure, or behavior change.

Before completion:

1. Review the diff for accidental changes.
2. Remove unused code and temporary files.
3. Run the required quality commands.
4. Confirm static export still succeeds.
5. Summarize the outcome and any remaining decisions or skipped checks.

## 20. Definition of Done

A change is complete only when:

- It satisfies the relevant `SPEC.md` requirement.
- It stays compatible with static export.
- It does not introduce unapproved scope or dependencies.
- It keeps content in validated JSON files.
- It works for both supported languages when user-facing content is affected.
- It preserves accessibility and responsive behavior.
- Lint, type-checking, content validation, and production build pass.
- A relevant manual review is completed.
- Documentation is updated when the change alters established behavior or commands.

