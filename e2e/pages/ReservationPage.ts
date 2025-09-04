import { expect, Page } from "@playwright/test";
import { start } from "repl";

export class ReservationPage {
    constructor(private page: Page) { }

    async selectDates() {
        await this.page.locator('[title="Selected"]').click();
    }

    async getSummaryValue() {
        const summary = this.page.locator('//span[contains(text(),"Total")]/following-sibling::span').innerText();
        return summary
    }

    async clickReserveNow() {
        await this.page.locator('//button[text()="Reserve Now"]').click();
    }
}