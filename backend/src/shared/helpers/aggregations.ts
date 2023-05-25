// INNER IMPORTS
import { Query } from '../interfaces/query.interfaces';

export const _getIdAggregationFilter = (query: Query = {}) => {
  const filter = [];

  if (query.uid) {
    const uids = Array.isArray(query.uid) ? query.uid : [query.uid];

    filter.push({ uid: { $in: uids } });
  }

  return filter;
};

export const _getNameAggregationFilter = (query: Query = {}) => {
  const filter = [];

  if (query.name) {
    const names = Array.isArray(query.name) ? query.uid : [query.name];

    filter.push({ name: { $in: names } });
  }

  return filter;
};

export const _getEmailAggregationFilter = (query: Query = {}) => {
  const filter = [];

  if (query.email) {
    const email = Array.isArray(query.email) ? query.uid : [query.email];

    filter.push({ email: { $in: email } });
  }

  return filter;
};

export const _getActiveAggregationFilter = (query: Query = {}) => {
  const filter = [];

  if (typeof query.active === 'boolean') {
    filter.push({ active: { $in: [query.active] } });
  }

  return filter;
};

// Subscription
export const _getPriceAggregationFilter = (query: Query) => {
  const filter = [];

  if (query.minPrice) {
    filter.push({ price: { $gte: query.minPrice } });
  }

  if (query.maxPrice) {
    filter.push({ price: { $lte: query.maxPrice } });
  }

  return filter;
};

// PURCHASE
export const _getUserIdAggregationFilter = (query: Query) => {
  const filter = [];

  if (query.user_id) {
    const user_id = Array.isArray(query.user_id)
      ? query.user_id
      : [query.user_id];

    filter.push({ user_id: { $in: user_id } });
  }

  return filter;
};

export const _getPurchaseDataAggregationFilter = (query: Query) => {
  const filter = [];

  if (query.populate_purchase_data && query.purchase_type) {
    if (query.purchase_type === 'subscription') {
      filter.push({
        $lookup: {
          from: 'subscriptions',
          localField: 'purchase_uid',
          foreignField: 'uid',
          as: 'purchaseData',
        },
      });
    }
  }

  return filter;
};
