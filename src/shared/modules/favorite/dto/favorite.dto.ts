import { IsMongoId } from 'class-validator';
import { FAVORITE_MESSAGES } from './favorite.messages.js';

export class FavoriteDto {
  @IsMongoId({ message: FAVORITE_MESSAGES.offerId.invalidFormat })
  public offerId: string;

  public userId: string;
}
