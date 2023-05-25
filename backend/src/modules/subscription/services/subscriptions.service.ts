import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subscription } from '../schemas/subscriptions.schema';
import { CreateSubscriptionDto, UpdateSubscriptionDto } from '../dto';
import { Query } from 'src/shared/interfaces';
import {
  _getActiveAggregationFilter,
  _getIdAggregationFilter,
  _getNameAggregationFilter,
  _getPriceAggregationFilter,
} from 'src/shared/helpers/aggregations';
import { nanoid } from 'nanoid';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectModel('Subscription')
    private readonly subscriptionModel: Model<Subscription>,
  ) {}

  async createSubscription(payload: CreateSubscriptionDto) {
    payload.uid = nanoid();

    const data = await this.subscriptionModel.create(payload);

    return data;
  }

  async getAllSubscriptions(query: Query) {
    const baseQuery = [
      {
        $match: {
          $and: [
            ..._getIdAggregationFilter(query),
            ..._getActiveAggregationFilter(query),
            ..._getNameAggregationFilter(query),
            ..._getPriceAggregationFilter(query),
          ],
        },
      },
    ];

    console.log('QUERY', JSON.stringify(baseQuery));

    const subscriptions = this.subscriptionModel.aggregate(baseQuery);

    return subscriptions;
  }

  getParsedQuery(query: Query) {
    let { name, uid, active = true, minPrice = null, maxPrice = null } = query;

    active = [true, 'true'].includes(active);
    uid = uid ? (Array.isArray(uid) ? uid : [uid]) : null;
    name = name ? (Array.isArray(name) ? name : [name]) : null;
    minPrice = minPrice !== null && !isNaN(minPrice) ? Number(minPrice) : null;
    maxPrice = maxPrice !== null && !isNaN(maxPrice) ? Number(maxPrice) : null;

    return {
      name,
      minPrice,
      maxPrice,
      uid,
      active,
    };
  }

  async editSubscriptions(filter = {}, payload: UpdateSubscriptionDto = {}) {
    return this.subscriptionModel.findOneAndUpdate(filter, payload, {
      new: true,
    });
  }
}
