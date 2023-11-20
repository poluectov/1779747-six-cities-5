import { CityType, OfferType, FacilitiesType } from '../../../types/index.js';
import { UPDATE_OFFER_MESSAGES } from './update-offer.messages.js';
import {
  IsEnum, IsOptional, IsArray, IsDateString, MaxLength, MinLength, ArrayMinSize, ArrayMaxSize,
  IsBoolean, IsInt, Min, Max, IsObject, ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateOfferDto {
  @IsOptional()
  @MinLength(10, { message: UPDATE_OFFER_MESSAGES.title.minLength })
  @MaxLength(100, { message: UPDATE_OFFER_MESSAGES.title.maxLength })
  public title: string;

  @IsOptional()
  @MinLength(20, { message: UPDATE_OFFER_MESSAGES.description.minLength })
  @MaxLength(1024, { message: UPDATE_OFFER_MESSAGES.description.maxLength })
  public description: string;

  @IsOptional()
  @IsDateString({}, { message: UPDATE_OFFER_MESSAGES.postDate.invalidFormat })
  public postDate: Date;

  @IsOptional()
  @IsObject()
  @IsEnum({ CityType, message: UPDATE_OFFER_MESSAGES.city.invalidFormat })
  public city: CityType;


  @IsOptional()
  @MaxLength(256, { message: UPDATE_OFFER_MESSAGES.previewPhoto.maxLength })
  public previewPhoto: string;

  @IsOptional()
  @IsArray({ message: UPDATE_OFFER_MESSAGES.photos.invalidFormat })
  @ArrayMinSize(6, { message: UPDATE_OFFER_MESSAGES.photos.ArraySize })
  @ArrayMaxSize(6, { message: UPDATE_OFFER_MESSAGES.photos.ArraySize })
  @MaxLength(256, { each: true, message: UPDATE_OFFER_MESSAGES.previewPhoto.maxLength })
  public photos: string[];

  @IsOptional()
  @IsBoolean({ message: UPDATE_OFFER_MESSAGES.isPremium.IsBoolean })
  public isPremium: boolean;


  @IsOptional()
  @IsInt({ message: UPDATE_OFFER_MESSAGES.rating.invalidFormat })
  @Min(1, { message: UPDATE_OFFER_MESSAGES.rating.minValue })
  @Max(5, { message: UPDATE_OFFER_MESSAGES.rating.maxValue })
  public rating: number;

  @IsOptional()
  @IsObject()
  @IsEnum({ OfferType, message: UPDATE_OFFER_MESSAGES.type.invalidFormat })
  public type: OfferType;

  @IsOptional()
  @IsInt({ message: UPDATE_OFFER_MESSAGES.rooms.invalidFormat })
  @Min(1, { message: UPDATE_OFFER_MESSAGES.rooms.minValue })
  @Max(8, { message: UPDATE_OFFER_MESSAGES.rooms.maxValue })
  public rooms: number;

  @IsOptional()
  @IsInt({ message: UPDATE_OFFER_MESSAGES.guests.invalidFormat })
  @Min(1, { message: UPDATE_OFFER_MESSAGES.guests.minValue })
  @Max(10, { message: UPDATE_OFFER_MESSAGES.guests.maxValue })
  public guests: number;

  @IsOptional()
  @IsInt({ message: UPDATE_OFFER_MESSAGES.price.invalidFormat })
  @Min(100, { message: UPDATE_OFFER_MESSAGES.price.minValue })
  @Max(100000, { message: UPDATE_OFFER_MESSAGES.price.maxValue })
  public price: number;


  @ArrayMinSize(1, { message: UPDATE_OFFER_MESSAGES.facilities.ArrayMinSize })
  @ArrayMaxSize(7, { message: UPDATE_OFFER_MESSAGES.facilities.ArrayMaxSize })
  @IsEnum(FacilitiesType, {each: true, message: UPDATE_OFFER_MESSAGES.facilities.invalidFormat })
  @Type(() => String)
  public facilities: FacilitiesType[];

  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => String)
  public coordinates: string[];
}
