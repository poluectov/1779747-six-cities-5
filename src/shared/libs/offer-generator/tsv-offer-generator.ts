import dayjs from 'dayjs';
import { OfferGenerator } from './offer-generator.interface.js';
import { MockServerData, COORDINATES } from '../../types/index.js';
import { generateRandomValue, getRandomItem, getRandomItems } from '../../helpers/index.js';

const MIN_PRICE = 100;
const MAX_PRICE = 10000;

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;


export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const postDate = dayjs()
      .subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day')
      .toISOString();
    const city = getRandomItem<string>(this.mockData.cities);
    const previewPhoto = getRandomItem<string>(this.mockData.previewPhotos);
    const photo = getRandomItems<string>(this.mockData.photos).join(';');
    const isPremium = getRandomItem([true, false]);
    const isFavorite = getRandomItem([true, false]);
    const ratio = generateRandomValue(1, 5, 1);
    const type = getRandomItem<string>(this.mockData.types);
    const rooms = generateRandomValue(1, 8);
    const guests = generateRandomValue(1, 10);
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const facilities = getRandomItems<string>(this.mockData.facilities).join(';');
    const author = getRandomItem(this.mockData.users);
    const email = getRandomItem(this.mockData.emails);
    const avatar = getRandomItem(this.mockData.avatars);
    const password = getRandomItem(this.mockData.passwords);
    const userType = getRandomItem<string>(this.mockData.userType);
    const comments = generateRandomValue(0, 20);
    const coordinates = `${COORDINATES[city].longitude};${COORDINATES[city].latitude}`;

    return [
      title, description, postDate, city, previewPhoto,
      photo, isPremium, isFavorite, ratio,
      type, rooms, guests, price, facilities,
      author, email, avatar, password, userType, comments, coordinates
    ].join('\t');
  }
}
