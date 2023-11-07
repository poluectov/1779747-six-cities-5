import { UserType } from './user-type.js';

export type User = {
  name: string;
  email: string;
  avatar: string;
  userType: UserType;
}
