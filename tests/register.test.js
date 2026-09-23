import { test, expect } from '@playwright/test';
import { Register } from "../pages/Register.js";

test('Demo web shop url page should open successfully', async ({page}) => {
    const pages = new Register(page);
    await pages.pageOpen();
    await pages.clickRegisterLink();
    await pages.genderSelection();
    await pages.firstName('Almahbuba');
    await pages.lastName('Asha');
    await pages.email('ashatest1@gmail.com');
    await pages.registationPassword('asha@123');
    await pages.confirmPassword('asha@123');
    await pages.registerButton();


    await page.waitForTimeout(5000);
    // await page.pause();



})

