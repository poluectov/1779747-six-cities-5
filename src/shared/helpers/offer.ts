import { Offer, UserType, CityType, OfferType, FacilitiesType} from '../types/index.js';

export function createOffer(offerData: string): Offer {
  const [
    title,
    description,
    postDate,
    city,
    previewPhoto,
    photos,
    isPremium,
    isFavorite,
    rating,
    type,
    rooms,
    guests,
    price,
    facilities,
    name,
    email,
    avatar,
    password,
    userType,
    comments,
    coordinates
  ] = offerData.replace('\n', '').split('\t');

  const user = {
    name,
    email,
    avatar,
    password,
    userType: userType as UserType
  };

  return {
    title,
    description,
    postDate: new Date(postDate),
    city: city as CityType,
    previewPhoto,
    photos: photos.split(', ').map((item) => (item)),
    isPremium: isPremium === 'true',
    isFavorite: isFavorite === 'true',
    rating: Number.parseInt(rating, 10),
    type: type as OfferType,
    rooms: Number.parseInt(rooms, 10),
    guests: Number.parseInt(guests, 10),
    price: Number.parseInt(price, 10),
    facilities: facilities.split(';') as FacilitiesType [],
    user,
    comments: Number.parseInt(comments, 10),
    coordinates: coordinates.split(';'),
  };
}
