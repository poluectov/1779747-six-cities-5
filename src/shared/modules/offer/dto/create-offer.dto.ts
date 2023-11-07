import { CityType, OfferType, FacilitiesType } from '../../../types/index.js';

export class CreateOfferDto {
  public title: string;
  public description: string;
  public postDate: Date;
  public city: CityType;
  public previewPhoto: string;
  public photos: string[];
  public isPremium: boolean;
  public isFavorite: boolean;
  public rating: number;
  public type: OfferType;
  public rooms: number;
  public guests: number;
  public price: number;
  public facilities: FacilitiesType[];
  public userId: string;
  public comments: number;
  public coordinates: string[];
}
