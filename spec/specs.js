describe('Places', function() {
	it("creates a new place with the given properties", function() {
		var testPlace = new Places("Portland","Oregon","United States");
		expect(testPlace.city).to.equal("Portland");
		expect(testPlace.state).to.equal("Oregon");
		expect(testPlace.country).to.equal("United States");
		expect(testPlace.landmarks).to.eql([]);
	});
});

it("adds the cityStateCountry method to all places", function() {
	var testPlace = new Places("Portland","Oregon","United States");
	expect(testPlace.cityStateCountry()).to.equal("Portland Oregon United States");
});



