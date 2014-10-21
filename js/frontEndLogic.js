
			game = new Game
	
	iteratePins()
	// game.rollTheBall(5)
	// iteratePins()

	function iteratePins() {
		var pins = game.currentFrame.pins
		for(var p = 0; p < pins.length; p++) {
			if (pins[p].isKnocked) {
				putPinDown(p) }
				else {
				putPinBack(p)
			}
		}
	}
	
	function randThrow() {
		var remainingPins = game.currentFrame.numberRemainingPins()
		randomNumber = Math.floor(Math.random() * 11)
		console.log('remainingPins')
		console.log(remainingPins)
		if (remainingPins === 10) {
			finalResult = randomNumber > 6 ? randomNumber : randomNumber + Math.floor(Math.random() * 5)
			console.log('inside 1st stament')
			console.log(finalResult)
			return finalResult }
		else {
			finalResult = randomNumber < remainingPins ? randomNumber : remainingPins -1
			console.log('inside 2nd stament')
			console.log(finalResult)
			return finalResult
		}
	}
	



// $('#bowlingball').on('click', function() { $(this).animate({ "left": "0px", "bottom": "20px"}, 1)


$('#bowlingball').on('click', function() { $(this).animate({ "left": "1200px", "bottom": "10px"}, 2000, function() { 
	// $(this).remove()
	iteratePins()
	randNumber = randThrow()
	game.rollTheBall(randNumber)
	$('#score h3').text(randNumber)
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
	var css = { 1:'90', 2:'60', 3:'60', 4:'30',5:'30',6:'30',7:'0',8:'0',9:'0',10:'0'}
	$('#bowlingpin' + pinNumber).delay(10).show("fast"); 
	$('#bowlingpin' + pinNumber).animate({"right": css[pinNumber] + "px", "bottom": "10px"}, 500); 
}