var ShortID = require("shortid")
var getDistanceBetweenPoints = require("../utilities/getDistanceBetweenPoints")
var findNearestPlayerProjectile = require("../utilities/findNearestPlayerProjectile")
var hasCircularCollision = require("../utilities/hasCircularCollision")


var LichHeart = function(protomonster) {
    this.id = ShortID.generate()
    window.game.monsters[this.id] = this
    
    this.x = protomonster.x || protomonster.tx * 32 || 0
    this.y = protomonster.y || protomonster.ty * 32 || 0
    this.alive = true
    this.size = 48
    this.speed = 1
    this.health = 9
    this.currentAction = null
    this.dodgeRange = 96
}

LichHeart.prototype.getStyle = function() {
    return {
        width: this.size + "em",
        height: this.size + "em",
        left: this.x - (this.size / 2) + "em",
        top: this.y - (this.size / 2) + "em",
        backgroundColor: "purple",
    }
}

LichHeart.prototype.update = function(delta) {
    if (this.alive && window.game.ninja.isDead === false && window.game.ninja.hasMoved == true){
        if(delta > .5) {
            var distanceToNearestShuriken = findNearestPlayerProjectile({this.x, this.y})
            if (distanceToNearestShuriken >= this.dodgeRange){
                //Chill
            }
            else if ({
                this.currentAction = { 
                    moveTo: {
                        x: window.game.ninja.x
                    }
                }
            }
        }
        if (this.currentAction && this.currentAction.moveTo){
            if (this.currentAction.moveTo.x > this.x)
                this.x += this.speed * delta
            else 
                this.x -= this.speed * delta
        }
    }
}

LichHeart.prototype.attackPlayer = function () {
    window.game.ninja.getAttacked()
}

LichHeart.prototype.die = function() {
    this.alive = false
}

LichHeart.prototype.getAttacked = function(source) {
    if (this.health > 1){
        this.health--
    }
    else {
        this.die()
    }
}

module.exports = LichHeart
