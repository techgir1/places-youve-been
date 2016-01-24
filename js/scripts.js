function Places(city, state, country) {
  this.city = city;
  this.state = state;
  this.country = country;
  this.landmarks = [];
}

Places.prototype.cityStateCountry = function() {
  return this.city + " " + this.state + " " + this.country;
}