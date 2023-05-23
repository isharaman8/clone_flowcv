export interface Query {
  name?: string | string[];
  email?: string | string[];
  uid?: string | string[];
  active?: boolean;
  minPrice?: number | null;
  maxPrice?: number | null;
}
