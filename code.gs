var seatgeekClientId = 'YOUR_CLIENT_ID_HERE';
var emailToAlert = 'YOUR_EMAIL_HERE';

// List of event objects with id and max_price you are willing to pay
var events = [
  {
    name: 'Sam Smith in San Diego',
    id: 4077297,
    maxPrice: 70
  },
  {
    name: 'Charlie Puth in San Diego',
    id: 4190575,
    maxPrice: 20
  }
];

function checkPrices() {
  events.forEach(function(event) {
    var url = 'https://api.seatgeek.com/2/events/'
      + event.id.toString()
      + '?client_id=' + seatgeekClientId;
    var response = UrlFetchApp.fetch(url);
    var json = response.getContentText();
    var data = JSON.parse(json);

    if(Date.now() > Date.parse(data.visible_until_utc)) {
      // If you can no longer buy tickets, don't send any alerts...
      Logger.log('Event ' + event.name + ' is in the past.');
      return;
    }

    var lowestPrice = data.stats.lowest_price;
    var alertText = 'Lowest price for ' + event.name + ': $' + lowestPrice;
    Logger.log(alertText);
    if (lowestPrice <= event.maxPrice) {
      MailApp.sendEmail(emailToAlert,
                        'Google Apps Script SeatGeek Alert',
                        alertText);
    }
  });
}
