import { CityType, OfferType, FacilitiesType } from '../../../types/index.js';
import { CREATE_OFFER_MESSAGES } from './create-offer.messages .js';
import {
  IsEnum, IsArray, IsDateString, MaxLength, MinLength, ArrayMinSize, ArrayMaxSize,
  IsBoolean, IsInt, Min, Max,
} from 'class-validator';
import { Type } from 'class-transformer';


export class CreateOfferDto {
  @MinLength(10, { message: CREATE_OFFER_MESSAGES.title.minLength })
  @MaxLength(100, { message: CREATE_OFFER_MESSAGES.title.maxLength })
  public title: string;

  @MinLength(20, { message: CREATE_OFFER_MESSAGES.description.minLength })
  @MaxLength(1024, { message: CREATE_OFFER_MESSAGES.description.maxLength })
  public description: string;

  @IsDateString({}, { message: CREATE_OFFER_MESSAGES.postDate.invalidFormat })
  public postDate: Date;

  @IsEnum(CityType, { message: CREATE_OFFER_MESSAGES.city.invalidFormat })
  public city: CityType;

  @MaxLength(256, { message: CREATE_OFFER_MESSAGES.previewPhoto.maxLength })
  public previewPhoto: string;

  @IsArray({ message: CREATE_OFFER_MESSAGES.photos.invalidFormat })
  @ArrayMinSize(6, { message: CREATE_OFFER_MESSAGES.photos.ArraySize })
  @ArrayMaxSize(6, { message: CREATE_OFFER_MESSAGES.photos.ArraySize })
  @MaxLength(256, { each: true, message: CREATE_OFFER_MESSAGES.previewPhoto.maxLength })
  public photos: string[];

  @IsBoolean({ message: CREATE_OFFER_MESSAGES.isPremium.IsBoolean })
  public isPremium: boolean;


  @IsInt({ message: CREATE_OFFER_MESSAGES.rating.invalidFormat })
  @Min(1, { message: CREATE_OFFER_MESSAGES.rating.minValue })
  @Max(5, { message: CREATE_OFFER_MESSAGES.rating.maxValue })
  public rating: number;

  @IsEnum(OfferType, { message: CREATE_OFFER_MESSAGES.type.invalidFormat })
  public type: OfferType;

  @IsInt({ message: CREATE_OFFER_MESSAGES.rooms.invalidFormat })
  @Min(1, { message: CREATE_OFFER_MESSAGES.rooms.minValue })
  @Max(8, { message: CREATE_OFFER_MESSAGES.rooms.maxValue })
  public rooms: number;

  @IsInt({ message: CREATE_OFFER_MESSAGES.guests.invalidFormat })
  @Min(1, { message: CREATE_OFFER_MESSAGES.guests.minValue })
  @Max(10, { message: CREATE_OFFER_MESSAGES.guests.maxValue })
  public guests: number;

  @IsInt({ message: CREATE_OFFER_MESSAGES.price.invalidFormat })
  @Min(100, { message: CREATE_OFFER_MESSAGES.price.minValue })
  @Max(100000, { message: CREATE_OFFER_MESSAGES.price.maxValue })
  public price: number;


  @ArrayMinSize(1, { message: CREATE_OFFER_MESSAGES.facilities.ArrayMinSize })
  @ArrayMaxSize(7, { message: CREATE_OFFER_MESSAGES.facilities.ArrayMaxSize })
  @IsEnum(FacilitiesType, {each: true, message: CREATE_OFFER_MESSAGES.facilities.invalidFormat })
  @Type(() => String)
  public facilities: FacilitiesType[];

  public userId: string;

  public comments: number;

  @Type(() => String)
  public coordinates: string[];
}
