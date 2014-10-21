function Game() {
	this.frames = []
	this.fillFrames()
	this.currentFrame
	this.initialFrame()
	this.player = new Player
	this.bonus = [1]
	this.consecutiveStrikes = 0
}

function Pin() {
	this.isKnocked = false
}

function Player() {
	this.score = 0
	this.name
}

function Frame() {
	this.pins = []
	this.pinsDown = 0
	this.remainingRolls = 2
	this.placingPins()	
}

Game.prototype.fillFrames = function() {
	for(var i =0; i < 10; i++ ) { this.frames.push(new Frame) }
}

Game.prototype.addPlayer = function(player) {
	this.player = player
}

Game.prototype.frameNumber = function() {
	var roundOne = 1
	return this.frames.indexOf(this.currentFrame)  + roundOne
}

Game.prototype.rollTheBall = function(pinsDown) {
	var firstPinStanding = this.currentFrame.numberPinsKnockOver()
	for (var i = 0; i < pinsDown; i++ ) {
		this.currentFrame.pins[firstPinStanding + i].down()
	}
	this.currentFrame.newRoll()
	this.updatingPlayerScore(pinsDown)
	this.assignBonus()
	// if ( this.currentFrame.remainingRolls == 0 || this.isStrike() ) this.changeFrame()
}

Game.prototype.isStrike = function() {
	 return (this.currentFrame.remainingRolls === 1 && this.currentFrame.numberRemainingPins() === 0)
}

Game.prototype.isSpare = function() {
	return (this.currentFrame.remainingRolls === 0 && this.currentFrame.numberRemainingPins() === 0)
}

Game.prototype.initialFrame = function() {
	this.currentFrame = this.frames[0]
}

Game.prototype.changeFrame = function() {
	this.currentFrame = this.frames[this.frameNumber()]
}

Game.prototype.updatingPlayerScore = function(pinsDown) {
	this.player.score += pinsDown * this.bonus.pop().valueOf()
}

Game.prototype.assignBonus = function() {
	if( this.isStrike() && consecutiveStrikes < 3) {
		consecutiveStrikes += 1
		return this.bonus = [2,2]
	}
	consecutiveStrikes = 0
	if( this.isSpare() ) return this.bonus.push(2)
	this.bonus.push(1)
}

Game.prototype.isFrameTen = function() {
	return this.frameNumber() === 10
}

Game.prototype.isPerfectGame = function() {
	return this.player.score === 300 && this.isFrameTen()
}
Game.prototype.isCutterGame = function() {
	return this.player.score === 0 && this.isFrameTen()
}
Frame.prototype.placingPins = function() {
	for(var i=0; i < 10; i++ ) { this.pins.push(new Pin) }	
}

Frame.prototype.newRoll = function() {
	this.remainingRolls -= 1
}

Frame.prototype.numberPinsKnockOver = function() {
	var pinsDown = this.pins.filter( function(x) { return x.isKnocked } )
	return pinsDown.length
}

Frame.prototype.numberRemainingPins = function() {
	return this.pins.length - this.numberPinsKnockOver()
}

Pin.prototype.down = function() {
	this.isKnocked = true
}

