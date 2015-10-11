var ShortID = require("shortid")
var getDistanceBetweenPoints = require("../utilities/getDistanceBetweenPoints")

var SkeletonArcher = function(protomonster) {
    this.id = ShortID.generate()
    window.game.monsters[this.id] = this
    
    this.x = protomonster.x || protomonster.tx * 32 || 0
    this.y = protomonster.y || protomonster.ty * 32 || 0
    this.alive = true
    this.size = 48
    this.speed = 1
    this.currentAction = null
}

SkeletonArcher.prototype.getStyle = function() {
    return {
        width: this.size + "em",
        height: this.size + "em",
        left: this.x - (this.size / 2) + "em",
        top: this.y - (this.size / 2) + "em",
        backgroundColor: "blue",
    }
}

SkeletonArcher.prototype.update = function(delta) {
    if (this.alive && window.game.ninja.isDead === false && window.game.ninja.hasMoved == true){
        if(delta > .9) {
            var distanceToNinja = getDistanceBetweenPoints({x: this.x, y: this.y}, {x: window.game.ninja.x, y: window.game.ninja.y})
            if (distanceToNinja >= 160){
                this.currentAction = {}  //TODO: Attack!
            }
            else{
                this.currentAction = { 
                    moveTo: {
                        x: window.game.ninja.x,
                        y: window.game.ninja.y
                    }
                }
            }
        }
        if (this.currentAction && this.currentAction.moveTo){
            if (this.currentAction.moveTo.y > this.y)
                this.y += this.speed * delta
            else 
                this.y -= this.speed * delta
            if (this.currentAction.moveTo.x > this.x)
                this.x += this.speed * delta
            else 
                this.x -= this.speed * delta
        }
    }
}

SkeletonArcher.prototype.die = function() {
    this.alive = false
}

SkeletonArcher.prototype.getAttacked = function(source) {
    this.die()
}

module.exports = SkeletonArcher
