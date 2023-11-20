import { Request } from 'express';
import { RequestBody, RequestParams } from '../../../libs/rest/index.js';
import { FavoriteDto } from '../index.js';

export type FavoriteRequest = Request<RequestParams, RequestBody, FavoriteDto>;
