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
  totalFloors?: number;
  contactPhone?: string;
  contactTelegram?: string;
  contactWhatsapp?: string;
  area?: number;
  plot: string;
  propertyType?: PropertyType;
  landType?: string;
  dealType?: DealType;
  status?: StatusType;
  isComplex?: boolean;
  isNewBuild?: boolean;
  images?: string[];
  documents?: string[];
  tags?: string[];
  amenities?: string[];
  author?: string | object; // ObjectId reference to User
  developer?: string | object; // ObjectId reference to Developer
  commission?: number;
  electricityOnPlot?: string;
  gasConnected?: string;
  roadType?: string;
  developmentCompleteDate?: Date;
  developmentStage?: string;
  buildingClass?: string;
  coastline?: string;
  videoUrl?: string;
  elevatorTypes?: string[];
  paymentTypes?: string[];
  oldDataAuthor?: string;
  oldDataId?: string;
  oldData?: string;
  analyticsViews?: number;
  analyticsFavorites?: number;
  rating?: number;
  createdAt?: Date;
  updatedAt?: Date;
} 