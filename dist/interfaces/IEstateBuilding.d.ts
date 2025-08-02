import { PropertyType, DealType, StatusType, BuildingType } from '../constants/property-types';
/**
 * Estate building interface that matches NestJS/Mongoose EstateBuilding schema
 */
export interface IEstateBuilding {
    _id?: string;
    title: string;
    description?: string;
    address?: string;
    city?: string;
    country?: string;
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
    buildingType?: BuildingType;
    buildingClass?: string;
    coastline?: string;
    propertyType?: PropertyType;
    dealType?: DealType;
    status?: StatusType;
    isComplex?: boolean;
    isNewBuild?: boolean;
    contactPhone?: string;
    tags?: string[];
    amenities?: string[];
    images?: string[];
    estate: string | object;
    author: string | object;
    developer?: string | object;
    commission?: number;
    developmentComplete?: Date | string;
    developmentStage?: string;
    oldDataAuthor?: string;
    oldDataId?: string;
    oldData?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
