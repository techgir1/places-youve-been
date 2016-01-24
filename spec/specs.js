describe('Places', function() {
	it("creates a new place with the given properties", function() {
		var testPlace = new Places("Portland","Oregon","United States","Water front");
		expect(testPlace.city).to.equal("Portland");
		expect(testPlace.state).to.equal("Oregon");
		expect(testPlace.country).to.equal("United States");
		expect(testPlace.landmarks).to.equal("Water front");
	});
});

it("adds the cityStateCountry method to all places", function() {
	var testPlace = new Places("Portland","Oregon","United States","Water front");
	expect(testPlace.cityStateCountry()).to.equal("Portland Oregon United States Water front");
});



