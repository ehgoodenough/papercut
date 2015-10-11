var ShortID = require("shortid")

var Projectile = require("./Projectile")

var getAngleBetweenPoints = require("../utilities/getAngleBetweenPoints")
var getDistanceBetweenPoints = require("../utilities/getDistanceBetweenPoints")

var Images = require("../data/Images")

var SkeletonArcher = function(protomonster) {
    this.id = ShortID.generate()
    window.game.monsters[this.id] = this

    this.x = protomonster.x || protomonster.tx * 32 || 0
    this.y = protomonster.y || protomonster.ty * 32 || 0

    this.size = 48
    this.rendersize = this.size * 2

    this.speed = 1

    this.alive = true
    this.action = {}
    this.direction = +1

    this.deltas = []
}

SkeletonArcher.prototype.getStyle = function() {
    var image = Images.skeleton.archer.idle
    if(this.alive == false) {
        image = Images.skeleton.archer.dead
    } else if(this.action.type == "retreat") {
        image = Images.skeleton.archer.idle
    } else if(this.action.type == "reposition") {
        image = Images.skeleton.archer.notching
    } else if(this.action.type == "aim") {
        image = Images.skeleton.archer.aiming
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

SkeletonArcher.prototype.update = function(delta) {
    var ninja = window.game.ninja
    if(this.alive) {
        if(!ninja.isDead) {
            // if and only if
            // this is the "beat"
            this.deltas.push(delta)
            if(this.deltas.length > 3) {
                this.deltas.shift()
            } if(this.deltas.length == 3
            && this.deltas[0] < this.deltas[1]
            && this.deltas[1] > this.deltas[2]) {
                // calculate the angle and distance
                var angle = getAngleBetweenPoints(this, ninja)
                var distance = getDistanceBetweenPoints(this, ninja)
                // turn the archer to always face the ninja
                this.direction = Math.abs(angle) > 90 ? +1 : -1
                // if the ninja is too close to the archer, the
                // archer will begin to retreat. otherwise, the
                // archer will either aim and loose an arrow.
                if(distance < 300) {
                    this.action = {
                        type: "retreat",
                        // by subtracting the vectors of the angle
                        // from your position, you are moving
                        // away from the ninja.
                        x: this.x - (Math.cos(angle * (Math.PI / 180)) * 30),
                        y: this.y - (Math.sin(angle * (Math.PI / 180)) * 30),
                    }
                } else if(this.action.type == "aim") {
                    new Projectile({
                        x: this.x,
                        y: this.y,
                        direction: angle,
                        target: "ninjas",
                        type: "arrow",
                        damage: 0.5,
                    })
                    // after loosing the arrow, the
                    // archer moves around randomly.
                    this.action = {
                        type: "reposition",
                        x: this.x + ((Math.random() * 100) - 50),
                        y: this.y + ((Math.random() * 100) - 50),
                    }
                } else {
                    this.action = {
                        type: "aim",
                    }
                }
            }
            if(this.action.type == "retreat"
            || this.action.type == "reposition") {
                if(this.y < this.action.y) {
                    this.y += this.speed * delta
                    if(this.y > this.action.y) {
                        this.y = this.action.y
                    }
                } else if(this.y > this.action.y) {
                    this.y -= this.speed * delta
                    if(this.y < this.action.y) {
                        this.y = this.action.y
                    }
                } if(this.x < this.action.x) {
                    this.x += this.speed * delta
                    if(this.x > this.action.x) {
                        this.x = this.action.x
                    }
                } else if(this.x > this.action.x){
                    this.x -= this.speed * delta
                    if(this.x < this.action.x) {
                        this.x = this.action.x
                    }
                }
                if(this.x < 0) {
                    this.x = 0
                } if(this.y < 0) {
                    this.y = 0
                } if(this.x > window.WIDTH) {
                    this.x = window.WIDTH
                } if(this.y > window.HEIGHT) {
                    this.y = window.HEIGHT
                }
            }
        }
    }
}

SkeletonArcher.prototype.getAttacked = function(source) {
    window.game.checkWinCondition()
    this.alive = false
}

module.exports = SkeletonArcher
