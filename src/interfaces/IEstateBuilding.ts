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
  estate: string | object; // ObjectId reference to Estate
  author: string | object; // ObjectId reference to User
  developer?: string | object; // ObjectId reference to Developer
  entryCount?: number;
  commission?: number;
  developmentCompleteDate?: Date | string;
  developmentStage?: string;
  floorPlans?: string[];
  oldDataAuthor?: string;
  oldDataId?: string;
  oldData?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
} 