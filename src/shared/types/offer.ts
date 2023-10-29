import { CityType } from './city-type.js';
import { OfferType } from './offer-type.js';
import { User } from './user.js';
import { FacilitiesType } from './facilities.type.js';

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
    quests: number;
    price: number;
    facilities: FacilitiesType[];
    user: User;
    comments: number;
    coordinates: string [];
  };
