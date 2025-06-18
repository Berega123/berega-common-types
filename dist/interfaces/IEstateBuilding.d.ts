/**
 * Estate building interface based on NestJS/Mongoose schema
 */
export interface IEstateBuilding {
    _id?: string;
    title: string;
    description?: string;
    address?: string;
    city?: string;
    country?: string;
    city_code?: string;
    country_code?: string;
    coordinates: number[];
    price_from?: number;
    price_to?: number;
    price_sqm_from?: number;
    price_sqm_to?: number;
    price?: number;
    price_sqm?: number;
    area?: number;
    plot: string;
    height: number;
    floors?: number;
    totalFloors?: number;
    buildingYear?: number;
    ceilingHeight?: number;
    buildingType?: string;
    propertyType?: string;
    dealType?: string;
    status?: string;
    isComplex?: boolean;
    contactPhone?: string;
    tags?: string[];
    amenities?: string[];
    images?: string[];
    estate?: string | object;
    author?: string | object;
    oldDataAuthor?: string;
    oldDataId?: string;
    oldData?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
export type BuildingType = string;
export type PropertyType = string;
export type DealType = string;
export type StatusType = string;
