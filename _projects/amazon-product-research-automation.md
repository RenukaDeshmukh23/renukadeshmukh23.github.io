---
title: "Amazon Product Research Automation"
summary: "Independent Python prototype for collecting Amazon.in product listings and exporting structured research data, with an AI scoring stage in development."
category: "Scraping & Automation"
tags:
  - "Python"
  - "Web Scraping"
  - "Playwright"
  - "pandas"
  - "Data Extraction"
  - "Prompt Design"
  - "API Integration"
order: 6
type: "Independent project"
status: "Prototype"
---

## Project purpose

I developed this independent practice prototype to explore a repeatable product-research workflow: search Amazon.in by keyword, collect listing information and export the data for review. The project combines browser automation with a separate AI scoring stage that is still in development.

## My contribution

I designed systematic prompts to generate code with AI assistance and manually reviewed the generated code. My work focused on defining the workflow, specifying the required product fields and reviewing the scraping and scoring logic.

## Approach

1. **Search by keyword.** A Python script uses Playwright to open Amazon.in search results and navigate a configurable number of pages.
2. **Extract listing data.** The scraper collects product titles, listed prices in INR, ratings, ASINs, product links and sponsored status. It also attempts to capture review counts where available.
3. **Export structured records.** pandas organizes the collected data into timestamped CSV files for spreadsheet review or further processing. Saved examples contain 66 chopper listings and 180 pencil listings.
4. **Prepare AI-assisted evaluation.** A separate script loads a CSV, converts numeric fields and passes product details and configurable research criteria to the Anthropic Claude API. The scoring stage is implemented as a prototype; successful AI ranking remains pending.

## What I built

- Keyword-based browser automation with configurable page limits and delays.
- Product-data extraction and timestamped CSV exports.
- Separate scraping and scoring modules.
- A scoring prompt designed to return a score, verdict and short explanation in JSON.
- Configurable evaluation criteria for rating, review count, price and sponsored status.
- Error handling for page failures and API responses.

The demonstrated deliverable is the product-data collection workflow and its CSV exports. The AI scoring module extends the prototype toward criteria-based product review.

## Technologies and skills

**Python, Playwright, pandas, python-dotenv and Anthropic API integration.**

This project demonstrates browser automation, structured data extraction, CSV processing, systematic prompt design and manual review of AI-generated code.
