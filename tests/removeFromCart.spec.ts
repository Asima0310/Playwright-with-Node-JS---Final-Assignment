import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';
import   { addToCart }  from '../pages/addToCart'; 
import { removeFromCart } from '../pages/removeFromCart';


test('test', async ({ page }) => {
const loginPage = new LoginPage(page);
const AddToCart = new addToCart(page);
const RemoveFromCart = new removeFromCart(page);

await loginPage.goto();
await loginPage.login('standard_user', 'secret_sauce');
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await AddToCart.addToCart();
await RemoveFromCart.removeFromCart();
}
)