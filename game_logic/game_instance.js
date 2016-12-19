var fire = require('./ship_methods.js').fireOnShip;

function checkGameStatus (players) {
	return false;
}

function takeTurn (opposingPlayer, guessFunction) {
	var coordinates = guessFunction();
	fire(opposingPlayer, coordinates);
	var gameOver = checkGameStatus();

	return gameOver;
}

module.exports.checkGameStatus = checkGameStatus;
module.exports.takeTurn = takeTurn;