import { LoginTestDataSet } from "../1.test-utilities/test-data/models";
import { Username, Password } from "../1.test-utilities/test-data/enums";

export const loginTestDataSet: LoginTestDataSet[] = [
  {
    testName: `${Username.Standard} login page checks`,
    username: Username.Standard,
    password: Password.Password,
  },
];
