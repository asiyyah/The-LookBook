# Page Structure Principles — Codebase Map

Each principle is defined plainly, then pinned to real lines in the codebase.

---

## 1. File-based routing

**Definition:** Every folder inside `src/app/` becomes a segment of the URL. A file named `page.tsx` inside that folder defines the UI for that URL.

```
src/app/page.tsx               →  /
src/app/about/page.tsx         →  /about
src/app/projects/page.tsx      →  /projects
src/app/projects/[slug]/page.tsx  →  /projects/noir  (dynamic)
```

| Route | File | Lines |
|---|---|---|
| `/` | `src/app/page.tsx` | 5–42 |
| `/about` | `src/app/about/page.tsx` | 35–142 |
| `/projects` | `src/app/projects/page.tsx` | 16–36 |
| `/projects/[slug]` | `src/app/projects/[slug]/page.tsx` | 37–111 |

---

## 2. `page.tsx` — the route UI

**Definition:** The default export of a `page.tsx` file is the React component rendered when a user visits that exact URL. It is the "what you see" for a route.

- `src/app/page.tsx:5-42` — renders `Hero`, `FeaturedProjects`, and a static about section with a "Read More" link.
- `src/app/about/page.tsx:35-142` — renders the photographer bio, approach list, equipment list, and a contact CTA.
- `src/app/projects/page.tsx:16-36` — fetches all projects and categories via `getProjects()` / `getProjectCategories()`, renders a heading and `ProjectGrid`.
- `src/app/projects/[slug]/page.tsx:37-111` — `await`s `params.slug`, looks up the project via `getProjectBySlug()`, calls `notFound()` if missing, then renders hero image, concept/lighting/intent text, and equipment list.

---

## 3. `layout.tsx` — persistent wrapper

**Definition:** A layout wraps all pages and nested layouts under its folder. It **persists** across navigations within its subtree — React preserves its state and does not unmount it.

| Layout file | Scope | Lines |
|---|---|---|
| `src/app/layout.tsx` | Entire site (root) | 33–49 |
| `src/app/projects/layout.tsx` | All `/projects/*` pages | 1–7 |

- **Root layout** (`src/app/layout.tsx:33-49`): Provides `<html>`, `<body>`, font CSS variables, `<Header />` (always visible), `<main>{children}</main>`, and `<Footer />` (always visible).
- **Projects layout** (`src/app/projects/layout.tsx:1-7`): A pass-through (`<>{children}</>`) — exists as a hook point for future project-wide UI (e.g., a projects sidebar).

---

## 4. Nested layout composition

**Definition:** Layouts nest by folder depth. When at `/projects/noir`, Next.js renders RootLayout → ProjectsLayout → ProjectDetail page. Each layout's `{children}` is the next layout or page deeper in the tree.

```
RootLayout (src/app/layout.tsx:38-48)
  <Header />
  <main>
    ProjectsLayout (src/app/projects/layout.tsx:6)
      {children} → ProjectDetail (src/app/projects/[slug]/page.tsx:45-110)
  </main>
  <Footer />
```

`/about` only gets RootLayout (no ProjectsLayout because it is outside the `projects/` folder). Layouts do **not** re-render when you navigate between sibling pages under the same layout.

---

## 5. Dynamic segments `[param]`

**Definition:** A folder name wrapped in square brackets (e.g., `[slug]`) creates a **dynamic route segment**. The actual URL value is captured and passed to the page as `params`.

- `src/app/projects/[slug]/` folder — matches `/projects/noir`, `/projects/tokyo-nights`, etc.
- **Type definition** (`src/app/projects/[slug]/page.tsx:7-9`):
  ```tsx
  interface PageProps {
    params: Promise<{ slug: string }>;
  }
  ```
- **Usage** (`src/app/projects/[slug]/page.tsx:37-38`):
  ```tsx
  const { slug } = await params;
  ```
  In this Next.js version, `params` is a Promise and must be awaited.

---

## 6. `loading.tsx` — instant fallback UI

**Definition:** A `loading.tsx` file in a route segment shows an immediate loading UI (usually skeleton placeholders) while the page component is streaming or resolving. It is shown automatically by Next.js — no manual state management needed.

| File | Shown when navigating to | Lines |
|---|---|---|
| `src/app/projects/loading.tsx` | `/projects` | 1–31 |
| `src/app/projects/[slug]/loading.tsx` | `/projects/noir` (any detail) | 1–26 |

- `src/app/projects/loading.tsx:1-31` — skeleton for the projects listing: a small text bar, a large heading bar, 4 filter tab placeholders, and a 6-cell masonry grid (first cell spans 2 columns).
- `src/app/projects/[slug]/loading.tsx:1-26` — skeleton for a project detail: a full-screen hero block, then a content area with a small label bar, heading bar, description line, and two-column text blocks.

---

## 7. `error.tsx` — client error boundary

**Definition:** An `error.tsx` file acts as a React error boundary for its segment. If any page, layout, or child component throws during render, this file catches the error and displays fallback UI. It **must** be a client component (`'use client'`).

- `src/app/error.tsx:1-46` — root error boundary, catches crashes anywhere in the app.
- `'use client'` directive at `src/app/error.tsx:1` — required because it uses `useEffect` (line 13) and a button click handler (line 30).
- **Props** (`src/app/error.tsx:6-11`):
  - `error: Error & { digest?: string }` — the thrown error object.
  - `unstable_retry: () => void` — a function that re-renders the failed segment (boundary reset).
- **Recovery UI** (`src/app/error.tsx:28-42`): A "Try Again" button (calls `unstable_retry()`) and a "Go Home" link.
- The error file is placed at the **root** level — there is no projects-specific error boundary, so all project errors bubble up to the root.

---

## 8. `not-found.tsx` — 404 UI

**Definition:** A `not-found.tsx` file defines the UI shown when `notFound()` is called from a server component, or when a URL does not match any route.

- `src/app/not-found.tsx:1-24` — renders a centered 404 page: "404" label, "Page not found" heading, "Back Home" link.
- **Triggered from** `src/app/projects/[slug]/page.tsx:41-43`:
  ```tsx
  if (!project) {
    notFound();
  }
  ```
  When a visitor hits `/projects/unknown-slug`, `getProjectBySlug` returns `undefined`, `notFound()` is called, and Next.js renders `src/app/not-found.tsx` within the root layout.

---

## 9. `generateStaticParams` — SSG for dynamic routes

**Definition:** An async function exported from a dynamic route's `page.tsx` that returns an array of param objects. At build time, Next.js calls this function and pre-renders a static HTML file for each set of params — turning a dynamic route into many static pages.

- `src/app/projects/[slug]/page.tsx:11-15`:
  ```tsx
  export async function generateStaticParams() {
    return getProjects().map((project) => ({
      slug: project.slug,
    }));
  }
  ```
- Returns 8 param objects: `[{ slug: 'noir' }, { slug: 'tokyo-nights' }, ..., { slug: 'dust-silk' }]`.
- At build time, 8 static HTML files are generated under `/projects/*`.
- No runtime database or API calls happen when a user visits — the HTML is pre-baked and served instantly.

---

## 10. `generateMetadata` — dynamic `<head>` tags

**Definition:** An async function that returns a `Metadata` object per route. Next.js uses it to set `<title>`, `<meta>`, and Open Graph tags. Can be static (exported object) or dynamic (async function that reads `params`).

**Static metadata (exported object):**

| File | Lines | Sets |
|---|---|---|
| `src/app/layout.tsx` | 17–31 | Default title `"The Lookbook — Photography"`, title template `"%s — The Lookbook"`, OG tags |
| `src/app/projects/page.tsx` | 5–14 | Title `"Projects"`, description, OG tags |
| `src/app/about/page.tsx` | 4–13 | Title `"About"`, description, OG tags |

**Dynamic metadata (async function with params):**

- `src/app/projects/[slug]/page.tsx:17-35`:
  ```tsx
  export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) return { title: "Series Not Found" };
    return { title: project.title, description: project.description, ... };
  }
  ```
  Dynamically sets `<title>Noir — The Lookbook</title>` based on the project slug.

---

## 11. Route groups `(group)` — URL-free organization

**Definition:** A folder wrapped in parentheses, e.g., `(marketing)`, groups routes together without adding a URL segment. Useful for splitting sections of the app that share a layout but should not affect the URL path.

**Not used in this codebase** — no `( )` folders exist in `src/app/`. All routes map directly to their URL path without grouping.

---

## 12. Server components by default

**Definition:** Every component in the App Router is a **server component** by default — it runs once on the server (or at build time), sends zero JavaScript to the client, and cannot use hooks or browser APIs. A file must include `'use client'` at the top to become a client component.

| Component | Type | Directive | Reason |
|---|---|---|---|
| `layout.tsx` (both) | Server | None | No interactivity needed |
| `page.tsx` (all 4) | Server | None | Data resolved at build/request time |
| `loading.tsx` (both) | Server | None | Pure JSX skeleton, no state |
| `not-found.tsx` | Server | None | Static UI, no interactivity |
| `error.tsx` | **Client** | Line 1: `'use client'` | Needs `useEffect` + click handler |
| `ProjectGrid` | **Client** | (in its file) | Needs `useState` for category filter |

- `'use client'` boundary at `src/app/error.tsx:1` — the only app-level file that requires client interactivity.
- All pages and layouts are server components, meaning they send **no JavaScript** to the browser on their own.
