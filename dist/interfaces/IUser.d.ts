/**
 * User interface that matches NestJS/Mongoose User schema
 */
export interface IUser {
    _id?: string;
    username: string;
    name?: string;
    surname?: string;
    email: string;
    password: string;
    contactPhone?: string;
    contactTelegram?: string;
    contactWhatsapp?: string;
    contactViber?: string;
    contactSite?: string;
    image?: string;
    description?: string;
    rating: number;
    objectNumber: string;
    data: string;
    refreshTokens: string[];
    role: string;
    status: string;
    createdAt: Date | string;
    updatedAt: Date | string;
}
