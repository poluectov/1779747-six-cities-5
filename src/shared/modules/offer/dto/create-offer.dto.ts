import { CityType, OfferType, FacilitiesType } from '../../../types/index.js';
import { CreateOfferMessage } from './create-offer.messages .js';
import {
  IsEnum, IsArray, IsDateString, MaxLength, MinLength, ArrayMinSize, ArrayMaxSize,
  IsBoolean, IsInt, Min, Max, IsMongoId,
} from 'class-validator';
import { Type } from 'class-transformer';


export class CreateOfferDto {
  @MinLength(10, { message: CreateOfferMessage.title.minLength })
  @MaxLength(100, { message: CreateOfferMessage.title.maxLength })
  public title: string;

  @MinLength(20, { message: CreateOfferMessage.description.minLength })
  @MaxLength(1024, { message: CreateOfferMessage.description.maxLength })
  public description: string;

  @IsDateString({}, { message: CreateOfferMessage.postDate.invalidFormat })
  public postDate: Date;

  @IsEnum(CityType, { message: CreateOfferMessage.city.invalidFormat })
  public city: CityType;

  @MaxLength(256, { message: CreateOfferMessage.previewPhoto.maxLength })
  public previewPhoto: string;

  @IsArray({ message: CreateOfferMessage.photos.invalidFormat })
  @ArrayMinSize(6, { message: CreateOfferMessage.photos.ArraySize })
  @ArrayMaxSize(6, { message: CreateOfferMessage.photos.ArraySize })
  @MaxLength(256, { each: true, message: CreateOfferMessage.previewPhoto.maxLength })
  public photos: string[];

  @IsBoolean({ message: CreateOfferMessage.isPremium.IsBoolean })
  public isPremium: boolean;

  @IsBoolean({ message: CreateOfferMessage.isFavorite.IsBoolean })
  public isFavorite: boolean;

  @IsInt({ message: CreateOfferMessage.rating.invalidFormat })
  @Min(1, { message: CreateOfferMessage.rating.minValue })
  @Max(5, { message: CreateOfferMessage.rating.maxValue })
  public rating: number;

  @IsEnum(OfferType, { message: CreateOfferMessage.type.invalidFormat })
  public type: OfferType;

  @IsInt({ message: CreateOfferMessage.rooms.invalidFormat })
  @Min(1, { message: CreateOfferMessage.rooms.minValue })
  @Max(8, { message: CreateOfferMessage.rooms.maxValue })
  public rooms: number;

  @IsInt({ message: CreateOfferMessage.guests.invalidFormat })
  @Min(1, { message: CreateOfferMessage.guests.minValue })
  @Max(10, { message: CreateOfferMessage.guests.maxValue })
  public guests: number;

  @IsInt({ message: CreateOfferMessage.price.invalidFormat })
  @Min(100, { message: CreateOfferMessage.price.minValue })
  @Max(100000, { message: CreateOfferMessage.price.maxValue })
  public price: number;


  @ArrayMinSize(1, { message: CreateOfferMessage.facilities.ArrayMinSize })
  @ArrayMaxSize(7, { message: CreateOfferMessage.facilities.ArrayMaxSize })
  @IsEnum(FacilitiesType, {each: true, message: CreateOfferMessage.facilities.invalidFormat })
  @Type(() => String)
  public facilities: FacilitiesType[];

  @IsMongoId({ message: CreateOfferMessage.userId.invalidId })
  public userId: string;

  public comments: number;

  @Type(() => String)
  public coordinates: string[];
}
