export interface Query {
  name?: string | string[];
  email?: string | string[];
  uid?: string | string[];
  active?: boolean;
  minPrice?: number | null;
  maxPrice?: number | null;
  user_uid?: string | string[];
  populate_purchase_data?: boolean;
  purchase_uid?: string | null;
  purchase_type?: string | null;
  count?: boolean | null;
}
