import { Request } from 'express';

export interface CustomRequest extends Request {
  user: any; // Replace 'any' with the type of your 'user' object
}
