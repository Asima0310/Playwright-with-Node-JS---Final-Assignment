import { Page, FrameLocator, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly userInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
 
  constructor(page: Page) {
   this.page = page;
   this.userInput = this.page.locator('[data-test="username"]');
   this.passwordInput = this.page.locator('[data-test="password"]');
   this.loginButton = this.page.locator('[data-test="login-button"]');

  }

  async goto(){
     await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string){
    await this.userInput.click();
    await this.userInput.fill(username);
    await this.passwordInput.click();
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}