# Gmail.js Documentation

This Gmail.js integration automates mailbox cleanup tasks:
- Marks messages older than 30 days as read
- Deletes messages 7 days old with the subject "Gmail Cleanup Summary"

## Features
- Automation:
  - Mark all messages older than 30 days as read
  - Delete messages 7 days old with subject "Gmail Cleanup Summary"

## Behavior Details
- 30-day read marking:
  - Scans inbox and marks messages with internal date > 30 days old as read
  - Skips already-read messages
- 7-day cleanup:
  - Finds messages with subject exactly "Gmail Cleanup Summary"
  - If the message is 7 days old, it is moved to Trash

## Getting Started
This script runs as a Google Apps Script that automates Gmail cleanup tasks directly through Google's servers.

### Install Gmail.js
1. Go to [script.google.com](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the Gmail.js code from this repository
4. Save the project with a descriptive name (e.g., "Gmail Cleanup Automation")
5. Set up a time-based trigger to run the script periodically:
   - Click on "Triggers" (clock icon) in the left sidebar
   - Click "+ Add Trigger"
   - Configure the function to run and frequency as needed
6. Authorize the script to access your Gmail when prompted

Ensure you understand the deletion behavior and test on a small label/search first.

### Notes and Safety
- Deletion moves messages to Trash; recovery is limited by Gmail’s retention.
- Subject match is exact: "Gmail Cleanup Summary".
- Time checks rely on message internal dates provided by Gmail.