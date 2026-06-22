type ImageSet = {
  queries: string[]
  cover: string
  gallery: string[]
}

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&fm=jpg&fit=crop`

const imageSets: Record<string, ImageSet> = {
  Mobile: {
    queries: [
      "mobile app UI design",
      "smartphone app interface",
      "app screens presentation",
      "mobile app mockup",
      "fintech mobile app",
    ],
    cover: unsplash("cZr2sgaxy3Q"),
    gallery: [
      unsplash("_HB3Y1wGlxw"),
      unsplash("52H5Nfi5WiE"),
      unsplash("83ypHTv6J2M"),
      unsplash("h7a6g0ua6LM"),
    ],
  },
  Web: {
    queries: [
      "website design mockup",
      "desktop interface design",
      "web dashboard UI",
      "laptop screen website design",
      "creative agency website",
    ],
    cover: unsplash("oZLz5m5jd18"),
    gallery: [
      unsplash("eWoOL5g4QuY"),
      unsplash("We56jns_zLE"),
      unsplash("5xTYgw2g7aw"),
      unsplash("GaDzER4qyto"),
    ],
  },
  Brand: {
    queries: [
      "brand identity mockup",
      "packaging design mockup",
      "luxury brand presentation",
      "business card mockup",
      "brand guideline presentation",
    ],
    cover: unsplash("kHuQ0_7Y0Mk"),
    gallery: [
      unsplash("Ce9-msdjOcM"),
      unsplash("voRfgeyiBKA"),
      unsplash("McXvj_1VSFM"),
      unsplash("dBESAHgPL6c"),
    ],
  },
  Print: {
    queries: [
      "editorial design layout",
      "typography print design",
      "book design layout",
      "magazine editorial spread",
      "creative print publication",
    ],
    cover: unsplash("It2SQGXYicU"),
    gallery: [
      unsplash("0adHvNJu-Zo"),
      unsplash("qVP8kVMPhi0"),
      unsplash("pZ9W_LjIfOI"),
      unsplash("1T_dmOn4whw"),
    ],
  },
}

export function getImagesForCategory(category: string): ImageSet {
  return (
    imageSets[category] ?? {
      queries: ["design portfolio", "creative work"],
      cover: unsplash("oZLz5m5jd18"),
      gallery: [
        unsplash("eWoOL5g4QuY"),
        unsplash("We56jns_zLE"),
        unsplash("5xTYgw2g7aw"),
        unsplash("GaDzER4qyto"),
      ],
    }
  )
}

export function getImageQueriesForCategory(category: string): string[] {
  return imageSets[category]?.queries ?? []
}

export const heroImages = [
  "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1920&q=80&fm=jpg&fit=crop",
  "https://images.unsplash.com/photo-1549490349-8643362247b5?w=1920&q=80&fm=jpg&fit=crop",
]
