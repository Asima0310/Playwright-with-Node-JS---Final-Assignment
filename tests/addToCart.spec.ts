import { test, expect } from '@playwright/test';
import   { addToCart }  from '../pages/addToCart'; 
import { LoginPage } from '../pages/login';


test('test', async ({ page }) => {
const loginPage = new LoginPage(page);
const AddToCart = new addToCart(page);


await loginPage.goto();
await loginPage.login('standard_user', 'secret_sauce');
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await AddToCart.addToCart();
}
);
