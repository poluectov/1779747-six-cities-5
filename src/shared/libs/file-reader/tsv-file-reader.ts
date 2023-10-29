import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';
import { Offer, OfferType, CityType, FacilitiesType, UserType } from '../../types/index.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  public read(): void {
    try {
      this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
      console.log(this.rawData);
    }catch (error) {
      console.error(`File was not read ${this.filename}`);
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }

  public toArray(): Offer[] {
    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([title, description, postDate, city, previewPhoto, photos,
        isPremium, isFavorite, rating, type, rooms, quests, price, facilities, firstname, email, avatar, password, typeUser,
        comments, coordinates]) => ({
        title,
        description,
        postDate: new Date(postDate),
        city: city as CityType,
        previewPhoto,
        photos: photos.split(';'),
        isPremium: Boolean(isPremium),
        isFavorite: Boolean(isFavorite),
        rating: Number.parseInt(rating, 10),
        type: type as OfferType,
        rooms: Number.parseInt(rooms, 10),
        quests: Number.parseInt(quests, 10),
        price: Number.parseInt(price, 10),
        facilities: facilities.split(';') as FacilitiesType [],
        user: { firstname, email, avatar, password, typeUser: typeUser as UserType},
        comments: Number.parseInt(comments, 10),
        coordinates: coordinates.split(';'),
      }));
  }
}
