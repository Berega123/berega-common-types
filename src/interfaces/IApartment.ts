import { 
  PropertyType, 
  DealType, 
  StatusType, 
  RoomTypes, 
  BathroomType, 
  RenovationType 
} from '../constants/property-types';

/**
 * Basic apartment interface that can be used across all projects
 */
export interface IApartment {
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
  estate?: string | object; // ObjectId reference to Estate
  building?: string | object; // ObjectId reference to EstateBuilding
  author?: string | object; // ObjectId reference to User
  developer?: string | object; // ObjectId reference to Developer
  oldDataAuthor?: string;
  oldDataId?: string;
  oldData?: string;
  analyticsViews?: number;
  analyticsFavorites?: number;
  commission?: number;
  
  // Optional fields for compatibility/external sources
  currency?: string;
  city_code?: string;
  country_code?: string;
  contactInfo?: string;
  district?: string;
  features?: string[];
  source?: string; // The source of the listing, e.g., 'korter', 'facebook'
  sourceUrl?: string; // The URL of the original listing
  sourcePostId?: any; // Optional: to link to the original post
  sourceId?: string; // Alternative ID from the source
  isExported?: boolean;
  
  createdAt?: Date | string;
  updatedAt?: Date | string;
}