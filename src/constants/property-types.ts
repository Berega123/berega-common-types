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

// Room types for apartments
export const RoomTypes = [
  '1+1',
  'studio',
  '2+1',
  '3+1',
  '4+1',
  '4+',
  '5+',
  'more',
] as const;

export type RoomTypes = typeof RoomTypes[number]; 