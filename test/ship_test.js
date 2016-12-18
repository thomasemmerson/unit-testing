//import chai expectations
var expect = require('chai').expect;

//test suite 1 
describe('checkForShip', function() {

	//declare necessary global variables
	var checkForShip = require('../game_logic/ship_methods').checkForShip;
	var player;

	before(function() {

		player = {
			ships: 
			[
				{
					locations: 
					[
						[0,0],
						[0,1],
						[0,2],
						[0,3],						
					],
					damage: []
				},
				{
					locations: 
					[
						[2,2],
						[2,3],
						[2,4],
						[2,5],						
					],
					damage: []
				},
				{
					locations: 
					[
						[4,0],
						[4,1],
						[4,2],
						[4,3],						
					],
					damage: []					
				}
			]
		};

	});

	it('should correctly report no ship at a given players coordinates', function() {

		expect(checkForShip(player, [0,0])).to.deep.equal(player.ships[0]);
	});

	it('should correctly report when a ship is at a given players coordinates', function() {

		expect(checkForShip(player, [0,0])).to.deep.equal(player.ships[0]);
	});

	it('should handle checking multiple ships located at more than one coordinate', function() {

		//ship 1
		expect(checkForShip(player, [0,0])).to.deep.equal(player.ships[0]);
		expect(checkForShip(player, [0,1])).to.deep.equal(player.ships[0]);
		expect(checkForShip(player, [0,2])).to.deep.equal(player.ships[0]);
		expect(checkForShip(player, [0,3])).to.deep.equal(player.ships[0]);	

		//ship 2
		expect(checkForShip(player, [2,2])).to.deep.equal(player.ships[1]);
		expect(checkForShip(player, [2,3])).to.deep.equal(player.ships[1]);
		expect(checkForShip(player, [2,4])).to.deep.equal(player.ships[1]);
		expect(checkForShip(player, [2,5])).to.deep.equal(player.ships[1]);	

	});

});

describe('damageShip', function() {
	
	var damageShip = require('../game_logic/ship_methods').damageShip;

	it('should register damage on a given ship at a given location', function() {
		var ship = {
			locations: [[0,0]],
			damage: []
		};

		damageShip(ship, [0,0]);

		expect(ship.damage).to.not.be.empty;
		expect(ship.damage[0]).to.deep.equal([0,0]);
	});
});

describe('fireOnShip', function() {
	
	var fireOnShip = require('../game_logic/ship_methods').fireOnShip;
	var player;

	beforeEach(function () {
		
		player = {
			ships: [
				{
					locations: [[0,0]],
					damage: []
				}
			]
		};

	});

	it('should record damage on a given ship at a given location that I know is occupied', function() {

		fireOnShip(player, [0,0]);

		expect(player.ships[0].damage[0]).to.deep.equal([0,0,]);

	});

	it('should NOT record damage on a given ship at a given location that I know is NOT occupied', function() {

		var player = {
			ships: [
				{
					locations: [[0,0]],
					damage: []
				}
			]
		};

		fireOnShip(player, [9,9]);

		expect(player.ships[0].damage[0]).to.be.empty;

	});
});