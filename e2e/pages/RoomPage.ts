import { Page } from "@playwright/test";

export class RoomPage {
  constructor(private page: Page) {}

  async selectRoom(roomName: string) {
    let bookNowButton = this.page.locator(`//h5[contains(text(), "${roomName}")]/../../div//a[contains(text(), "Book now")]`);
    await bookNowButton.click();
    }
}