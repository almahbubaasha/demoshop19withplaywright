import { test, expect } from '@playwright/test';
import { Register } from "../pages/Register.js";

test('Demo web shop url page should open successfully', async ({page}) => {
    const pages = new Register(page);
    await pages.pageOpen('https://demowebshop.tricentis.com/');
    await pages.clickRegisterLink();
    await pages.genderSelection();
    await pages.firstName('Almahbuba');
    await pages.lastName('Asha');
    await pages.email('asha@gmail.com');
    await pages.registationPassword('asha123');
    await pages.confirmPassword('asha123');
    await pages.registerButton();


    await page.waitForTimeout(5000);



})

