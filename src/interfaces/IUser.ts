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
  rating: number; // Has default value of 0 in schema
  objectsNumber: string;
  data: string; // Has default value of '' in schema
  refreshTokens: string[]; // Has default value of [] in schema
  role: string; // Has default value of 'user' in schema
  status: string; // Has default value of 'active' in schema
  createdAt: Date | string; // Has default value of Date.now in schema
  updatedAt: Date | string; // Has default value of Date.now in schema
} 