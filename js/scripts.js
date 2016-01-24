function Places(city, state, country) {
  this.city = city;
  this.state = state;
  this.country = country;
  this.landmarks = [];
}

Places.prototype.cityStateCountry = function() {
  return this.city + ", " + this.state + ", " + this.country;
}

$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedCity = $("input#new-city").val();
    var inputtedState = $("input#new-state").val();
    var inputtedCountry = $("input#new-country").val();
    var newPlace = new Places(inputtedCity, inputtedState, inputtedCountry);

    $("ul#places").append("<li><span class='contact'>" + newPlace.cityStateCountry() + "</span></li>");


$(".contact").last().click(function() {
  $("#show-place").show();
  $("#show-place h2").text(newPlace.cityStateCountry());
  $(".city-city").text(newPlace.city);
  $(".state-state").text(newPlace.state);
  $(".country-country").text(newPlace.country);
});

    $("input#new-city").val("");
    $("input#new-state").val("");
    $("input#new-country").val("");
  });
});







