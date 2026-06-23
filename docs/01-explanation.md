# How The Lookbook Works

Imagine your house has a front door, some rooms, and a hallway. Every page on this website is like a room. Next.js is the architect that decides how rooms connect, what wallpaper each room has, and what happens when something breaks inside.

---

## 1. Layouts — the wallpaper that wraps pages

A **layout** is a shell that goes around a page. It does not change when you click from room to room — it stays put.

### Root layout (`src/app/layout.tsx`)

This is the **outside of the whole house**. It contains:

- The `<html>` and `<body>` tags
- The **Header** (navigation bar at the top)
- The **Footer** (links at the bottom)
- A `<main>` area where `{children}` goes

```tsx
// Simplified:
<Header />
<main>{children}</main>
<Footer />
```

Every single page on the site sits inside `{children}`. The header and footer never re-render when you navigate — they are permanent.

### Nested layout (`src/app/projects/layout.tsx`)

The projects section has its **own little layout** too:

```tsx
export default function ProjectsLayout({ children }) {
  return <>{children}</>
}
```

Right now it is a ghost layout — it just passes children through. But if we ever wanted to add a sidebar or a banner that shows on **every** projects page, we would put it here.

### How composing works

Think of **Russian nesting dolls**:

```
RootLayout
  └─ <Header />
  └─ <main>
        └─ ProjectsLayout
              └─ ProjectsPage   (at /projects)
              └─ ProjectDetail  (at /projects/noir)
        └─ AboutPage            (at /about — no nested layout)
  └─ <Footer />
```

Nested layouts only appear when the URL matches their folder. `/about` gets the root layout but NOT the projects layout. `/projects/noir` gets BOTH — root first, then projects.

---

## 2. Dynamic segments — the [slug] folder

What if you want 8 project pages but do not want to write 8 files? You use a **dynamic segment**.

A folder named `[slug]` (with square brackets) is a wildcard. It says: "match ANY value here."

```
src/app/projects/[slug]/page.tsx  →  /projects/noir
                                  →  /projects/tokyo-nights
                                  →  /projects/ethereal-skin
                                  →  (any value at all!)
```

The page receives the matched value as a prop called `params`:

```tsx
export default async function ProjectDetail({ params }: PageProps) {
  const { slug } = await params;  // slug = "noir" or "tokyo-nights" etc.
  const project = getProjectBySlug(slug);
  // ...
}
```

In this version of Next.js, `params` is a **Promise** — you have to `await` it. Think of it like ordering a pizza: you place the order (the URL match), then you wait for it to arrive (await), then you eat it (use the slug).

---

## 3. Loading and Error — the safety nets

### `loading.tsx` — the placeholder

Every time you navigate to a page, Next.js shows a **loading UI** while the page is getting ready. This stops the screen from going blank.

We have two loading files:

| File | Shows when you visit... |
|---|---|
| `src/app/projects/loading.tsx` | `/projects` |
| `src/app/projects/[slug]/loading.tsx` | `/projects/noir` (any project detail) |

Each loading file shows gray **skeleton rectangles** that pulse like a heartbeat. They pretend to be the real page content — a hero image, a heading, some text columns — so your eyes have something to look at while the real page loads.

The loading file lives **at the same level** as the page it replaces. When you visit `/projects`, Next.js looks for `projects/loading.tsx` first, shows it, then swaps in `projects/page.tsx` when ready.

### `error.tsx` — the emergency exit

If a page crashes (maybe the data is missing, maybe the code has a bug), the error file catches the problem like a trampoline:

```tsx
'use client'   // error boundaries MUST be client components

export default function Error({ error, unstable_retry }) {
  // Shows "Something went wrong" + a "Try Again" button
}
```

It lives in `src/app/error.tsx` and catches errors from **any** page in the whole app, because it is in the root. It is marked `'use client'` because error boundaries need JavaScript interactivity (the "Try Again" button calls `unstable_retry()`).

### `not-found.tsx` — the "you are lost" page

When a page calls `notFound()` (like our project detail does when a slug does not match any project), Next.js shows `src/app/not-found.tsx`:

```
404 — Page not found
Back Home →
```

This is for **known** missing pages (you asked for a slug that does not exist). The error page is for **unexpected** crashes.

### The hierarchy

When something goes wrong, Next.js looks for the **closest** error or loading file going up the folder tree:

```
Visit /projects/noir:
  1. Show [slug]/loading.tsx while page loads
  2. If page crashes → error.tsx (root) catches it
  3. If page calls notFound() → not-found.tsx shows
```

---

## 4. `generateStaticParams` — baking pages ahead of time

Normally, a dynamic route like `/projects/[slug]` would need to figure out what to show **when someone visits it**. But with `generateStaticParams`, we can bake all the pages at **build time** — like baking cookies before the party starts instead of making them one-by-one when guests arrive.

```tsx
// src/app/projects/[slug]/page.tsx
export async function generateStaticParams() {
  return getProjects().map((project) => ({
    slug: project.slug,
  }));
}
```

This function:

1. Calls `getProjects()` which returns all 8 projects
2. Maps over them and pulls out each `slug`
3. Returns an array like: `[{ slug: 'noir' }, { slug: 'tokyo-nights' }, ...]`

Next.js takes this list and pre-renders a **static HTML file** for every single slug. When you visit `/projects/noir`, the server just sends the already-baked HTML file — no waiting, no database calls, no computation.

The final result at build time:

```
📁 .next/server/app/projects/
   ├── noir.html              ← pre-baked
   ├── tokyo-nights.html      ← pre-baked
   ├── ethereal-skin.html     ← pre-baked
   ├── concrete-silence.html  ← pre-baked
   ├── golden-hour.html       ← pre-baked
   ├── mono-life.html         ← pre-baked
   ├── liquid-glass.html      ← pre-baked
   └── dust-silk.html         ← pre-baked
```

If you add a 9th project later, you rebuild the site and a 9th HTML file appears. The website is **fully static** — it is just files on a server, no server-side code needed at request time.

---

## Putting it all together

Here is what happens when you click "Projects" then click a project:

```
1. You visit /projects
   → Shows projects/loading.tsx (skeleton)
   → Swaps in projects/page.tsx (the grid)
   → All inside root layout (header + footer)

2. You click "Noir" → navigate to /projects/noir
   → Shows projects/[slug]/loading.tsx (detail skeleton)
   → Loads the pre-baked HTML file for "noir"
   → Swaps in projects/[slug]/page.tsx

3. If the page crashes somehow
   → root error.tsx catches it
   → "Something went wrong" + Try Again button

4. If someone visits /projects/ghost
   → slug = "ghost" → getProjectBySlug returns undefined
   → notFound() is called
   → not-found.tsx shows "Page not found"
```

The house is built once at bake time. When you walk through it, everything is already there waiting for you.
