import { CityType, OfferType, FacilitiesType } from '../../../types/index.js';
import { UpdateOfferMessage } from './update-offer.messages.js';
import {
  IsEnum, IsOptional, IsArray, IsDateString, MaxLength, MinLength, ArrayMinSize, ArrayMaxSize,
  IsBoolean, IsInt, Min, Max, IsObject, ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateOfferDto {
  @IsOptional()
  @MinLength(10, { message: UpdateOfferMessage.title.minLength })
  @MaxLength(100, { message: UpdateOfferMessage.title.maxLength })
  public title: string;

  @IsOptional()
  @MinLength(20, { message: UpdateOfferMessage.description.minLength })
  @MaxLength(1024, { message: UpdateOfferMessage.description.maxLength })
  public description: string;

  @IsOptional()
  @IsDateString({}, { message: UpdateOfferMessage.postDate.invalidFormat })
  public postDate: Date;

  @IsOptional()
  @IsObject()
  @IsEnum({ CityType, message: UpdateOfferMessage.city.invalidFormat })
  public city: CityType;


  @IsOptional()
  @MaxLength(256, { message: UpdateOfferMessage.previewPhoto.maxLength })
  public previewPhoto: string;

  @IsOptional()
  @IsArray({ message: UpdateOfferMessage.photos.invalidFormat })
  @ArrayMinSize(6, { message: UpdateOfferMessage.photos.ArraySize })
  @ArrayMaxSize(6, { message: UpdateOfferMessage.photos.ArraySize })
  @MaxLength(256, { each: true, message: UpdateOfferMessage.previewPhoto.maxLength })
  public photos: string[];

  @IsOptional()
  @IsBoolean({ message: UpdateOfferMessage.isPremium.IsBoolean })
  public isPremium: boolean;

  @IsOptional()
  @IsBoolean({ message: UpdateOfferMessage.isFavorite.IsBoolean })
  public isFavorite: boolean;

  @IsOptional()
  @IsInt({ message: UpdateOfferMessage.rating.invalidFormat })
  @Min(1, { message: UpdateOfferMessage.rating.minValue })
  @Max(5, { message: UpdateOfferMessage.rating.maxValue })
  public rating: number;

  @IsOptional()
  @IsObject()
  @IsEnum({ OfferType, message: UpdateOfferMessage.type.invalidFormat })
  public type: OfferType;

  @IsOptional()
  @IsInt({ message: UpdateOfferMessage.rooms.invalidFormat })
  @Min(1, { message: UpdateOfferMessage.rooms.minValue })
  @Max(8, { message: UpdateOfferMessage.rooms.maxValue })
  public rooms: number;

  @IsOptional()
  @IsInt({ message: UpdateOfferMessage.guests.invalidFormat })
  @Min(1, { message: UpdateOfferMessage.guests.minValue })
  @Max(10, { message: UpdateOfferMessage.guests.maxValue })
  public guests: number;

  @IsOptional()
  @IsInt({ message: UpdateOfferMessage.price.invalidFormat })
  @Min(100, { message: UpdateOfferMessage.price.minValue })
  @Max(100000, { message: UpdateOfferMessage.price.maxValue })
  public price: number;


  @ArrayMinSize(1, { message: UpdateOfferMessage.facilities.ArrayMinSize })
  @ArrayMaxSize(7, { message: UpdateOfferMessage.facilities.ArrayMaxSize })
  @IsEnum(FacilitiesType, {each: true, message: UpdateOfferMessage.facilities.invalidFormat })
  @Type(() => String)
  public facilities: FacilitiesType[];

  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => String)
  public coordinates: string[];
}
