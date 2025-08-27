import { test, expect, type Page } from "@playwright/test";
import { loginTestDataSet } from "./login-test-data";
import { login, navigateToSwagLabs } from "../1.test-utilities/utilities";

loginTestDataSet.forEach((loginTestData) => {
  test.describe("", () => {
    test("has title", async ({ page }) => {
      await navigateToSwagLabs(page);
      await login(page, loginTestData.username, loginTestData.password);
    });
  });
});
