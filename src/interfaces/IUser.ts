/**
 * Basic user interface that can be used across all projects
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
  image?: string;
  description?: string;
  data?: string;
  refreshTokens?: string[];
  role?: string;
  status?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
} 