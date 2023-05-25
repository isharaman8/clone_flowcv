export interface UserSubscription {
  uid: string;
  price: number;
  valid_till: Date;
  purchased_at: Date;
  plan_duration: Date;
}
