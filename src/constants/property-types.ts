export const PropertyTypes = [
  'apartment',
  'house',
  'villa',
  'penthouse',
  'commercial',
  'restaurant',
  'office',
  'warehouse',
  'hotel',
  'shop',
  'land',
  'industrial',
  'other',
] as const;

export type PropertyType = typeof PropertyTypes[number]; 