const base = "https://images.unsplash.com/photo-"

export const imageMap: Record<string, string[]> = {
  Portrait: [
    `${base}1544005313-94ddf0286df2?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1500648767791-00dcc994a43e?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1544723795-3fb6469f5b39?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1524504388940-b1c1722653e1?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1529626455594-4ff0802cfb7e?w=1200&q=80&fm=jpg&fit=crop`,
  ],
  Fashion: [
    `${base}1483985988355-763728e1935b?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1529139574466-a303027c1d8b?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1509631179647-0177331693ae?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1520975916090-3105956dac38?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1503342394128-c104d54dba01?w=1200&q=80&fm=jpg&fit=crop`,
  ],
  Street: [
    `${base}1446776811953-b23d57bd21aa?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1492684223066-81342ee5ff30?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1500530855697-b586d89ba3ee?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1518391846015-55a9cc003b25?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1485546246426-74dc88dec4d9?w=1200&q=80&fm=jpg&fit=crop`,
  ],
  Documentary: [
    `${base}1520975916090-3105956dac38?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1488521787991-ed7bbaae773c?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1509099836639-18ba1795216d?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1469571486292-0ba58a3f068b?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1487058792275-0ad4aaf24ca7?w=1200&q=80&fm=jpg&fit=crop`,
  ],
  Studio: [
    `${base}1529626455594-4ff0802cfb7e?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1506794778202-cad84cf45f1d?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1524504388940-b1c1722653e1?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1515378791036-0648a3ef77b2?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1524503033411-c9566986fc8f?w=1200&q=80&fm=jpg&fit=crop`,
  ],
  Architecture: [
    `${base}1518005020951-eccb494ad742?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1479839672679-a46483c0e7c8?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1463740839922-2d3b7e426a56?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1487956382158-bb926046304a?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1511818966892-d7d671e672a2?w=1200&q=80&fm=jpg&fit=crop`,
  ],
  'Still Life': [
    `${base}1603244873016-c0ede259d131?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1501297875943-27f3803b4956?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1691404016321-b210547c6d7a?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1506377394252-6319dd9003fe?w=1200&q=80&fm=jpg&fit=crop`,
    `${base}1609403074955-6aba37dabed2?w=1200&q=80&fm=jpg&fit=crop`,
  ],
}

export const heroImage = `${base}1618005198919-d3d4b5a92ead?w=1920&q=80&fm=jpg&fit=crop`

function getImageForCategory(category: string, index: number) {
  const images = imageMap[category] ?? imageMap.Portrait
  return images[index % images.length]
}

export function getCategoryImages(category: string) {
  return {
    coverImage: getImageForCategory(category, 0),
    gallery: [
      getImageForCategory(category, 1),
      getImageForCategory(category, 2),
      getImageForCategory(category, 3),
    ],
  }
}
