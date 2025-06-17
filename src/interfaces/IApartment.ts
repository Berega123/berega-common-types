/**
 * Basic apartment interface that can be used across all projects
 */
export interface IApartment {
  _id?: string;
  title?: string;
  description: string; // Main description extracted by LLM
  price?: number;
  price_sqm?: number;
  currency?: string;
  coordinates?: [number, number];
  tags?: string[];
  amenities?: string[];
  rooms?: number | string;
  bathrooms?: number | string;
  floor?: number | string;
  totalFloors?: number | string;
  area?: number | string;
  livingArea?: number | string;
  kitchenArea?: number | string;
  balconyArea?: number | string;
  renovation?: string;
  address?: string;
  images?: string[];
  city?: string;
  contactPhone?: string;
  contactInfo?: string;
  district?: string;
  features?: string[];
  source?: string; // The source of the listing, e.g., 'korter', 'facebook'
  sourceUrl?: string; // The URL of the original listing
  sourcePostId?: any; // Optional: to link to the original post
  sourceId?: string; // Alternative ID from the source
  estate?: object;
  building?: object;
  author?: {
    name?: string;
  };
  listingType?: string; // Type of listing: 'rent', 'sale', or 'unknown'
  processed?: boolean;
  secondary?: boolean;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}