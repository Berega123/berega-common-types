import { 
  PropertyType, 
  DealType, 
  StatusType, 
  RoomTypes, 
  BathroomType, 
  RenovationType,
  ApartmentSource 
} from '../constants/property-types';

/**
 * Estate apartment interface that matches NestJS/Mongoose EstateApartment schema
 */
export interface IApartment {
  _id?: string;
  identifier?: string;
  title: string;
  description?: string;
  address?: string;
  city?: string;
  country?: string;
  coordinates?: number[];
  price: number;
  price_sqm: number;
  price_per_month?: number;
  price_per_day?: number;
  tags?: string[];
  amenities?: string[];
  rooms?: RoomTypes;
  bathroom?: BathroomType;
  bathroomCount?: number;
  buildingYear?: number;
  buildingType?: string;
  buildingClass?: string;
  coastline?: string;
  contactPhone?: string;
  contactTelegram?: string;
  contactWhatsapp?: string;
  floor?: number;
  area?: number;
  livingArea?: number;
  kitchenArea?: number;
  balconyArea?: number;
  ceilingHeight?: number;
  renovation?: RenovationType;
  totalFloors?: number;
  propertyType?: PropertyType;
  isNewBuild?: boolean;
  isFromDeveloper?: boolean;
  dealType?: DealType;
  status?: StatusType;
  images?: string[];
  documents?: string[];
  estate: string | object; // ObjectId reference to Estate
  building: string | object; // ObjectId reference to EstateBuilding
  author: string | object; // ObjectId reference to User
  developer?: string | object; // ObjectId reference to Developer
  duplicateOf?: any; // ObjectId reference(s) to Apartment
  oldDataAuthor?: string;
  oldDataId?: string;
  oldData?: string;
  analyticsViews?: number;
  analyticsFavorites?: number;
  commission?: number;
  createdAt?: Date;
  updatedAt?: Date;
  
  // Additional structured fields aligned with DTOs
  balcony?: string;
  elevator?: string;
  parking?: string;
  gas?: boolean;
  waterSupply?: string;
  sewerage?: string;
  schoolNearby?: boolean;
  kindergartenNearby?: boolean;
  security?: boolean;
  pool?: boolean;
  rooftopTerrace?: boolean;
  playground?: boolean;
  concierge?: boolean;
  bbqArea?: boolean;
  gym?: boolean;
  sellerType?: string;
  viewType?: string;
  roadType?: string;
  wallType?: string;
  
  // Special categories
  promotions?: boolean;
  forInvestors?: boolean;
  urgentSale?: boolean;
  hotOffers?: boolean;
  
  // Optional fields for compatibility/external sources
  currency?: string;
  city_code?: string;
  country_code?: string;
  contactInfo?: string;
  district?: string;
  features?: string[];
  source?: ApartmentSource; // The source of the listing: telegram, korter, ss.ge, myhome, or other (empty string)
  sourceUrl?: string; // The URL of the original listing
  sourcePostId?: any; // Optional: to link to the original post
  sourceId?: string; // Alternative ID from the source
  isExported?: boolean;
}