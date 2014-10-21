// <script type="text/javascript"> game = new Game</script>

// game = new Game

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
