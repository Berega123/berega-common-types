// Export all interfaces from the package
export * from './interfaces/IApartment';
export * from './interfaces/ICatalog';
export * from './interfaces/IMessageData';
export * from './interfaces/IEstateBuilding';
export * from './interfaces/IEstate';
export * from './interfaces/IUser';

// Export constants
export { PropertyTypes, DealTypes, StatusTypes } from './constants/property-types';
export { PropertyType as ApartmentPropertyType } from './constants/property-types';
export { DealType as ApartmentDealType } from './constants/property-types';
export { StatusType as ApartmentStatusType } from './constants/property-types'; 
export { RoomTypes as ApartmentRoomType } from './constants/property-types';