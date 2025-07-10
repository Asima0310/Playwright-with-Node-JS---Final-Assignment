import { test, expect } from '@playwright/test';
import   { LoginPage }  from '../pages/login'; 


test('test', async ({ page }) => {

 /* await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();*/


const loginPage = new LoginPage(page);
await loginPage.goto();
await loginPage.login('standard_user', 'secret_sauce');
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

}
);