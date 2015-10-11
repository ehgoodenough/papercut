var ShortID = require("shortid")
var getDistanceBetweenPoints = require("../utilities/getDistanceBetweenPoints")
var hasCircularCollision = require("../utilities/hasCircularCollision")


var SkeletonGrunt = function(protomonster) {
    this.id = ShortID.generate()
    window.game.monsters[this.id] = this
    
    this.x = protomonster.x || protomonster.tx * 32 || 0
    this.y = protomonster.y || protomonster.ty * 32 || 0
    this.size = 48
    this.speed = 1
    this.currentAction = null
    this.attackRange = 100
}

SkeletonGrunt.prototype.getStyle = function() {
    return {
        width: this.size + "em",
        height: this.size + "em",
        left: this.x - (this.size / 2) + "em",
        top: this.y - (this.size / 2) + "em",
        backgroundColor: "orange",
    }
}

SkeletonGrunt.prototype.update = function(delta) {
    if(delta > .9) {
        var distanceToNinja = getDistanceBetweenPoints({x: this.x, y: this.y}, {x: window.game.ninja.x, y: window.game.ninja.y})
        this.currentAction = {
            moveTo: {
                x: window.game.ninja.x, 
                y: window.game.ninja.y
            }
        }
    }

    if(hasCircularCollision(this, window.game.ninja)){
        this.attackPlayer()
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

SkeletonGrunt.prototype.attackPlayer = function () {
    window.game.ninja.getAttacked()
    console.log("Ded.")
}

SkeletonGrunt.prototype.die = function() {
    delete window.game.monsters[this.id]
}

SkeletonGrunt.prototype.getAttacked = function(source) {
    this.die()
}

module.exports = SkeletonGrunt
