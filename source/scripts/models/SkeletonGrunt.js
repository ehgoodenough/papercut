var ShortID = require("shortid")
var getDistanceBetweenPoints = require("../utilities/getDistanceBetweenPoints")

var hasCircularCollision = require("../utilities/hasCircularCollision")
var getAngleBetweenPoints = require("../utilities/getAngleBetweenPoints")

var Images = require("../data/Images")

var SkeletonGrunt = function(protomonster) {
    this.id = ShortID.generate()
    window.game.monsters[this.id] = this

    this.x = protomonster.x || protomonster.tx * 32 || 0
    this.y = protomonster.y || protomonster.ty * 32 || 0
    this.alive = true

    this.size = 48
    this.rendersize = this.size * 2

    this.speed = 1.5
    this.currentAction = null
    this.direction = +1
    this.opacity = 1.5

    this.damage = 0.5
}

SkeletonGrunt.prototype.getStyle = function() {
    var image = Images.skeleton.grunt.idle
    if(this.alive == false) {
        image = Images.skeleton.grunt.dead
    } else if(this.distance <= 1) {
        image = Images.skeleton.grunt.attack
    } else if(this.distance <= 4) {
        image = Images.skeleton.grunt.attacking
    }
    return {
        opacity: this.opacity.toFixed(2),
        width: this.rendersize + "em",
        height: this.rendersize + "em",
        left: this.x - (this.rendersize / 2) + "em",
        top: this.y - (this.rendersize / 2) + "em",
        backgroundSize: "contain",
        backgroundImage: "url(" + image + ")",
        transform: "scaleX(" + this.direction + ")",
        transitionProperty: "transform",
        transitionDuration: "0.25s",
    }
}

SkeletonGrunt.prototype.update = function(delta) {
    var ninja = window.game.ninja
    if(this.alive && window.game.ninja.isDead === false) {
        if(delta > .9) {
            this.currentAction = {
                moveTo: {
                    x: ninja.x,
                    y: ninja.y
                }
            }
            var angle = getAngleBetweenPoints(this, ninja)
            this.direction = Math.abs(angle) > 90 ? +1 : -1
            var distance = getDistanceBetweenPoints(this, ninja)
            this.distance = Math.floor(distance / 50)
        }
        if(hasCircularCollision(this, window.game.ninja)){
            this.attackPlayer()
        }

        if (this.currentAction && this.currentAction.moveTo){
            if (this.currentAction.moveTo.y > this.y){
                this.y += this.speed * delta
            }
            else {
                this.y -= this.speed * delta
            }
            if (this.currentAction.moveTo.x > this.x){
                this.x += this.speed * delta
            }
            else {
                this.x -= this.speed * delta
            }
        }
    } else {
       this.opacity -= 0.01 * delta
       if(this.opacity <= 0) {
           this.remove()
       }
    }
}

SkeletonGrunt.prototype.attackPlayer = function () {
    window.game.ninja.getAttacked(this)
}

SkeletonGrunt.prototype.remove = function() {
    delete window.game.monsters[this.id]
}

SkeletonGrunt.prototype.getAttacked = function(source) {
    this.alive = false
    window.game.checkWinCondition()
}

module.exports = SkeletonGrunt
