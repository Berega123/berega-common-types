/**
 * Catalog interface based on CatalogCreateDto and CatalogUpdateDto schema
 */
export interface ICatalog {
    _id?: string;
    name: string;
    author: string;
    description: string;
    list?: string[];
    isExported?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
