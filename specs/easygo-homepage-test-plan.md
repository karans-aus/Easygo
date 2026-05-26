# Easygo Homepage Test Plan

## Application Overview

The Easygo homepage (https://easygo.io/) is the main landing page showcasing the Easygo ecosystem, featuring the company's products (Stake, Stake Engine, KICK, and Easygo Games), partnerships, company values, and career opportunities. The homepage includes navigation menus, video players, product showcases, partnership carousels, cookie consent management, and search functionality. Testing focuses on UI functionality, accessibility, navigation flow, form interactions, and error handling.

## Test Scenarios

### 1. Header Navigation

**Seed:** `tests/seed.spec.ts`

#### 1.1. Verify homepage loads with correct title

**File:** `tests/homepage/header-navigation.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/
    - expect: Page title displays 'Easygo - Join the Team That Builds Without Fear | Easygo'
    - expect: Easygo logo is visible in the header
    - expect: Page loading status completes

#### 1.2. Verify Easygo logo links to homepage

**File:** `tests/homepage/header-navigation.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/
    - expect: Easygo logo is displayed in the navigation bar
  2. Click on the Easygo logo
    - expect: User remains on the homepage (URL is https://easygo.io/)
    - expect: No error messages appear

#### 1.3. Verify main navigation menu opens

**File:** `tests/homepage/header-navigation.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/
    - expect: Homepage loads successfully
  2. Click the 'Open menu' button in the header
    - expect: Navigation menu modal opens
    - expect: Menu contains navigation links: Company, Products, Life at Easygo, Careers
    - expect: Join us button is visible in the menu

#### 1.4. Verify search functionality opens

**File:** `tests/homepage/header-navigation.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/
    - expect: Homepage loads successfully
  2. Click the 'Open search' button in the header
    - expect: Search modal opens
    - expect: Search textbox with placeholder 'Search Easygo' is visible
    - expect: Close search button is displayed

#### 1.5. Verify saved jobs functionality

**File:** `tests/homepage/header-navigation.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/
    - expect: Homepage loads successfully
  2. Click the 'Open saved jobs' button (heart icon) in the header
    - expect: Saved Roles modal opens
    - expect: Heading 'Saved Roles' is displayed
    - expect: Text 'Your saved roles. Tap a role to open its details.' is visible
    - expect: Close button is available

#### 1.6. Verify Join us button navigates to careers

**File:** `tests/homepage/header-navigation.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/
    - expect: Homepage loads successfully
  2. Click the 'Join us' button in the header
    - expect: User is navigated to the careers page (/careers)
    - expect: Page loads without errors

### 2. Hero Section and Showreel

**Seed:** `tests/seed.spec.ts`

#### 2.1. Verify hero section content is displayed

**File:** `tests/homepage/hero-section.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/
    - expect: Easygo showreel video player is displayed
    - expect: Heading 'Fear Less Do More' is visible with animated text
    - expect: Tagline 'We're building the future of fearless tech, servicing 160M+ users across Stake, KICK, and Easygo Games' is displayed

#### 2.2. Verify Browse Roles link in hero section

**File:** `tests/homepage/hero-section.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/
    - expect: Browse Roles link is visible in the hero section
  2. Click on the 'Browse Roles' link
    - expect: User is navigated to /careers page
    - expect: Careers page loads successfully

#### 2.3. Verify Our Brands link in hero section

**File:** `tests/homepage/hero-section.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/
    - expect: Our Brands link is visible in the hero section
  2. Click on the 'Our Brands' link
    - expect: User is navigated to /company page
    - expect: Company page loads successfully

#### 2.4. Verify Play Showreel button

**File:** `tests/homepage/hero-section.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/
    - expect: Play Showreel button is visible below the hero content
  2. Click the 'Play Showreel' button
    - expect: Video player becomes active and begins playing
    - expect: Video content is displayed in the player region

### 3. Company Information Section

**Seed:** `tests/seed.spec.ts`

#### 3.1. Verify Who We Are section content

**File:** `tests/homepage/company-info.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and scroll to Who We Are section
    - expect: Section title 'Who we are' is displayed
    - expect: Heading is present: 'We connect cultures through bold digital experiences. To go from beta to better tech should be fearless, not formulaic.'
    - expect: Descriptive paragraphs about Easygo's mission are visible

#### 3.2. Verify company statistics display correctly

**File:** `tests/homepage/company-info.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and scroll to company stats section
    - expect: Company statistics are displayed with the following values:
    - expect: 5 Industries we operate in
    - expect: 800+ Employees in Melbourne office
    - expect: 400+ Coffee's served daily by in-house baristas
    - expect: 2x $50k cars won by crew at weekly Wheel Spin

### 4. Products Section

**Seed:** `tests/seed.spec.ts`

#### 4.1. Verify Our Products section header

**File:** `tests/homepage/products.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and scroll to Products section
    - expect: Section header 'Our Products' is displayed
    - expect: Four product cards are visible: Stake, Stake Engine, KICK, Easygo Games

#### 4.2. Verify Stake product card

**File:** `tests/homepage/products.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and scroll to Products section
    - expect: Stake product card displays: heading 'Stake', category 'Online Casino'
    - expect: Description text is visible
    - expect: Stake logo is displayed
    - expect: Product statistics show: $30B Monthly wagers, 75+ Currencies, 60M+ Registered customers

#### 4.3. Verify Stake product Learn more link

**File:** `tests/homepage/products.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and locate the Stake product card
    - expect: Learn more link is visible in the Stake card
  2. Click the Learn more link
    - expect: User is navigated to /products/stake
    - expect: Product page loads successfully

#### 4.4. Verify Stake Engine product card

**File:** `tests/homepage/products.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and scroll to Products section
    - expect: Stake Engine product card displays: heading 'Stake Engine', category 'Stake Engine'
    - expect: Description explains game creators launching directly on Stake
    - expect: Product statistics show: 395 Live publishers, 1400+ Live games, 17M Daily bets

#### 4.5. Verify Stake Engine Learn more link

**File:** `tests/homepage/products.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and locate the Stake Engine product card
    - expect: Learn more link is visible in the Stake Engine card
  2. Click the Learn more link
    - expect: User is navigated to /products/stake-engine
    - expect: Product page loads successfully

#### 4.6. Verify KICK product card

**File:** `tests/homepage/products.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and scroll to Products section
    - expect: KICK product card displays: heading 'KICK', category 'Live streaming'
    - expect: Description mentions 'Creator-first livestreaming From Every Angle'
    - expect: Product statistics show: 500M+ Monthly hours watched, 46M+ Daily Chats, 4.6M+ Peak live viewers

#### 4.7. Verify KICK Learn more link

**File:** `tests/homepage/products.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and locate the KICK product card
    - expect: Learn more link is visible in the KICK card
  2. Click the Learn more link
    - expect: User is navigated to /products/kick
    - expect: Product page loads successfully

#### 4.8. Verify Easygo Games product card

**File:** `tests/homepage/products.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and scroll to Products section
    - expect: Easygo Games product card displays: heading 'Easygo Games', category 'Game Studio'
    - expect: Description about multi-studio ecosystem is visible
    - expect: Product highlights show: Elite Product Teams, Fast Iteration Cycles, Strong Ownership

#### 4.9. Verify Easygo Games Learn more link

**File:** `tests/homepage/products.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and locate the Easygo Games product card
    - expect: Learn more link is visible in the Easygo Games card
  2. Click the Learn more link
    - expect: User is navigated to /products/easygo-games
    - expect: Product page loads successfully

### 5. Partnerships Section

**Seed:** `tests/seed.spec.ts`

#### 5.1. Verify Partnerships section header

**File:** `tests/homepage/partnerships.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and scroll to Partnerships section
    - expect: Section heading 'Strategic partnerships. World-class outcomes.' is displayed
    - expect: Description text is visible
    - expect: Partners carousel is displayed with multiple brand logos

#### 5.2. Verify partnership carousel navigation

**File:** `tests/homepage/partnerships.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and scroll to Partnerships section
    - expect: Previous partners button (left arrow) is visible
    - expect: Next partners button (right arrow) is visible

#### 5.3. Click next partners button

**File:** `tests/homepage/partnerships.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and scroll to Partnerships section
    - expect: Partners carousel is visible with initial set of logos
  2. Click the 'Next partners' button
    - expect: Carousel slides to show the next set of partner logos
    - expect: Navigation buttons remain functional

#### 5.4. Verify partner links open in new tabs

**File:** `tests/homepage/partnerships.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and scroll to Partnerships section
    - expect: Partner logos are displayed as links (Drake, UFC, Everton FC, Team Vitality, etc.)
  2. Right-click on a partner logo link
    - expect: Link target URL is correct (e.g., Drake: https://drakerelated.com, UFC: https://www.ufc.com/)

### 6. Company Values Section

**Seed:** `tests/seed.spec.ts`

#### 6.1. Verify Our Values section content

**File:** `tests/homepage/values-section.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and scroll to Our Values section
    - expect: Section heading 'Since 2016, we've focused on building experiences that are bold, fast and deeply engaging.' is displayed
    - expect: Descriptive paragraphs about company culture are visible

#### 6.2. Verify three core values are displayed

**File:** `tests/homepage/values-section.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and scroll to Our Values section
    - expect: Three core values are displayed as list items:
    - expect: 1. 'Get it Done' with icon and description
    - expect: 2. 'Do it well' with icon and description
    - expect: 3. 'Play fair' with icon and description

### 7. Footer Section

**Seed:** `tests/seed.spec.ts`

#### 7.1. Verify footer main CTA

**File:** `tests/homepage/footer.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and scroll to footer
    - expect: Footer heading 'Give us ambition. Get the Easygo edge.' is displayed
    - expect: Browse Roles link is visible in the footer

#### 7.2. Verify footer product links

**File:** `tests/homepage/footer.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and scroll to footer
    - expect: Products section in footer contains links:
    - expect: - Stake (/products/stake)
    - expect: - Stake Engine (/products/stake-engine)
    - expect: - KICK (/products/kick)
    - expect: - Easygo Games (/products/easygo-games)

#### 7.3. Verify social media links in footer

**File:** `tests/homepage/footer.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and scroll to footer
    - expect: Connect section displays social media links:
    - expect: - Instagram link (opens in new tab)
    - expect: - LinkedIn link (opens in new tab)

#### 7.4. Verify footer legal links

**File:** `tests/homepage/footer.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and scroll to footer
    - expect: Legal links section contains: Privacy Policy link
    - expect: Cookie Settings button
    - expect: Scroll to top button with chevron up icon

#### 7.5. Verify copyright and disclaimer text

**File:** `tests/homepage/footer.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and scroll to footer
    - expect: Copyright text is displayed: '© 2026 Easygo Group Holdings Pty Ltd'
    - expect: Full disclaimer text about gaming in Australia is present

### 8. Cookie Consent Management

**Seed:** `tests/seed.spec.ts`

#### 8.1. Verify cookie consent banner appears

**File:** `tests/homepage/cookie-consent.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ (fresh session)
    - expect: Cookie consent banner appears with message 'We use cookies!'
    - expect: Description text explains cookie usage: 'We use cookies to personalise your experience, analyse traffic, understand how features are used and assist with our marketing'
    - expect: Two buttons are displayed: 'Accept all' and 'Personalise'

#### 8.2. Accept all cookies

**File:** `tests/homepage/cookie-consent.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and see cookie banner
    - expect: Cookie consent banner is visible
  2. Click the 'Accept all' button
    - expect: Cookie banner disappears
    - expect: User can continue browsing the page
    - expect: Cookie preferences are saved

#### 8.3. Access cookie settings

**File:** `tests/homepage/cookie-consent.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ (fresh session) and see cookie banner
    - expect: Cookie consent banner is visible with 'Personalise' button
  2. Click the 'Personalise' button
    - expect: User is presented with cookie customization options
    - expect: Different cookie categories can be toggled

### 9. Search Functionality

**Seed:** `tests/seed.spec.ts`

#### 9.1. Verify search modal functionality

**File:** `tests/homepage/search.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and click the search button
    - expect: Search modal opens
    - expect: Modal displays heading 'Search'
    - expect: Description text: 'Search roles, articles, and pages across Easygo.'
    - expect: Search textbox with placeholder 'Search Easygo' is present

#### 9.2. Close search modal

**File:** `tests/homepage/search.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and click the search button
    - expect: Search modal opens
  2. Click the 'Close search' button (X icon)
    - expect: Search modal closes and user returns to homepage
    - expect: Homepage content is still visible

#### 9.3. Search for content

**File:** `tests/homepage/search.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and open search modal
    - expect: Search modal is open with search field active
  2. Type 'careers' in the search field
    - expect: Search results appear showing relevant pages and roles
    - expect: Results are related to careers or job listings

### 10. Navigation Menu Modal

**Seed:** `tests/seed.spec.ts`

#### 10.1. Verify navigation menu structure

**File:** `tests/homepage/nav-menu.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and click the menu button
    - expect: Navigation menu modal opens
    - expect: Modal heading 'Navigation menu' is displayed
    - expect: Description: 'Main navigation links for Easygo.'

#### 10.2. Verify Company link in menu

**File:** `tests/homepage/nav-menu.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and open the navigation menu
    - expect: Menu displays '01 Company' link
  2. Click on the Company link
    - expect: User is navigated to /company
    - expect: Company page loads successfully

#### 10.3. Verify Products accordion in menu

**File:** `tests/homepage/nav-menu.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and open the navigation menu
    - expect: Menu displays '02 Products' with accordion icon
  2. Click on the Products accordion
    - expect: Accordion expands showing product links
    - expect: Submenu items are revealed

#### 10.4. Verify Life at Easygo accordion in menu

**File:** `tests/homepage/nav-menu.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and open the navigation menu
    - expect: Menu displays '03 Life at Easygo' with accordion icon
  2. Click on the Life at Easygo accordion
    - expect: Accordion expands to show submenu items

#### 10.5. Verify Careers accordion in menu

**File:** `tests/homepage/nav-menu.spec.ts`

**Steps:**
  1. Navigate to https://easygo.io/ and open the navigation menu
    - expect: Menu displays '04 Careers' with accordion icon
  2. Click on the Careers accordion
    - expect: Accordion expands to show career-related options
