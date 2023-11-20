import { IsEmail, IsString } from 'class-validator';
import { CREATE_LOGIN_USER_MESSAGE } from './login-user.messages.js';

export class LoginUserDto {
  @IsEmail({}, { message: CREATE_LOGIN_USER_MESSAGE.email.invalidFormat })
  public email: string;

  @IsString({ message: CREATE_LOGIN_USER_MESSAGE.password.invalidFormat })
  public password: string;
}
