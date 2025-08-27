import { type Page } from "@playwright/test";
import { Username, Password } from "./test-data/enums";

export async function navigateToSwagLabs(page) {
  // Navigates to the SwagLabs website and dynamically waits for the network to idle
  await page.goto("https://www.saucedemo.com/");
  await page.waitForLoadState("networkidle");
}

export async function login(
  page: Page,
  username: Username,
  password: Password
) {
  // Logs in to the website with the passed credentials
  const usernameInput = page.locator("#user-name");
  const passwordInput = page.locator("#password");
  const loginButton = page.locator("#login-button");

  await usernameInput.fill(username);
  await passwordInput.fill(password);
  await loginButton.click();

  await page.waitForLoadState("networkidle");
}
