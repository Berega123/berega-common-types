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
    floorPlanTags: unknown[];
    totalFloors?: number;
    buildingYear?: number;
    ceilingHeight?: number;
    buildingType?: BuildingType;
    buildingClass?: string;
    coastline?: string;
    wallType?: string;
    propertyType?: PropertyType;
    dealType?: DealType;
    status?: StatusType;
    isComplex?: boolean;
    isNewBuild?: boolean;
    contactPhone?: string;
    tags?: string[];
    amenities?: string[];
    images?: string[];
    documents?: string[];
    estate: string | object;
    author: string | object;
    developer?: string | object;
    entryCount?: number;
    commission?: number;
    developmentCompleteDate?: Date;
    developmentStage?: string;
    floorPlans?: string[];
    apartmentsPerFloor?: number;
    oldDataAuthor?: string;
    oldDataId?: string;
    oldData?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
