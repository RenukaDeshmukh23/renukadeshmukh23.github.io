---
title: "Restaurant Status Monitoring Automation"
summary: "An independent Python prototype that checks restaurant opening status and sends Telegram alerts, with a Streamlit interface and searchable logs."
category: "Scraping & Automation"
tags: [Python, Playwright, Streamlit, Telegram, Scheduling, AI-Assisted Development]
order: 4
type: "Independent project"
status: "Prototype"
visual: "monitor"
---

## Project purpose

Repeated website checks can become a repetitive manual task. I explored how browser automation, scheduled checks and notifications could bring those steps into one workflow through an independent restaurant-status monitoring prototype.

## My contribution

I designed prompts to guide development, used AI assistance to accelerate the work and manually reviewed the code. The project covered browser automation, scheduled checks, Telegram notifications and an application interface.

## Monitoring workflow

A Playwright script extracts restaurant names and page links into JSON. The Streamlit setup interface lets the user select a restaurant, configure the checking interval, save settings and start or stop monitoring.

The Python monitor opens the selected page in Chromium and reads its Open or Closed status. Checks run at the configured interval, with retries and logs to support troubleshooting. Telegram integration sends status notifications, while notification-state tracking helps suppress repeated positive alerts within a run.

## Interface and logs

The prototype includes setup, dashboard and log pages. The dashboard presents status history and a chart; the logs interface supports search and filtering.

## What I built

- Scheduled Python browser monitoring with Telegram integration.
- A Streamlit setup interface with saved settings and start/stop controls.
- A monitoring dashboard and searchable logs.
- Restaurant-list extraction and page-inspection scripts with JSON output.
