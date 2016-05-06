// Set up tests to use Chai
var expect = require('chai').expect;

// Test suite
describe('checkForShip', function () {
	var checkForShip = require('../game_logic/ship_methods').checkForShip;
	// Test spec/case
	it('should correctly report no ship at given players co-ordinate', function () {
		player = {
			ships: [
				{
					locations: [[0, 0]]
				}
			]
		}
		expect(checkForShip(player, [9, 9])).to.be.false;
	})
})