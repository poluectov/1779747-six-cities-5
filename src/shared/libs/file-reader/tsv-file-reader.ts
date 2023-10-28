import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';
import { Offer, OfferType, CityType, FacilitiesType, UserType } from '../../types/index.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([title, description, postDate, city, previewPhoto, photos, 
        isPremium, isFavorite, rating, type, rooms, quests, price, facilities, firstname, email, avatar, typeUser,
        comments, coordinates]) => ({
        title,
        description,
        postDate: new Date(postDate),
        city: CityType[city as 'Paris' | 'Cologne' | 'Brussels' | 
        'Amsterdam' | 'Hamburg' | 'Dusseldorf'],
        previewPhoto,
        photos: photos.split(';'),
        isPremium: Boolean(isPremium),
        isFavorite: Boolean(isFavorite),
        rating: Number.parseInt(rating, 10),
        type: OfferType[type as 'apartment' | 'house' | 'room' | 'hotel'],
        rooms: Number.parseInt(rooms, 10),
        quests: Number.parseInt(quests, 10),
        price: Number.parseInt(price, 10),
        facilities: facilities.split(';')
          .map((name) => (FacilitiesType[name as 'Breakfast' | 'Air conditioning' | 'Laptop friendly workspace' | 'Baby seat' | 'Washer' | 'Towels'|'Fridge'])),
        user: { firstname, email, avatar, typeUser: UserType.Regular},
        comments: Number.parseInt(comments, 10),
        coordinates: coordinates.split(';'),
      }));
  }
}