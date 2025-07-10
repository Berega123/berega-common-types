/**
 * Catalog interface based on CatalogCreateDto and CatalogUpdateDto schema
 */
export interface ICatalog {
  _id?: string;
  name: string;
  author: string; // MongoId reference to User
  description: string;
  list?: string[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
} 