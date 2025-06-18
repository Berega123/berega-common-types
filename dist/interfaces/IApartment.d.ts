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
    address?: string;
    images?: string[];
    city?: string;
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
    listingType?: string;
    processed?: boolean;
    secondary?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
