/**
 * Estate interface based on NestJS/Mongoose schema
 */
export interface IEstate {
    _id?: string;
    title: string;
    description: string;
    address: string;
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
    contactPhone?: string;
    area?: number;
    plot: string;
    propertyType?: string;
    dealType?: string;
    status?: string;
    isComplex?: boolean;
    isNewBuild?: boolean;
    images?: string[];
    author?: string | object;
    oldDataAuthor?: string;
    oldDataId?: string;
    oldData?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
