import { CityType } from './city-type.enum.js';
import { OfferType } from './offer-type.enum.js';
import { User } from './user.js';
import { FacilitiesType } from './facilities-type.enum.js';

export type Offer = {
    title: string;
    description: string;
    postDate: Date;
    city: CityType;
    previewPhoto: string;
    photos: string[];
    isPremium: boolean;
    isFavorite: boolean;
    rating: number;
    type: OfferType;
    rooms: number;
    guests: number;
    price: number;
    facilities: FacilitiesType[];
    user: User;
    comments: number;
    coordinates: string [];
  };
