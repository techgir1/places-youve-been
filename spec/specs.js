describe('Places', function() {
	it("creates a new place with the given properties", function() {
		var testPlace = new Places("Portland","Oregon");
		expect(testPlace.city).to.equal("Portland");
		expect(testPlace.state).to.equal("Oregon");
		expect(testPlace.landmarks).to.eql([]);
	});
});

it("adds the cityState method to all places", function() {
	var testPlace = new Places("Portland", "Oregon");
	expect(testPlace.cityState()).to.equal("Portland Oregon");
});