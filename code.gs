// List of event objects with id and max_price you are willing to pay
var events = [
  {
    id: 4077297,
    max_price: 70
  },
  {
    id: 4190575,
    max_price: 20
  }
]

function checkPrices() {
  events.forEach(function(event) {
    Logger.log(event.id);
    Logger.log(event.max_price);
  });
}
