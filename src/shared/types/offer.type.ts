import { CityType } from "./city.enum.js";
import { OfferType } from "./offer-type.enum.js";
import { User } from "./user.type.js";
import { FacilitiesType } from "./facilities.enum.js";

export type Offer = {
    title: string;
    description: string;
    postDate: Date;
    city: CityType;
    preview: string;
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
    coordinates: number [];
  };