var ShortID = require("shortid")
var getDistanceBetweenPoints = require("../utilities/getDistanceBetweenPoints")
var hasCircularCollision = require("../utilities/hasCircularCollision")


var SkeletonWarlord = function(protomonster) {
    this.id = ShortID.generate()
    window.game.monsters[this.id] = this
    
    this.x = protomonster.x || protomonster.tx * 32 || 0
    this.y = protomonster.y || protomonster.ty * 32 || 0
    this.alive = true
    this.size = 48
    this.speed = 1
    this.health = 3
    this.currentAction = null
    this.attackRange = 100
}

SkeletonWarlord.prototype.getStyle = function() {
    return {
        width: this.size + "em",
        height: this.size + "em",
        left: this.x - (this.size / 2) + "em",
        top: this.y - (this.size / 2) + "em",
        backgroundColor: "orange",
    }
}

SkeletonWarlord.prototype.update = function(delta) {
    if (this.alive){
        if(delta > .9) {
            var distanceToNinja = getDistanceBetweenPoints({x: this.x, y: this.y}, {x: window.game.ninja.x, y: window.game.ninja.y})
            if (distanceToNinja <= this.attackRange){
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

SkeletonWarlord.prototype.attackPlayer = function () {
    window.game.ninja.getAttacked()
}

SkeletonWarlord.prototype.die = function() {
    alive = false
}

SkeletonWarlord.prototype.getAttacked = function(source) {
    if (this.health > 0){
        health--
    }
    else {
        this.die()
    }
}

module.exports = SkeletonWarlord
