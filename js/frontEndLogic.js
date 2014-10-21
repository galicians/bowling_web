// <script type="text/javascript"> game = new Game</script>

// game = new Game

			game = new Game
	
	iteratePins()
	// game.rollTheBall(5)
	// iteratePins()

	function iteratePins() {
		var pins = game.currentFrame.pins
		for(var p = 0; p < pins.length; p++) {

			displayPins(pins[p])
		}
	}
	
	function randThrow() {
		var remainingPins = game.currentFrame.numberRemainingPins()
		return Math.floor(Math.random()*remainingPins)
	}
	
	$('img.category').on('click', function() { $(this).animate({ opacity: 0.0, paddingLeft: '+=80'}, 500, function() { $(this).remove()})})



	function displayPins(p) {
		var pin = document.createElement("img")
			p.isKnocked ? pin.setAttribute("src", "images/pinDown.jpeg") : pin.setAttribute("src", "images/bowlingpin.png")
			pin.align="center"
			pin.class="category"
			pin.id="bowlingpin"

		// pin.setAttribute("width", "50")
		// pin.setAttribute("height", "50")
		document.body.appendChild(pin)
	// }






$('#bowlingball').on('click', function() { $(this).animate({ opacity: 0.0, paddingLeft: '+=80'}, 500, function() { 
	$(this).remove()
	randNumber = randThrow()
	game.rollTheBall(randNumber)
	$('#score h3').text(game.player.score)
	$('#message').text("keep trying")
	// $('#isStrike h3').
	// $('#isSpare h3').
	$('#totalScore h3').text(game.player.score)
	$('#currentFrame h3').text(game.frameNumber())
	$('#currentRoll h3').text(game.currentFrame.remainingRolls)
	$('#remaningPins h3').text(game.currentFrame.numberRemainingPins())
})
})
