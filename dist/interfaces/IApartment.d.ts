import { PropertyType } from '../constants/property-types';
/**
 * Basic apartment interface that can be used across all projects
 */
export interface IApartment {
    _id?: string;
    title: string;
    description?: string;
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
    ceilingHeight?: number;
    images?: string[];
    contactPhone?: string;
    contactInfo?: string;
    district?: string;
    features?: string[];
    source?: string;
    sourceUrl?: string;
    sourcePostId?: any;
    sourceId?: string;
    estate?: string | object;
    building?: string | object;
    author?: string | object;
    dealType?: string;
    isNewBuild?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
