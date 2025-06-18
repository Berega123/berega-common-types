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

// Deal types
export const DealTypes = ['sale', 'rent', 'investment'] as const;

export type DealType = typeof DealTypes[number];

// Status types
export const StatusTypes = [
  'active',
  'pending',
  'draft',
  'sold',
  'reserved',
  'archived',
  'deleted',
  'under_moderation',
  'completed'
] as const;

export type StatusType = typeof StatusTypes[number]; 