// Page Object Model for Easygo Homepage - Products Section
import fs from 'fs';
import path from 'path';
import { Page, Locator, expect } from '@playwright/test';

export class EasygoHomepage {
  readonly page: Page;
  
  // Product section locators
  readonly productsHeader: Locator;
  readonly screenshotDir: string;

  constructor(page: Page) {
    this.page = page;
    
    // Products section header
    this.productsHeader = page.getByText('Our Products', { exact: true });
    this.screenshotDir = path.join(process.cwd(), 'test-results', 'screenshots');
    fs.mkdirSync(this.screenshotDir, { recursive: true });
  }

  // Navigation methods
  async goto() {
    await this.page.goto('https://easygo.io/', { waitUntil: 'load' });
    await this.productsHeader.waitFor({ state: 'visible', timeout: 30000 });
    await this.page.locator('article').first().waitFor({ state: 'visible', timeout: 30000 });
  }

  async scrollToProductsSection() {
    const firstArticle = this.page.locator('article').first();
    await firstArticle.waitFor({ state: 'attached', timeout: 30000 });
    await firstArticle.waitFor({ state: 'visible', timeout: 30000 });
    await firstArticle.evaluate((article) => {
      article.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'auto' });
    });
    await expect(firstArticle).toBeVisible({ timeout: 20000 });
  }

  async takeScreenshot(step: string) {
    const screenshotPath = path.join(this.screenshotDir, `${step}-${Date.now()}.png`);
    await this.page.screenshot({ path: screenshotPath, fullPage: true });
  }

  async productCard(name: string) {
    const heading = this.page.getByRole('heading', { name, exact: true, level: 2 }).first();
    await heading.waitFor({ state: 'visible', timeout: 20000 });
    return heading.locator('xpath=ancestor::article').first();
  }

  // Verification methods for product section header
  async verifyProductsHeaderVisible() {
    await expect(this.productsHeader).toBeVisible();
    await this.takeScreenshot('verifyProductsHeaderVisible');
  }

  async verifyAllProductCardsAreVisible() {
    await expect(this.page.getByRole('heading', { name: 'Stake', exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Stake Engine' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'KICK' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Easygo Games' })).toBeVisible();
    await this.takeScreenshot('verifyAllProductCardsAreVisible');
  }

  // Stake product verification methods
  async verifyStakeProductCardContent() {
    const stakeCard = await this.productCard('Stake');
    await expect(stakeCard.getByRole('heading', { name: 'Stake', exact: true })).toBeVisible();
    await expect(stakeCard.getByText('Online Casino', { exact: true })).toBeVisible();
    await expect(stakeCard.getByText('$30B', { exact: true })).toBeVisible();
    await expect(stakeCard.getByText('75+', { exact: true })).toBeVisible();
    await expect(stakeCard.getByText('60M+', { exact: true })).toBeVisible();
    await expect(stakeCard.locator('img[alt="Stake logo"]')).toBeVisible();
    await this.takeScreenshot('verifyStakeProductCardContent');
  }

  async verifyStakeLinkMoreVisible() {
    const stakeCard = await this.productCard('Stake');
    await expect(stakeCard.getByRole('link', { name: 'Learn more' })).toBeVisible();
    await this.takeScreenshot('verifyStakeLinkMoreVisible');
  }

  async clickStakeLinkMore() {
    const stakeCard = await this.productCard('Stake');
    await stakeCard.getByRole('link', { name: 'Learn more' }).click();
    await this.page.waitForURL('**/products/stake');
  }

  // Stake Engine product verification methods
  async verifyStakeEngineProductCardContent() {
    const stakeEngineCard = await this.productCard('Stake Engine');
    await expect(stakeEngineCard.getByRole('heading', { name: 'Stake Engine' })).toBeVisible();
    await expect(stakeEngineCard.getByText('395')).toBeVisible();
    await expect(stakeEngineCard.getByText('1400+')).toBeVisible();
    await expect(stakeEngineCard.getByText('17M')).toBeVisible();
    await this.takeScreenshot('verifyStakeEngineProductCardContent');
  }

  async verifyStakeEngineLinkMoreVisible() {
    const stakeEngineCard = await this.productCard('Stake Engine');
    await expect(stakeEngineCard.getByRole('link', { name: 'Learn more' })).toBeVisible();
    await this.takeScreenshot('verifyStakeEngineLinkMoreVisible');
  }

  async clickStakeEngineLinkMore() {
    const stakeEngineCard = await this.productCard('Stake Engine');
    await stakeEngineCard.getByRole('link', { name: 'Learn more' }).click();
    await this.page.waitForURL('**/products/stake-engine');
  }

  // KICK product verification methods
  async verifyKICKProductCardContent() {
    const kickCard = await this.productCard('KICK');
    await expect(kickCard.getByRole('heading', { name: 'KICK' })).toBeVisible();
    await expect(kickCard.getByText('Live streaming')).toBeVisible();
    await expect(kickCard.getByText('500M+')).toBeVisible();
    await expect(kickCard.getByText('46M+')).toBeVisible();
    await expect(kickCard.getByText('4.6M+')).toBeVisible();
    await this.takeScreenshot('verifyKICKProductCardContent');
  }

  async verifyKICKLinkMoreVisible() {
    const kickCard = await this.productCard('KICK');
    await expect(kickCard.getByRole('link', { name: 'Learn more' })).toBeVisible();
    await this.takeScreenshot('verifyKICKLinkMoreVisible');
  }

  async clickKICKLinkMore() {
    const kickCard = await this.productCard('KICK');
    await kickCard.getByRole('link', { name: 'Learn more' }).click();
    await this.page.waitForURL('**/products/kick');
  }

  // Easygo Games product verification methods
  async verifyEasygoGamesProductCardContent() {
    const easygoGamesCard = await this.productCard('Easygo Games');
    await expect(easygoGamesCard.getByRole('heading', { name: 'Easygo Games' })).toBeVisible();
    await expect(easygoGamesCard.getByText('Game Studio')).toBeVisible();
    await expect(easygoGamesCard.getByText('Elite')).toBeVisible();
    await expect(easygoGamesCard.getByText('Product Teams')).toBeVisible();
    await expect(easygoGamesCard.getByText('Fast')).toBeVisible();
    await expect(easygoGamesCard.getByText('Iteration Cycles')).toBeVisible();
    await expect(easygoGamesCard.getByText('Strong')).toBeVisible();
    await expect(easygoGamesCard.getByText('Ownership')).toBeVisible();
    await this.takeScreenshot('verifyEasygoGamesProductCardContent');
  }

  async verifyEasygoGamesLinkMoreVisible() {
    const easygoGamesCard = await this.productCard('Easygo Games');
    await expect(easygoGamesCard.getByRole('link', { name: 'Learn more' })).toBeVisible();
    await this.takeScreenshot('verifyEasygoGamesLinkMoreVisible');
  }

  async clickEasygoGamesLinkMore() {
    const easygoGamesCard = await this.productCard('Easygo Games');
    await easygoGamesCard.getByRole('link', { name: 'Learn more' }).click();
    await this.page.waitForURL('**/products/easygo-games');
  }
}