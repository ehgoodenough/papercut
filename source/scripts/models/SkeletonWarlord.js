var ShortID = require("shortid")
var getDistanceBetweenPoints = require("../utilities/getDistanceBetweenPoints")
var getAngleBetweenPoints = require("../utilities/getAngleBetweenPoints")
var hasCircularCollision = require("../utilities/hasCircularCollision")
var AOE = require("./AOE")
var Images = require("../data/Images")


var SkeletonWarlord = function(protomonster) {
    this.id = ShortID.generate()
    window.game.monsters[this.id] = this

    this.x = protomonster.x || protomonster.tx * 32 || 0
    this.y = protomonster.y || protomonster.ty * 32 || 0
    this.alive = true
    this.size = 48
    this.rendersize = this.size * 2
    this.speed = 1
    this.health = 3
    this.currentAction = {}
    this.attackRange = 100
    
    this.direction = +1
    this.opacity = 1.5

    this.damage = 0.5
    this.deltas = []
}

SkeletonWarlord.prototype.getStyle = function() {
    var image = Images.skeleton.warlord.idle
    if(this.alive == false) {
        image = Images.skeleton.warlord.dead
    } else if(this.distance <= 1) {
        image = Images.skeleton.warlord.attack
    } else if(this.distance <= 4) {
        image = Images.skeleton.warlord.attacking
    }
    return {
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

SkeletonWarlord.prototype.update = function(delta) {
    if (this.alive && window.game.ninja.isDead === false && window.game.ninja.hasMoved == true){
        this.deltas.push(delta)
        if(this.deltas.length > 3) {
            this.deltas.shift()
        } 
        if(this.deltas.length == 3
        && this.deltas[0] < this.deltas[1]
        && this.deltas[1] > this.deltas[2]) {
            var distanceToNinja = getDistanceBetweenPoints({x: this.x, y: this.y}, {x: window.game.ninja.x, y: window.game.ninja.y})
            if (distanceToNinja <= this.attackRange){
                this.currentAction.attack = "slice"
            }
            else{
                this.currentAction.moveTo = {
                        x: window.game.ninja.x, 
                        y: window.game.ninja.y
                }
            }    
            var angle = getAngleBetweenPoints(this, window.game.ninja)
            this.direction = Math.abs(angle) > 90 ? +1 : -1
            var distance = getDistanceBetweenPoints(this, window.game.ninja)
            this.distance = Math.floor(distance / 50)
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

        if (this.currentAction && this.currentAction.attack == "slice"){
            var angle = getAngleBetweenPoints(this, window.game.ninja)
            new AOE({
                    x: this.x + (Math.cos(angle * (Math.PI / 180)) * 30),
                    y: this.y + (Math.sin(angle * (Math.PI / 180)) * 30),
                    width: 64,
                    height: 64,
                    target: "ninjas",
                })
            this.currentAction = {}
        }
    }
}

SkeletonWarlord.prototype.attackPlayer = function () {
    window.game.ninja.getAttacked()
}

SkeletonWarlord.prototype.die = function() {
    this.alive = false
    window.game.checkWinCondition()
}

SkeletonWarlord.prototype.getAttacked = function(source) {
    if (this.health > 1){
        this.health--
    }
    else {
        this.die()
    }
}

module.exports = SkeletonWarlord
