import { Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  async goToURL() {
    await this.page.goto('https://automationintesting.online/');
  }

  async clickHomePageBookNowButton() {
    await this.page.locator('//a[contains(text(), "Book Now")]').first().click();
  }
}