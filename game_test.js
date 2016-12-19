//import chai expectations
var expect = require('chai').expect;

describe('GAME INSTANCE FUNCTIONS', function () {
	describe('checkGameStatus', function () {
		var checkGameStatus = require('../game_logic/game_instance.js').checkGameStatus;
		it('should tell me when the game is over', function () {
			var players = [
				{
					ships: [
						{
							locations: [[0,0]],
							damage: [[0,0]]
						}
					]
				}
			];
			var actual = checkGameStatus(players);
			expect(actual).to.be.false;
		});
	});
});