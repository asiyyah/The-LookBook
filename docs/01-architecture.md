## Project Structure

```
the-lookbook/
├── public/              # Static assets (favicon, etc.)
├── src/
│   ├── app/             # Next.js App Router — pages, layouts, metadata
│   │   ├── about/       #   /about — static page
│   │   ├── projects/    #   /projects — listing + [slug]/ detail pages
│   │   ├── globals.css  #   Tailwind v4 theme vars (#0c0c0c bg, #f0efed fg)
│   │   ├── layout.tsx   #   Root layout (Header + Footer shell)
│   │   ├── page.tsx     #   / — home page (Hero + FeaturedProjects)
│   │   ├── error.tsx    #   Error boundary
│   │   └── not-found.tsx#   404 page
│   ├── components/      # Reusable UI components (7 files, see below)
│   ├── lib/             # Data layer — static, sync, no network calls
│   │   ├── imageMap.ts  #   Category → 5 Unsplash URLs + heroImage + helpers
│   │   └── projects.ts  #   8 Project objects, images spread at init time
│   └── types/           # TypeScript interfaces
│       └── project.ts   #   Project type (id, slug, coverImage, gallery, etc.)
├── next.config.ts       # remotePatterns for images.unsplash.com
└── tsconfig.json
```

### Folder Responsibilities

| Folder | Role |
|---|---|
| `src/app/` | Pages and layouts — each subfolder maps to a URL segment via App Router. `page.tsx` is the route handler, `layout.tsx` wraps children, `metadata` exported per page. |
| `src/components/` | 7 presentational components. All are **server components** except `ProjectGrid` (needs `useState` for the category filter toggle). |
| `src/lib/` | **Sole data source** — pure functions that import static data. No `fetch()`, no API routes, no async. |
| `src/types/` | Single `Project` interface used across all layers. |

### Component Tree

```
RootLayout (layout.tsx)
├── Header              — nav links (fixed, mix-blend-difference)
├── {children}
│   ├── Home (/)        — Hero + FeaturedProjects + About CTA
│   │   ├── Hero        — heroImage from imageMap.ts, CSS background
│   │   └── FeaturedProjects — getFeaturedProjects(), masonry grid
│   ├── Projects (/projects)
│   │   └── ProjectGrid [client] — category filter + masonry of ProjectCard
│   ├── ProjectDetail (/projects/[slug])
│   │   ├── ProjectImageSection — coverImage (hero) + gallery grid
│   │   ├── concept, lighting, intent, equipment sections
│   │   └── "All Series" back link
│   └── About (/about)  — static copy, approach list, gear list
└── Footer
```

---

## Data Flow

There are **two user-action paths** — both fully static (SSG at build time, no runtime data fetching).

### Path 1: Navigate to a project detail page (`/projects/noir`)

```
1. User clicks a project card
       │
2. Next.js Router navigates to /projects/noir
       │
3. [slug]/page.tsx runs:
   ├── generateStaticParams() → ["noir", "tokyo-nights", …, "dust-silk"]
   │                           (called at build time, returns all 8 slugs)
   ├── generateMetadata()    → reads project.title/description for <head>
   └── default export        → getProjectBySlug("noir")
       │
4. getProjectBySlug("noir")  → src/lib/projects.ts
   ├── imports projectData (8 raw objects)
   ├── .map() spreads getCategoryImages(p.category) onto each
   │       at module init time — coverImage + gallery are resolved once
   └── .find() by slug       → returns full Project with static URLs
       │
5. ProjectImageSection receives project
   ├── <Image src={project.coverImage}>   → hero banner (fill, priority)
   └── .gallery.map(<Image>)              → 3 gallery images
       │
6. Next.js <Image> renders <img> with srcset
   │   → browser fetches from images.unsplash.com
   └── UI updates: user sees the hero image + gallery
```

### Path 2: Filter projects by category (`/projects`)

```
1. User clicks "Architecture" button in ProjectGrid
       │
2. ProjectGrid [client component]:
   ├── useState("All") → setActiveCategory("Architecture")
   ├── filtered = projects.filter(p => p.category === "Architecture")
   │   (data was passed as props at build time — no re-fetch)
   └── re-renders grid with only Architecture projects
       │
3. UI updates: only matching cards shown
   (no network request, no server round-trip)
```

### Build-time data assembly

```
At module import time, projects.ts line 146-149:

  projectData.map(p => ({
    ...p,
    ...getCategoryImages(p.category)   ← synchronous, no async
  }))

Where getCategoryImages(category) calls:
  getImageForCategory(category, 0) → imageMap[category][0 % 5] → URL
  getImageForCategory(category, 1) → imageMap[category][1 % 5] → URL
  ...

This means every Project has coverImage + gallery[3] filled at
build time — zero runtime work. The imageMap acts as a simple
lookup table (category → 5 URLs), and modulo rotation distributes
images so each category gets varied covers/galleries.
```

### Key constraint

**All image URLs are static strings** resolved at build time inside `imageMap.ts`. The `next/image` `<remotePatterns>` config in `next.config.ts` allows the optimizer to process these URLs from `images.unsplash.com` at runtime, but the URLs themselves are never fetched dynamically — they're hardcoded constants. No `fetch()`, no API routes, no database queries exist anywhere in the application.
