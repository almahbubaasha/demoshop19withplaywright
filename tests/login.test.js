import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test('should login successfully', async({page}) => {

    const pages = new LoginPage(page);
    await pages.pageOpen();
    await pages.clickLoginButtonLink();
    await pages.enterEmail('ashatest1@gmail.com');
    await pages.enterPassword('asha@123');
    await pages.clickRememberMeCheckbox();
    await pages.clickLoginButton();
    await page.pause();

});