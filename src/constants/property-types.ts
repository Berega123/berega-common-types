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

// Bathroom types
export const BathroomTypes = [
  '1',
  '2',
  '3',
  '4+',
  'shared',
  'none'
] as const;

export type BathroomType = typeof BathroomTypes[number];

// Renovation types
export const RenovationTypes = [
  'none',
  'needs_renovation',
  'partial',
  'designer',
  'euro',
  'luxury',
  'modern',
  'classic'
] as const;

export type RenovationType = typeof RenovationTypes[number];

// Tag options
export const TagOptions = [
  'sea_view',
  'mountain_view',
  'city_view',
  'garden_view',
  'pool',
  'gym',
  'sauna',
  'balcony',
  'terrace',
  'parking',
  'garage',
  'elevator',
  'security',
  'furnished',
  'pets_allowed',
  'smoking_allowed',
  'internet',
  'air_conditioning',
  'heating',
  'fireplace',
  'dishwasher',
  'washing_machine',
  'new_building',
  'historic_building'
] as const;

export type TagOption = typeof TagOptions[number];

// Amenities options
export const AmenitiesOptions = [
  'pool',
  'gym',
  'spa',
  'sauna',
  'tennis_court',
  'basketball_court',
  'playground',
  'garden',
  'rooftop',
  'concierge',
  'security',
  'parking',
  'garage',
  'elevator',
  'laundry',
  'storage',
  'bike_storage',
  'conference_room',
  'coworking_space',
  'restaurant',
  'bar',
  'shop',
  'pharmacy',
  'medical_center'
] as const;

export type AmenitiesOption = typeof AmenitiesOptions[number];

// Building types
export const BuildingTypes = [
  'residential',
  'commercial',
  'mixed_use',
  'industrial',
  'office',
  'retail',
  'hotel',
  'warehouse',
  'other'
] as const;

export type BuildingType = typeof BuildingTypes[number]; 