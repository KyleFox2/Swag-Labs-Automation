import { Username, Password } from "./enums";

export interface LoginTestDataSet {
  testName: string;
  username: Username;
  password: Password;
}

export interface CheckoutTestDataSet {
  testName: string;
}
