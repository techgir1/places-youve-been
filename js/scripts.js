function Places(city, state) {
	this.city = city;
	this.state = state;
	this.landmarks = [];
}

Places.prototype.cityState = function() {
	return this.city + " " + this.state;
}