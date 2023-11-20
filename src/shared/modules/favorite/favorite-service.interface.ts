import { DocumentType } from '@typegoose/typegoose';
import { OfferEntity } from '../offer/index.js';
import { FavoriteDto } from './index.js';

export interface FavoriteService {
  add(dto: FavoriteDto): Promise<DocumentType<OfferEntity> | null>;
  remove(dto: FavoriteDto): Promise<DocumentType<OfferEntity> | null>;
  exists(offerId: string, userId: string): Promise<boolean>;
}
