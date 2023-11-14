import { defaultClasses, getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { UserEntity } from '../user/index.js';
import { CityType, FacilitiesType, OfferType } from '../../types/index.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({
    trim: true,
    required: true,
    minlength: 10,
    maxlength: 100
  })
  public title!: string;

  @prop({
    trim: true,
    required: true,
    minlength: 20,
    maxlength: 1024
  })
  public description!: string;

  @prop({required: true})
  public postDate!: Date;

  @prop({required: true})
    city!: CityType;

  @prop({
    required: true,
    type: [String]
  })
  public previewPhoto!: string;

  @prop({
    required: true,
    type: [String],
  })
  public photos!: string[];

  @prop({required: true})
  public isPremium!: boolean;

  @prop({required: true})
  public isFavorite!: boolean;

  @prop({required: true})
  public rating!: number;

  @prop({required: true})
  public type!: OfferType;

  @prop({
    required: true,
    min: 1,
    max: 8
  })
  public rooms!: number;

  @prop({
    required: true,
    min: 1,
    max: 10
  })
  public guests!: number;


  @prop({
    required: true,
    min: 100,
    max: 100000
  })
  public price!: number;

  @prop({
    required: true,
    type: () => String,
    default: []
  })
  public facilities!: FacilitiesType[];

  @prop({
    ref: UserEntity,
    required: true
  })
  public userId!: Ref<UserEntity>;

  @prop()
  public comments!: number;

  @prop({
    required: true,
    type: [String]
  })
  public coordinates!: string[];

}
export const OfferModel = getModelForClass(OfferEntity);
