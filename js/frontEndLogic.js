
			game = new Game
	
	iteratePins()
	// game.rollTheBall(5)
	// iteratePins()

	function iteratePins() {
		var pins = game.currentFrame.pins
		for(var p = 0; p < pins.length; p++) {
			console.log(pins[p].isKnocked)
			if (pins[p].isKnocked) {
				putPinDown(p) }
				else {

			}
		}
	}
	
	function randThrow() {
		var remainingPins = game.currentFrame.numberRemainingPins()
		return Math.floor(Math.random()*remainingPins)
	}
	



// $('#bowlingball').on('click', function() { $(this).animate({ "left": "0px", "bottom": "20px"}, 1)


$('#bowlingball').on('click', function() { $(this).animate({ "left": "1200px", "bottom": "20px"}, 2000, function() { 
	// $(this).remove()
	iteratePins()
	randNumber = randThrow()
	game.rollTheBall(randNumber)
	iteratePins()
	$('#score h3').text(game.currentFrame.numberPinsKnockOver())
	$('#message').text("keep trying")
	// $('#isStrike h3').
	// $('#isSpare h3').
	$('#totalScore h3').text(game.player.score)
	$('#score').delay(500).show("fast"); $('#score').animate({"right": "50px", "bottom": "200px"}, 1000); $('#score').fadeOut("fast");
	$('#score').animate({"right": "50px", "bottom": "15px"}, 1);
	$('#currentFrame h3').text(game.frameNumber())
	$('#currentRoll h3').text(game.currentFrame.remainingRolls)
	$('#remainingPins h3').text(game.currentFrame.numberRemainingPins())
	$(this).animate({ "left": "0px", "bottom": "20px"}, 1)
	iteratePins()
})
})

function putPinDown(pinNumber) {
	$('#bowlingpin' + pinNumber).delay(10).show("fast"); 
	$('#bowlingpin' + pinNumber).animate({"right": "-50px", "bottom": "10px"}, 500); 
}

function putPinBack(pinNumber) {
	// css = {}
	$('#bowlingpin' + pinNumber).delay(10).show("fast"); 
	$('#bowlingpin' + pinNumber).animate({"right": "-50px", "bottom": "0px"}, 500); 
	pinNumber = 1 right:90
	

	// 2,3 60
	// 456 30
	// 789 10 0
}