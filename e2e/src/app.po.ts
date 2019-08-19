/*
 * Use the Page Object pattern to define the page under test.
 * See docs/coding-guide/e2e-tests.md for more info.
 */

import { browser, element, by } from 'protractor';

export class AppPage {
  constructor() {
    // Forces default language
    this.navigateTo();
    if (localStorage) {
      browser.executeScript(() => localStorage.setItem('language', 'en-AU'));
    }
  }

  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root mat-card-title')).getText();
  }
}
