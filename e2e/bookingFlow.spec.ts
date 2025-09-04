import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePAge';
import { RoomPage } from './pages/RoomPage';
import { ReservationPage } from './pages/ReservationPage';
import { ConfirmationPage } from './pages/ConfirmationPage';

test.describe('Room Booking Flow', () => {
  test('should complete booking successfully', async ({ page }) => {
    const home = new HomePage(page);
    const room = new RoomPage(page);
    const reservation = new ReservationPage(page);
    const confirmation = new ConfirmationPage(page);
    const roomName = 'Suite';
    const pricePerNight = 225;
    const fees = 40;
    const days = 1;

    await home.goToURL();
    await home.clickHomePageBookNowButton();
    await room.selectRoom(roomName);

    await expect(page).toHaveURL(/\/reservation/);
    await expect(page.locator('h1')).toContainText(roomName);
    await expect(page.locator('.rbc-calendar')).toBeVisible();

    await reservation.selectDates();
    let actualValue = await reservation.getSummaryValue();
    let expectedValue = days * pricePerNight + fees;
    expect(actualValue).toContain(expectedValue.toString());

    await reservation.clickReserveNow();
    await confirmation.fillBookingForm({
      firstname: 'John',
      lastname: 'Smyth',
      email: 'john@example.com',
      phone: '1234567890',
    });
    await reservation.clickReserveNow();

    // unable to complete this rest of the booking due to an error that shows up. 
    // size must be between 11 and 21
    // it is unknown what this error refers to and i have been unable to resolve it without knowing more about the under pinned code.
  });
});