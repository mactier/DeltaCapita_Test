import { expect, Page } from "@playwright/test";

export class ConfirmationPage {
  constructor(private page: Page) {}

  async fillBookingForm(details: { firstname: string; lastname: string; email: string; phone: string }) {
    await this.page.fill('[placeholder="Firstname"]', details.firstname);
    await this.page.fill('[placeholder="Lastname"]', details.lastname);
    await this.page.fill('[placeholder="Email"]', details.email);
    await this.page.fill('[placeholder="Phone"]', details.phone);
  }

  async getBookingDates() {
    return await this.page.locator('.booking-dates').innerText();
  }
}