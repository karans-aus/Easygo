**EasyGo Playwright Demo: Multi-Agent Automation Framework**
This repository demonstrates an advanced, next-generation approach to end-to-end testing using a Multi-Agent AI workflow to build, scope, and self-heal Playwright tests for the EasyGo platform.

Instead of relying entirely on manual scripting, this framework orchestrates three specialized AI agents to manage the entire testing lifecycle: from discovery and scoping to automated runtime healing.

**🏗️ Architecture & Agent Workflow**
The core framework architecture leverages modular agents working in sequence to drastically lower test maintenance overhead and accelerate test creation.

[EasyGo App] ──> (1. Planner Agent) ──> Formulates Comprehensive Test Plan (Created a easygo-homepage-test-plan.md file)
                        │
                        ▼
                 (2. Generator Agent) ──> Generates Playwright Code (Limited scope to Product Section in the md file)
                        │
                        ▼
                 (3. Healer Agent)    ──> Watches Execution ──> Fixes Flaky Locators/Stale States

**The Three-Agent Lifecycle**
Planner Agent (The Strategist)
Responsibility: Crawls and analyzes the EasyGo homepage.
Output: Generates a comprehensive, structured test strategy and maps user journeys. It identifies critical user flows, edge cases, and high-value integration boundaries.

Generator Agent (The Coder)
Responsibility: Translates the test plan into production-grade TypeScript Playwright code.
Scoped Context: To keep executions concise and demonstrate targeted generation, its scope is strictly constrained to the Product Section of the application. It applies best practices like the Page Object Model (POM) and strict locator strategies.

Healer Agent (The Guardian)
Responsibility: Monitors test execution at runtime inside the CI pipeline or local environments.
Output: If a test fails due to dynamic DOM mutations, timing adjustments, or stale/detached locator exceptions, the Healer Agent intercepts the stack trace, analyzes the page DOM snapshot, iterates on fixes, and patches the test autonomously.

**🛠️ Tech Stack & Prerequisites**
Language: TypeScript
Testing Framework: Playwright (v1.60+)
Engine: Node.js (LTS)
CI/CD: GitHub Actions
**
Continuous Integration (GitHub Actions)**
This project includes a robust pipeline configured in .github/workflows/playwright.yml.
Automatic Diagnostics: On every push to the main branch, the pipeline spins up an isolated Ubuntu container running Microsoft's official Playwright runtime.
Artifact Preservation: Whether tests pass or fail, the full HTML test suite diagnostics and reports are compressed and made available for review.
