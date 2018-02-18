var seatgeek_client_id = 'YOUR_CLIENT_ID_HERE';

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
      + '?client_id=' + seatgeek_client_id;
    var response = UrlFetchApp.fetch(url);
    var json = response.getContentText();
    var data = JSON.parse(json);

    var lowestPrice = data.stats.lowest_price;
    Logger.log('Lowest price for ' + event.name + ': $' + lowestPrice);
    if (lowestPrice <= event.maxPrice) {
      // Send an email to let you know!
    }
  });
}
