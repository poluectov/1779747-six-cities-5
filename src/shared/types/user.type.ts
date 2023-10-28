import { UserType } from './user-type.enum.js';

export type User = {
  firstname: string;
  email: string;
  avatar: string;
  type: UserType;
}