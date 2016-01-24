function Places(city, state, country, landmarks) {
  this.city = city;
  this.state = state;
  this.country = country;
  this.landmarks = landmarks;
}

Places.prototype.cityStateCountry = function() {
  return this.city + ", " + this.state + " " + this.country + " " + this.landmarks;
}

$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedCity = $("input#new-city").val();
    var inputtedState = $("input#new-state").val();
    var inputtedCountry = $("input#new-country").val();
    var inputtedLandmark = $("input#new-landmarks").val();
    var newPlace = new Places(inputtedCity, inputtedState, inputtedCountry, inputtedLandmark);

    $("ul#places").append("<li><span class='contact'>" + newPlace.cityStateCountry() + "</span></li>");


$(".contact").last().click(function() {
  $("#show-place").show();
  $("#show-place h2").text(newPlace.cityStateCountry());
  $(".city-city").text(newPlace.city);
  $(".state-state").text(newPlace.state);
  $(".country-country").text(newPlace.country);
  $(".landmarks-landmarks").text(newPlace.landmarks);
});

    $("input#new-city").val("");
    $("input#new-state").val("");
    $("input#new-country").val("");
    $("input#new-landmarks").val("");
  });
});







