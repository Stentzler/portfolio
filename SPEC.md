# Portfolio Website Specification

## 1. Purpose

Build a fast, attractive, bilingual portfolio that presents Vinicius as a backend, cloud, and DevOps-focused software engineer.

The website must help a visitor quickly understand:

- Who Vinicius is.
- What kind of work he does.
- Which projects best demonstrate his experience.
- How to reach him through LinkedIn, GitHub, or email.

The initial release is a completely static website. It must not require a Node.js server, database, CMS, or backend service in production.

## 2. Target Audience

Primary audiences:

- Recruiters and hiring managers, particularly for remote European roles.
- Engineers and technical interviewers reviewing project decisions and source code.
- Potential collaborators.

English is the default language. Portuguese is fully supported.

## 3. Product Principles

- Clean and lean: every section must have a clear purpose.
- Content first: projects and professional information take priority over decorative effects.
- Static by design: all routes and content are generated at build time.
- Easy maintenance: user-editable content lives in validated JSON files.
- Progressive enhancement: JavaScript is added only where it materially improves the experience.
- A manually selected light or dark theme is stored locally in the browser.
- Accessible and responsive: the website must work across screen sizes and input methods.
- Honest presentation: labs, studies, professional work, and personal projects must be clearly identified.

## 4. Scope

### 4.1 Home page

The home page contains:

1. Header and navigation.
2. Hero.
3. Core capabilities.
4. Featured projects.
5. Bio and compact professional timeline.
6. Contact call to action.
7. Footer.

### 4.2 Projects index

The projects index displays every published project.

Each project card includes:

- Title.
- Short value-focused summary.
- Project category and status.
- Year.
- Main technologies.
- Cover image when available.
- Link to the portfolio case study.
- Repository and live-demo links when available.

Only three or four featured projects appear on the home page. The complete collection remains on the projects index.

The projects index groups standard projects and labs into separate sections. Category filtering is deferred until the collection is large enough to justify it, normally eight or more published projects.

### 4.3 Project detail pages

Each published project receives an English and Portuguese static page.

A full case study may contain:

1. Overview.
2. Problem or motivation.
3. Responsibilities and individual contribution.
4. Requirements and constraints.
5. Architecture.
6. Important technical decisions.
7. Challenges and trade-offs.
8. Testing and quality strategy used by that project.
9. Security and observability considerations.
10. Results or demonstrated outcomes.
11. Lessons learned.
12. Technology stack.
13. Repository and live-demo links.

Not every project must use every section. Empty or irrelevant sections must not be rendered.

### 4.4 Bio

The bio should explain:

- Vinicius's professional direction.
- His backend, cloud, and platform interests.
- The types of problems he enjoys solving.
- Relevant experience, education, and certifications.
- The opportunities he is currently interested in.

The bio must complement rather than duplicate the résumé.

Optional professional signals include:

- Current city and timezone.
- Remote-work availability.
- Spoken languages.
- European Union work authorization.

Exact personal information is provided through content files and must never be invented.

### 4.5 Contact

The initial version uses a home-page contact section rather than a separate contact page.

Required contact channels:

- LinkedIn.
- GitHub.
- Email.

LinkedIn and GitHub must be prominent in the hero and repeated in the contact section and footer. Visible labels must accompany icons where space permits.

No contact form is included in the initial version.

### 4.6 Header

The header contains:

- Name or personal mark.
- Home link.
- Bio navigation.
- Projects navigation.
- Contact navigation.
- English and Portuguese language selector.
- Optional résumé link.

The header may remain visible while scrolling, provided it does not obscure content or reduce usable space on small screens.

### 4.7 Footer

The footer contains:

- Name.
- Current city.
- LinkedIn.
- GitHub.
- Email.
- Language selector.
- Copyright notice.

## 5. Information Architecture and Routes

English uses clean unprefixed URLs because it is the default language. Portuguese uses the `/pt` prefix.

| Route | Content |
| --- | --- |
| `/` | English home page |
| `/projects/` | English projects index |
| `/projects/[slug]/` | English project case study |
| `/pt/` | Portuguese home page |
| `/pt/projects/` | Portuguese projects index |
| `/pt/projects/[slug]/` | Portuguese project case study |
| `/404.html` | Static not-found page |

Project slugs are language-independent and stable. Changing a slug is a breaking URL change and requires an explicit migration decision.

## 6. Multilingual Requirements

- Supported locales are `en` and `pt-BR`.
- English is the default locale.
- The language selector links to the equivalent page in the other language.
- Switching language from a project page must preserve the project when its translation exists.
- Published content must have complete English and Portuguese translations.
- A missing required translation must fail content validation during the build.
- Page titles, descriptions, navigation, accessibility labels, metadata, and project content must be localized.
- Pages must declare the correct HTML language.
- Canonical and alternate-language metadata must be generated for indexable pages.
- Automatic browser-language redirection is not required.

## 7. Content Model

All user-editable static text and structured information must live in JSON files. Components must not contain portfolio copy directly.

### 7.1 Proposed organization

    src/
      content/
        projects/
          serverless-etl.json
          kubernetes-lab.json
      data/
        profile.json
        ui.json

### 7.2 Profile data

`profile.json` contains:

- Name and professional title.
- Hero introduction in both languages.
- Bio in both languages.
- Current city and timezone.
- Availability and work-authorization information.
- Capabilities.
- Professional timeline.
- Education and certifications.
- Contact links.
- Résumé links.
- Profile photograph metadata.

### 7.3 UI data

`ui.json` contains shared English and Portuguese interface text:

- Navigation labels.
- Section headings.
- Button labels.
- Link descriptions.
- Empty states.
- Accessibility labels.
- Footer text.

### 7.4 Project data

Each project uses its own JSON file and includes:

- Stable slug.
- Publication state.
- Featured flag and display order.
- Category, status, and year.
- Technology list.
- Repository and optional demo URLs.
- Cover image and optional gallery or diagram metadata.
- English title, summary, and case-study sections.
- Portuguese title, summary, and case-study sections.

Project categories initially supported:

- Backend.
- Cloud.
- DevOps.
- Platform.
- Full stack.
- Lab.

Project statuses initially supported:

- Completed.
- In progress.
- Maintained.
- Archived.
- Case study.
- Lab.

The exact identifiers used in JSON should be lowercase stable values, while their displayed labels are localized.

### 7.5 Validation

Zod schemas validate all content during development and production builds.

Validation must reject:

- Missing required fields.
- Missing required translations.
- Invalid URLs.
- Duplicate slugs.
- Unsupported categories or statuses.
- Invalid dates or display order.
- Featured projects missing their required overview or image.
- Unsafe embedded HTML.

Long-form case studies should use structured JSON sections and arrays of paragraphs or list items. Raw HTML must not be stored in content files.

## 8. Website and GitHub Responsibilities

The portfolio is the source of truth for recruiter-facing project case studies. It explains the problem, contribution, architecture, decisions, trade-offs, and outcomes.

The project repository is the source of truth for developer documentation such as installation, commands, configuration, usage, and contribution instructions.

A GitHub Wiki is optional and should only be used when a project requires documentation substantially larger than a focused README. Essential portfolio information must not exist only in a Wiki.

The website and repository should cross-link when the repository is public.

## 9. Visual Direction

The design should feel professional, technical, and editorial rather than ornamental.

### 9.1 Visual characteristics

- Strong, readable typography.
- High contrast.
- One restrained accent color.
- Generous whitespace.
- Consistent grid and spacing.
- A professional portrait in the hero.
- Real screenshots and architecture diagrams for projects.
- Subtle transitions that respect reduced-motion preferences.
- Clear visual hierarchy for LinkedIn, GitHub, projects, and contact actions.

### 9.2 Initial theme

- Use one polished theme for the first release.
- A theme toggle is outside the initial scope.
- Colors, spacing, typography, radii, shadows, and breakpoints must use shared design tokens.

### 9.3 Avoid

- Skill percentage bars.
- Fake terminal interfaces.
- Autoplay media.
- Carousels.
- Heavy three-dimensional effects.
- Excessive gradients or animation.
- Large collections of technology icons without context.
- Decorative effects that delay or obscure content.

## 10. Responsive and Accessibility Requirements

- Support current mobile, tablet, laptop, and desktop viewports.
- Use semantic HTML landmarks and heading order.
- All functionality must be keyboard accessible.
- Focus indicators must be clearly visible.
- Text and interactive controls must meet WCAG AA contrast expectations.
- Images require meaningful alternative text or explicitly empty alt text when decorative.
- Icon-only controls require accessible names.
- Navigation must remain usable without hover.
- Animations must respect `prefers-reduced-motion`.
- Content must remain readable when zoomed to 200 percent.
- External links should clearly communicate their destination.

## 11. SEO and Sharing

The static build must provide:

- Localized page titles and descriptions.
- Canonical URLs.
- Alternate-language links.
- Open Graph metadata.
- Social-sharing images.
- Favicon and application icons.
- Sitemap.
- `robots.txt`.
- Structured data for the person and relevant projects where appropriate.
- Descriptive URLs and meaningful link text.

Draft or private projects must not be included in navigation, the sitemap, or generated project routes.

## 12. Technical Architecture

### 12.1 Stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js |
| Routing | App Router |
| Language | TypeScript in strict mode |
| Rendering | Static export |
| UI | React Server Components by default |
| Styling | Tailwind CSS |
| Content | Local JSON |
| Content validation | Zod |
| Package manager | pnpm |
| Production server | Static Nginx container serving `out/` |
| Database | None |
| Automated tests | Deferred |

Use the latest stable compatible releases when initializing the repository. Pin exact dependency versions through `pnpm-lock.yaml`. Pin the active Node.js LTS version in the repository.

### 12.2 Static export

`next.config.ts` must configure `output: "export"`.

The production build outputs the deployable site to `out/`.

All dynamic project routes must be enumerated with `generateStaticParams()`. The production website must never depend on request-time rendering.

### 12.3 Server and Client Components

- Components are Server Components by default.
- A Client Component is permitted only for browser state, event handling, or a browser-only API.
- Client boundaries should be as small and low in the component tree as practical.
- Content loading, project selection, and route generation happen at build time.

### 12.4 Images and fonts

- Portfolio images are stored locally.
- Images must have explicit dimensions and responsive sizing.
- The image approach must remain compatible with static export.
- Prefer optimized local static imports.
- Fonts should be locally bundled or handled at build time without a production dependency on a third-party font service.

## 13. Static-Site Constraints

The initial version must not use:

- API routes.
- Server Actions.
- Runtime middleware.
- Authentication or sessions.
- Runtime cookies or request headers.
- Incremental Static Regeneration.
- Request-dependent rendering.
- A runtime CMS or database.
- Runtime fetching required to render core content.
- Platform-specific features that prevent the `out/` directory from being hosted independently.

External links and optional privacy-friendly analytics do not alter the static architecture, but analytics remain out of scope for the initial version.

## 14. Quality Gates

No automated test suite is required for the initial version.

Every completed change must nevertheless pass:

- Dependency installation from the lockfile.
- ESLint.
- TypeScript type-checking.
- Content-schema validation.
- Full Next.js production build.
- Manual inspection of affected routes in both languages.

The production build is the primary proof that every route can be statically generated.

## 15. Performance Expectations

- Minimize client-side JavaScript.
- Avoid unnecessary client components and third-party UI libraries.
- Optimize images and prevent layout shift.
- Avoid loading assets that are not visible or needed.
- Use semantic HTML before adding JavaScript behavior.
- Keep animations lightweight and optional.
- Target strong Lighthouse results for performance, accessibility, SEO, and best practices without treating a score as a substitute for manual review.

## 16. Security and Privacy

- Do not commit secrets or private credentials.
- Only publish personal information explicitly approved for the portfolio.
- Do not expose private project details, employer-confidential information, or non-public repository URLs.
- External links must use safe attributes when opening a new browsing context.
- Do not inject unsanitized HTML from JSON content.
- Avoid analytics and tracking in the initial version.

## 17. Deployment

The initial hosting target is the existing CAGED frontend infrastructure.

Deployment serves the contents of `out/` through a static Nginx container. No
Next.js runtime is required after the image is built.

The initial deployment target is the existing CAGED frontend EC2 instance. Its
host Nginx routes CloudFront requests for `stentzler.com.br` to a second,
loopback-bound container on port `3001`; the existing CAGED container remains
on port `3000`. CloudFront terminates viewer HTTPS and routes the portfolio
hostname through its existing WAF-protected distribution.

GitHub Actions validates the site, pushes immutable commit-SHA images to ECR,
and uses Systems Manager to replace the portfolio container with health-check
and rollback handling. This infrastructure choice must not weaken the
static-only requirements: `out/` remains independently hostable.

## 18. Out of Scope for the Initial Version

- Blog.
- Contact form.
- Authentication.
- Admin area.
- Database or CMS.
- Comments.
- Search.
- Complex project filtering.
- Theme switcher.
- Analytics.
- Automated test suite.
- Runtime personalization.
- Automatic locale detection.

These features require a deliberate specification change before implementation.

## 19. Acceptance Criteria

The initial release is complete when:

- The website exports successfully to `out/`.
- English and Portuguese home pages are available.
- English and Portuguese project indexes are available.
- Every published project has both localized static detail pages.
- Navigation and language switching work on all supported routes.
- The hero clearly presents name, role, photograph, and main calls to action.
- LinkedIn and GitHub are prominent and functional.
- Bio, capabilities, featured projects, and contact sections are present.
- All portfolio content is loaded from validated JSON files.
- No backend or Next.js server is required in production.
- The layout is responsive and keyboard accessible.
- Localized SEO and social-sharing metadata are generated.
- Lint, type-checking, content validation, and production build pass.
- A manual review confirms that affected pages work in both languages.
