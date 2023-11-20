import { IsEnum, IsString, Length, IsEmail } from 'class-validator';
import { CREATE_USER_MESSAGES } from './create-user.messages.js';
import { UserType } from '../../../types/user-type.enum.js';

export class CreateUserDto {

  @IsString({ message: CREATE_USER_MESSAGES.name.invalidFormat })
  @Length(1, 15, { message: CREATE_USER_MESSAGES.name.lengthField })
  public name: string;

  @IsEmail({}, { message: CREATE_USER_MESSAGES.email.invalidFormat })
  public email: string;

  @IsString({ message: CREATE_USER_MESSAGES.avatar.invalidFormat })
  public avatar: string;

  @IsEnum(UserType, { message: CREATE_USER_MESSAGES.userType.invalid })
  public userType: UserType;

  @IsString({ message: CREATE_USER_MESSAGES.password.invalidFormat })
  @Length(6, 12, { message: CREATE_USER_MESSAGES.password.lengthField })
  public password: string;
}
