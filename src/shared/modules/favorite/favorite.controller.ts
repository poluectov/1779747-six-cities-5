import { inject, injectable } from 'inversify';
import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  BaseController,
  HttpError,
  HttpMethod,
  PrivateRouteMiddleware,
  ValidateDtoMiddleware,
} from '../../libs/rest/index.js';
import { Component } from '../../types/index.js';
import { Logger } from '../../libs/logger/index.js';
import { FavoriteService } from './favorite-service.interface.js';
import { OfferRdo } from '../offer/rdo/offer.rdo.js';
import { OfferService } from '../offer/index.js';
import { fillDTO } from '../../helpers/index.js';
import { FavoriteRequest } from './type/favorite-request.type.js';
import { FavoriteDto } from './index.js';


@injectable()
export default class FavoriteController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.FavoriteService) private readonly favoriteService: FavoriteService,
    @inject(Component.OfferService) private readonly offerService: OfferService,
  ) {
    super(logger);

    this.logger.info('Register routes for FavoriteController');
    this.addRoute({
      path: '/add',
      method: HttpMethod.Post,
      handler: this.add,
      middlewares: [
        new PrivateRouteMiddleware(),
        new ValidateDtoMiddleware(FavoriteDto)
      ]
    });
    this.addRoute({
      path: '/remove',
      method: HttpMethod.Post,
      handler: this.remove,
      middlewares: [
        new PrivateRouteMiddleware(),
        new ValidateDtoMiddleware(FavoriteDto)
      ]
    });
  }

  public async add(
    { body, tokenPayload }: FavoriteRequest,
    res: Response
  ): Promise<void> {
    if (! await this.offerService.exists(body.offerId)) {
      throw new HttpError(
        StatusCodes.NOT_FOUND,
        `Offer with id ${body.offerId} not found.`,
        'CommentController'
      );
    }

    if (await this.favoriteService.exists(body.offerId, tokenPayload.id)) {
      throw new HttpError(
        StatusCodes.CONFLICT,
        `Offer with id ${body.offerId} allready is favorite.`,
        'CommentController'
      );
    }

    const offer = await this.favoriteService.add({ ...body, userId: tokenPayload.id });
    this.ok(res, fillDTO(OfferRdo, offer));
  }

  public async remove(
    { body, tokenPayload }: FavoriteRequest,
    res: Response
  ): Promise<void> {
    if (! await this.offerService.exists(body.offerId)) {
      throw new HttpError(
        StatusCodes.NOT_FOUND,
        `Offer with id ${body.offerId} not found.`,
        'CommentController'
      );
    }

    const offer = await this.favoriteService.remove({ ...body, userId: tokenPayload.id });
    this.ok(res, fillDTO(OfferRdo, offer));
  }
}
