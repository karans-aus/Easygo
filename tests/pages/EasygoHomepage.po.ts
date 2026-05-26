// Page Object Model for Easygo Homepage - Products Section
import { Page, Locator, expect } from '@playwright/test';

export class EasygoHomepage {
  readonly page: Page;
  
  // Product section locators
  readonly productsHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    
    // Products section header
    this.productsHeader = page.getByText('Our Products', { exact: true });
  }

  // Navigation methods
  async goto() {
    await this.page.goto('https://easygo.io/', { waitUntil: 'load' });
    await this.page.waitForSelector('article', { state: 'visible', timeout: 20000 });
  }

  async scrollToProductsSection() {
    await this.page.waitForSelector('article', { state: 'visible', timeout: 20000 });
    await this.page.evaluate(() => {
      const firstArticle = document.querySelector('article');
      if (!firstArticle) throw new Error('Could not find the first product card article.');
      firstArticle.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'auto' });
    });
    await expect(this.page.getByRole('article').first()).toBeVisible({ timeout: 20000 });
  }

  productCard(name: string) {
    return this.page.getByRole('article').filter({ has: this.page.getByRole('heading', { name, exact: true, level: 2 }) });
  }

  // Verification methods for product section header
  async verifyProductsHeaderVisible() {
    await expect(this.productsHeader).toBeVisible();
  }

  async verifyAllProductCardsAreVisible() {
    await expect(this.page.getByRole('heading', { name: 'Stake', exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Stake Engine' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'KICK' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Easygo Games' })).toBeVisible();
  }

  // Stake product verification methods
  async verifyStakeProductCardContent() {
    const stakeCard = this.productCard('Stake');
    await expect(stakeCard.getByRole('heading', { name: 'Stake', exact: true })).toBeVisible();
    await expect(stakeCard.getByText('Online Casino', { exact: true })).toBeVisible();
    await expect(stakeCard.getByText('$30B', { exact: true })).toBeVisible();
    await expect(stakeCard.getByText('75+', { exact: true })).toBeVisible();
    await expect(stakeCard.getByText('60M+', { exact: true })).toBeVisible();
    await expect(stakeCard.locator('img[alt="Stake logo"]')).toBeVisible();
  }

  async verifyStakeLinkMoreVisible() {
    const stakeCard = this.productCard('Stake');
    await expect(stakeCard.getByRole('link', { name: 'Learn more' })).toBeVisible();
  }

  async clickStakeLinkMore() {
    const stakeCard = this.productCard('Stake');
    await stakeCard.getByRole('link', { name: 'Learn more' }).click();
    await this.page.waitForURL('**/products/stake');
  }

  // Stake Engine product verification methods
  async verifyStakeEngineProductCardContent() {
    const stakeEngineCard = this.productCard('Stake Engine');
    await expect(stakeEngineCard.getByRole('heading', { name: 'Stake Engine' })).toBeVisible();
    await expect(stakeEngineCard.getByText('395')).toBeVisible();
    await expect(stakeEngineCard.getByText('1400+')).toBeVisible();
    await expect(stakeEngineCard.getByText('17M')).toBeVisible();
  }

  async verifyStakeEngineLinkMoreVisible() {
    const stakeEngineCard = this.productCard('Stake Engine');
    await expect(stakeEngineCard.getByRole('link', { name: 'Learn more' })).toBeVisible();
  }

  async clickStakeEngineLinkMore() {
    const stakeEngineCard = this.productCard('Stake Engine');
    await stakeEngineCard.getByRole('link', { name: 'Learn more' }).click();
    await this.page.waitForURL('**/products/stake-engine');
  }

  // KICK product verification methods
  async verifyKICKProductCardContent() {
    const kickCard = this.productCard('KICK');
    await expect(kickCard.getByRole('heading', { name: 'KICK' })).toBeVisible();
    await expect(kickCard.getByText('Live streaming')).toBeVisible();
    await expect(kickCard.getByText('500M+')).toBeVisible();
    await expect(kickCard.getByText('46M+')).toBeVisible();
    await expect(kickCard.getByText('4.6M+')).toBeVisible();
  }

  async verifyKICKLinkMoreVisible() {
    const kickCard = this.productCard('KICK');
    await expect(kickCard.getByRole('link', { name: 'Learn more' })).toBeVisible();
  }

  async clickKICKLinkMore() {
    const kickCard = this.productCard('KICK');
    await kickCard.getByRole('link', { name: 'Learn more' }).click();
    await this.page.waitForURL('**/products/kick');
  }

  // Easygo Games product verification methods
  async verifyEasygoGamesProductCardContent() {
    const easygoGamesCard = this.productCard('Easygo Games');
    await expect(easygoGamesCard.getByRole('heading', { name: 'Easygo Games' })).toBeVisible();
    await expect(easygoGamesCard.getByText('Game Studio')).toBeVisible();
    await expect(easygoGamesCard.getByText('Elite')).toBeVisible();
    await expect(easygoGamesCard.getByText('Product Teams')).toBeVisible();
    await expect(easygoGamesCard.getByText('Fast')).toBeVisible();
    await expect(easygoGamesCard.getByText('Iteration Cycles')).toBeVisible();
    await expect(easygoGamesCard.getByText('Strong')).toBeVisible();
    await expect(easygoGamesCard.getByText('Ownership')).toBeVisible();
  }

  async verifyEasygoGamesLinkMoreVisible() {
    const easygoGamesCard = this.productCard('Easygo Games');
    await expect(easygoGamesCard.getByRole('link', { name: 'Learn more' })).toBeVisible();
  }

  async clickEasygoGamesLinkMore() {
    const easygoGamesCard = this.productCard('Easygo Games');
    await easygoGamesCard.getByRole('link', { name: 'Learn more' }).click();
    await this.page.waitForURL('**/products/easygo-games');
  }
}