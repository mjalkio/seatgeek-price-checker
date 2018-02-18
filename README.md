# SeatGeek Price Checker

Check prices for SeatGeek events in a Google Apps Script.

Created because their email alerts never work for me.

## Setup

1. Get a SeatGeek `client_id` [here](https://seatgeek.com/account/develop).
2. Go to the [Google Apps Script](https://script.google.com) homepage, click "New Script."
3. (optional) Name the script.
4. Copy the contents of [code.js](code.gs) into the open file.
5. Replace `YOUR_CLIENT_ID_HERE` with your ID from step 1 and replace `YOUR_EMAIL_HERE` with your email.
6. Fill in `events` with your events. Each event is a JavaScript object with `id`, `name`, and `max_price` fields. Currently, event IDs are at the end of the event URLs. For example, for my Sam Smith event the URL is: `https://seatgeek.com/sam-smith-tickets/san-diego-california-valley-view-casino-center-2018-09-01-8-pm/concert/4077297`. The `name` is just used for logging and emails, it can be anything that makes sense to you. You will only receive email alerts if the price of the ticket goes below `max_price`.
7. Click the Run button. This will cause an "Authorization Required" pop-up to appear. Review the permissions and accept.
8. Click the Current Projects Triggers button. Use the options to schedule your price checker to run at whatever interval you'd like.
9. Enjoy!
