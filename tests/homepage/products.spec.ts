// spec: specs/easygo-homepage-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';
import { EasygoHomepage } from '../pages/EasygoHomepage.po';

test.describe('Products Section', () => {
  let homepage: EasygoHomepage;

  test.beforeEach(async ({ page }) => {
    homepage = new EasygoHomepage(page);
    await homepage.goto();
  });

  test('Verify Our Products section header', async ({ page }) => {
    // 1. Navigate to https://easygo.io/ and scroll to Products section
    await homepage.scrollToProductsSection();
    await homepage.verifyProductsHeaderVisible();
    await homepage.verifyAllProductCardsAreVisible();
  });

  test('Verify Stake product card', async () => {
    // 1. Navigate to https://easygo.io/ and scroll to Products section
    await homepage.scrollToProductsSection();
    await homepage.verifyStakeProductCardContent();
  });

  test('Verify Stake product Learn more link', async ({ page }) => {
    // 1. Navigate to https://easygo.io/ and locate the Stake product card
    await homepage.scrollToProductsSection();
    await homepage.verifyStakeLinkMoreVisible();
    
    // 2. Click the Learn more link
    await homepage.clickStakeLinkMore();
    
    // Verify page URL changed to /products/stake
    expect(page.url()).toContain('/products/stake');
  });

  test('Verify Stake Engine product card', async () => {
    // 1. Navigate to https://easygo.io/ and scroll to Products section
    await homepage.scrollToProductsSection();
    await homepage.verifyStakeEngineProductCardContent();
  });

  test('Verify Stake Engine Learn more link', async ({ page }) => {
    // 1. Navigate to https://easygo.io/ and locate the Stake Engine product card
    await homepage.scrollToProductsSection();
    await homepage.verifyStakeEngineLinkMoreVisible();
    
    // 2. Click the Learn more link
    await homepage.clickStakeEngineLinkMore();
    
    // Verify page URL changed to /products/stake-engine
    expect(page.url()).toContain('/products/stake-engine');
  });

  test('Verify KICK product card', async () => {
    // 1. Navigate to https://easygo.io/ and scroll to Products section
    await homepage.scrollToProductsSection();
    await homepage.verifyKICKProductCardContent();
  });

  test('Verify KICK Learn more link', async ({ page }) => {
    // 1. Navigate to https://easygo.io/ and locate the KICK product card
    await homepage.scrollToProductsSection();
    await homepage.verifyKICKLinkMoreVisible();
    
    // 2. Click the Learn more link
    await homepage.clickKICKLinkMore();
    
    // Verify page URL changed to /products/kick
    expect(page.url()).toContain('/products/kick');
  });

  test('Verify Easygo Games product card', async () => {
    // 1. Navigate to https://easygo.io/ and scroll to Products section
    await homepage.scrollToProductsSection();
    await homepage.verifyEasygoGamesProductCardContent();
  });

  test('Verify Easygo Games Learn more link', async ({ page }) => {
    // 1. Navigate to https://easygo.io/ and locate the Easygo Games product card
    await homepage.scrollToProductsSection();
    await homepage.verifyEasygoGamesLinkMoreVisible();
    
    // 2. Click the Learn more link
    await homepage.clickEasygoGamesLinkMore();
    
    // Verify page URL changed to /products/easygo-games
    expect(page.url()).toContain('/products/easygo-games');
  });
});