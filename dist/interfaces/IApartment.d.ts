/**
 * Basic apartment interface that can be used across all projects
 */
export interface IApartment {
    _id?: string;
    title?: string;
    description: string;
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
    source?: string;
    sourceUrl?: string;
    sourcePostId?: any;
    sourceId?: string;
    estate?: object;
    building?: object;
    author?: {
        name?: string;
    };
    listingType?: string;
    processed?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
