import { UserType } from './user-type.js';

export type User = {
  firstname: string;
  email: string;
  avatar: string;
  password: string;
  typeUser: UserType;
}
