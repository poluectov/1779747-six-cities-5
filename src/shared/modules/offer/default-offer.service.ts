import { inject, injectable } from 'inversify';
import { OfferService } from './offer-service.interface.js';
import { Component, SortType} from '../../types/index.js';
import { Logger } from '../../libs/logger/index.js';
import { DocumentType, types } from '@typegoose/typegoose';
import { OfferEntity } from './offer.entity.js';
import { CreateOfferDto } from './dto/create-offer.dto.js';
import { UpdateOfferDto } from './dto/update-offer.dto.js';
import { DEFAULT_OFFER_COUNT, DEFAULT_PREMIUM_COUNT } from './offer.constant.js';

@injectable()
export class DefaultOfferService implements OfferService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.OfferModel) private readonly offerModel: types.ModelType<OfferEntity>
  ) {}

  public async create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity>> {
    const result = await this.offerModel.create(dto);
    this.logger.info(`New offer created: ${dto.title}`);

    return result;
  }

  public async findById(offerId: string): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel
    .findById(offerId)
    .exec();
  }

  public async find(): Promise<DocumentType<OfferEntity>[]> {
      return await this.offerModel
      .aggregate([
        {
          $lookup: {
            from: 'comments',
            let: { offerId: '$_id'},
            pipeline: [
              { $match: { $expr: { $in: [ '$$offerId', '$comments' ] } } },
              { $project: { _id: 1 }}
            ],
            as: 'comments'
          },
        },
        { $addFields:
            { id: { $toString: '$_id' }, comments: { $size: '$comments'} }
        },
        { $unset: 'comments' },
        { $limit: DEFAULT_OFFER_COUNT },
        { $sort: { comments: SortType.Down } }
      ])
      .exec();
  }


  public async updateById(offerId: string, dto: UpdateOfferDto): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel
      .findByIdAndUpdate(offerId, dto, {new: true})
      .populate(['userId'])
      .exec();
  }

  public async findPremiumByCity(city: string, isPremium: boolean = true): Promise<DocumentType<OfferEntity>[]> {
    const limit = DEFAULT_PREMIUM_COUNT;
    return this.offerModel
      .find({ city, isPremium }, {}, { limit })
      .populate([ 'userId' ])
      .exec()
  }
  
  public async findFavorites(userId: string, isFavorite: boolean = true): Promise<DocumentType<OfferEntity>[]> {
        return this.offerModel
          .find({ userId, isFavorite })
          .populate([ 'userId' ])
          .exec();
     }

  public async setFavoriteStatus(offerId: string, dto: UpdateOfferDto): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel
      .findByIdAndUpdate(offerId, dto, { new: true })
      .populate([ 'userId' ])
      .exec();
  }

  public async deleteById(offerId: string): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel
      .findByIdAndDelete(offerId)
      .exec();
  }


  public async incCommentCount(offerId: string): Promise<DocumentType<OfferEntity> | null> {
    return this.offerModel
      .findByIdAndUpdate(offerId, {'$inc': {
        commentCount: 1,
      }}).exec();
  }

  public async exists(documentId: string): Promise<boolean> {
    return (await this.offerModel
      .exists({_id: documentId})) !== null;
  }

}
