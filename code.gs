var seatgeek_client_id = 'YOUR_CLIENT_ID_HERE';

// List of event objects with id and max_price you are willing to pay
var events = [
  {
    id: 4077297,  // Sam Smith in San Diego
    max_price: 70
  },
  {
    id: 4190575,  // Charlie Puth in San Diego
    max_price: 20
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
    Logger.log(data);
  });
}
