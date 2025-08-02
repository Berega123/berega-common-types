// Export all interfaces from the package
export * from './interfaces/IApartment';
export * from './interfaces/ICatalog';
export * from './interfaces/IMessageData';
export * from './interfaces/IEstateBuilding';
export * from './interfaces/IEstate';
export * from './interfaces/IUser';

// Export constants
export { 
  PropertyTypes, 
  DealTypes, 
  StatusTypes, 
  RoomTypes, 
  BathroomTypes, 
  RenovationTypes, 
  TagOptions, 
  AmenitiesOptions, 
  BuildingTypes 
} from './constants/property-types';

// Export types
export type { 
  PropertyType, 
  DealType, 
  StatusType, 
  RoomTypes as RoomType, 
  BathroomType, 
  RenovationType, 
  TagOption, 
  AmenitiesOption, 
  BuildingType 
} from './constants/property-types';