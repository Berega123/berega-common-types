import { PropertyType, DealType, StatusType } from '../constants/property-types';
/**
 * Estate interface based on NestJS/Mongoose schema
 */
export interface IEstate {
    _id?: string;
    identifier?: string;
    title: string;
    description: string;
    address: string;
    city?: string;
    country?: string;
    coordinates: number[];
    price_from?: number;
    price_to?: number;
    price_sqm_from?: number;
    price_sqm_to?: number;
    price?: number;
    price_sqm?: number;
    commission?: number;
    contactPhone?: string;
    contactTelegram?: string;
    contactWhatsapp?: string;
    area?: number;
    plot: string;
    landType?: string;
    propertyType?: PropertyType;
    dealType?: DealType;
    status?: StatusType;
    totalFloors?: number;
    isComplex?: boolean;
    isNewBuild?: boolean;
    available?: boolean;
    developer?: string | object;
    electricityOnPlot?: string;
    gasConnected?: string;
    roadType?: string;
    amenities?: string[];
    tags?: string[];
    developmentCompleteDate?: Date | string;
    developmentStage?: string;
    buildingClass?: string;
    coastline?: string;
    elevatorTypes?: string[];
    paymentTypes?: string[];
    videoUrl?: string;
    images?: string[];
    documents?: string[];
    author?: string | object;
    oldDataAuthor?: string;
    oldDataId?: string;
    oldData?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
