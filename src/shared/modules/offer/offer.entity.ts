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
  @prop({ trim: true, required: true })
  public title!: string;

  @prop({trim: true})
  public description!: string;

  @prop()
  public postDate!: Date;

  @prop()
  city!: CityType;

  @prop()
  public previewPhoto!: string;

  @prop()
  public photos!: string;

  @prop()
  public isPremium!: boolean;

  @prop()
  public isFavorite!: boolean;

  @prop()
  public rating!: number;

  @prop()
  public type!: OfferType;

  @prop()
  public rooms!: number;

  @prop()
  public guests!: number;
  

  @prop()
  public price!: number;

  @prop()
  public facilities!: FacilitiesType[];

  @prop({
    ref: UserEntity,
    required: true
  })
  public userId!: Ref<UserEntity>;

  @prop()
  public comments!: number;

  @prop()
  public coordinates!: string[];

}
export const OfferModel = getModelForClass(OfferEntity);