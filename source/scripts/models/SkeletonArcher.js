var ShortID = require("shortid")

var Projectile = require("./Projectile")

var getAngleBetweenPoints = require("../utilities/getAngleBetweenPoints")
var getDistanceBetweenPoints = require("../utilities/getDistanceBetweenPoints")

var SkeletonArcher = function(protomonster) {
    this.id = ShortID.generate()
    window.game.monsters[this.id] = this

    this.x = protomonster.x || protomonster.tx * 32 || 0
    this.y = protomonster.y || protomonster.ty * 32 || 0
    this.size = 48

    this.speed = 1

    this.alive = true
    this.action = {}

    this.deltas = []
}

SkeletonArcher.prototype.getStyle = function() {
    var color = "blue"
    if(this.action.type == "aim") {
        color = "navy"
    }
    return {
        width: this.size + "em",
        height: this.size + "em",
        left: this.x - (this.size / 2) + "em",
        top: this.y - (this.size / 2) + "em",
        opacity: this.alive ? 1 : 0.5,
        backgroundColor: color,
    }
}

SkeletonArcher.prototype.update = function(delta) {
    var ninja = window.game.ninja
    if(this.alive) {
        if(!ninja.isDead) {
            this.deltas.push(delta)
            if(this.deltas.length > 3) {
                this.deltas.shift()
            } if(this.deltas.length == 3
            && this.deltas[0] < this.deltas[1]
            && this.deltas[1] > this.deltas[2]) {
                var angle = getAngleBetweenPoints(this, ninja)
                var distance = getDistanceBetweenPoints(this, ninja)
                if(distance < 300) {
                    this.action = {
                        type: "move",
                        x: this.x - (Math.cos(angle * (Math.PI / 180)) * 30),
                        y: this.y - (Math.sin(angle * (Math.PI / 180)) * 30),
                    }
                } else if(this.action.type == "aim") {
                    new Projectile({
                        x: this.x,
                        y: this.y,
                        direction: angle,
                        target: "ninjas",
                    })
                    this.action = {
                        type: "move",
                        x: this.x + ((Math.random() * 50) - 25),
                        y: this.y + ((Math.random() * 50) - 25),
                    }
                } else {
                    this.action = {
                        type: "aim",
                    }
                }
            }
            if(this.action.type == "move") {
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
