import { Page, FrameLocator, Locator, expect } from '@playwright/test';

export class removeFromCart {
  readonly page: Page;
  /*readonly userInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;*/
 
  constructor(page: Page) {
  this.page = page;
 
  }


  async removeFromCart(){
   await this.page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  }
}