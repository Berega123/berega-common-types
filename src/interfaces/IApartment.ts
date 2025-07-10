import { PropertyType, DealType, StatusType } from '../constants/property-types';

/**
 * Basic apartment interface that can be used across all projects
 */
export interface IApartment {
  _id?: string;
  title: string;
  description?: string; // Main description extracted by LLM
  price: number;
  price_sqm: number;
  currency?: string;
  coordinates?: number[];
  tags?: string[];
  amenities?: string[];
  rooms?: string;
  bathrooms?: string;
  floor?: number;
  totalFloors?: number;
  area?: number;
  livingArea?: number;
  kitchenArea?: number;
  balconyArea?: number;
  renovation?: string;
  propertyType?: PropertyType;
  address?: string;
  city?: string;
  country?: string;
  city_code?: string;
  country_code?: string;
  price_per_month?: number;
  price_per_day?: number;
  ceilingHeight?: number;
  images?: string[];
  contactPhone?: string;
  contactInfo?: string;
  district?: string;
  features?: string[];
  source?: string; // The source of the listing, e.g., 'korter', 'facebook'
  sourceUrl?: string; // The URL of the original listing
  sourcePostId?: any; // Optional: to link to the original post
  sourceId?: string; // Alternative ID from the source
  estate?: string | object; // ObjectId reference to Estate
  building?: string | object; // ObjectId reference to EstateBuilding
  author?: string | object; // ObjectId reference to User
  dealType?: DealType; // Type of deal: 'rent', 'sale', etc.
  status?: StatusType; // Status of the apartment listing
  isNewBuild?: boolean;
  isExported?: boolean;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}