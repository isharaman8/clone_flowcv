// THIRD PARTY IMPORTS
import { Model } from 'mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// INNER IMPORTS
import { Purchase } from '../schema/purchase.schema';
import { Query as IQuery } from 'src/shared/interfaces';
import {
  _getActiveAggregationFilter,
  _getIdAggregationFilter,
  _getPurchaseDataAggregationFilter,
  _getUserIdAggregationFilter,
} from 'src/shared/helpers/aggregations';
import { PurchaseDto, UpdatePurchaseDto } from '../dto';
import { nanoid } from 'nanoid';
import { PURCHASE_ENUM } from 'src/shared/constants';

@Injectable()
export class PurchaseService {
  constructor(
    @InjectModel('Purchase') private readonly purchaseSchema: Model<Purchase>,
  ) {}

  async getPurchases(query: IQuery, user: any = {}) {
    if (user?.role !== 'admin') {
      query.user_uid = [user?.uid];
    }

    const baseQuery = [
      {
        $match: {
          $and: [
            ..._getIdAggregationFilter(query),
            ..._getUserIdAggregationFilter(query),
            ..._getActiveAggregationFilter(query),
          ],
        },
      },
      ..._getPurchaseDataAggregationFilter(query),
    ];

    console.log('QUERY', JSON.stringify(baseQuery));

    return this.purchaseSchema.aggregate(baseQuery);
  }

  async makePurchase(purchase_data: PurchaseDto, user: any = {}) {
    if (!user?.uid) {
      throw new BadRequestException({
        message: `user id required for transaction`,
      });
    }
    const payload = {
      ...purchase_data,
      uid: nanoid(),
      user_uid: user?.uid,
      purchased_date: purchase_data.purchased_date || new Date(),
      active: true,
    };

    console.log(`payload`, payload);

    const doc = await this.purchaseSchema.create(payload);

    return doc;
  }

  async updatePurchase(data: UpdatePurchaseDto, uid: string) {
    delete data.purchase_uid;
    delete data.purchase_type;

    return this.purchaseSchema.findOneAndUpdate({ uid }, data, {
      new: true,
    });
  }

  getParsedQuery(query: IQuery = {}) {
    let {
      uid,
      purchase_uid,
      active = true,
      populate_purchase_data = false,
      purchase_type,
      user_uid,
    } = query;

    active = [true, 'true'].includes(active);
    purchase_uid = purchase_uid?.toString() || null;
    uid = uid ? (Array.isArray(uid) ? uid : [uid]) : null;
    populate_purchase_data = [true, 'true'].includes(populate_purchase_data);
    purchase_type = PURCHASE_ENUM.includes(purchase_type?.toString())
      ? purchase_type?.toString()
      : null;
    user_uid = user_uid?.toString() || null;

    return {
      uid,
      active,
      purchase_uid,
      populate_purchase_data,
      purchase_type,
      user_uid,
    };
  }
}
