import { Page, FrameLocator, Locator, expect } from '@playwright/test';

export class addToCart {
  readonly page: Page;
  /*readonly userInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;*/
 
  constructor(page: Page) {
  this.page = page;
 
  }


  async addToCart(){
    await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }



  }