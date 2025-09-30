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
    isRealtor?: boolean;
    rating: number;
    objectsNumber: string;
    data: string;
    refreshTokens: string[];
    role: string;
    status: string;
    refererId?: string;
    createdAt: Date | string;
    updatedAt: Date | string;
}
