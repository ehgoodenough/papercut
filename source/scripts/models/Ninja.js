var Mouse = require("../utilities/Mouse")
var Keyboard = require("../utilities/Keyboard")
var getAngleBetweenPoints = require("../utilities/getAngleBetweenPoints")

var AOE = require("./AOE")
var Projectile = require("./Projectile")

var Images = require("../data/Images.js")

var Ninja = function(protoninja) {
    window.game.ninja = this

    this.x = protoninja.x || protoninja.tx * 32 || WIDTH / 2
    this.y = protoninja.y || protoninja.ty * 32 || HEIGHT / 2

    this.vx = 0
    this.vy = 0
    this.vmin = 0.001
    this.vmax = 0.075

    this.size = 48
    this.rendersize = this.size * 2

    this.speed = 3
    this.direction = +1
    this.state = {
        attacking: 0,
        dying: 1,
    }
    this.damageCooldown = 0

    this.health = 3

    this.damage = 1

    this.delta = 1
    this.hasMoved
    this.isDead = false
}

Ninja.prototype.getStyle = function() {
    var image = Images.ninja.moving.west
    if(this.isDead == true) {
        image = Images.ninja.dead
    } else if(this.state.slashing > 0) {
        image = Images.ninja.slashing
    } else if(this.state.attacking > 0) {
        image = Images.ninja.throwing
    }
    var opacity = 1
    if(this.damageCooldown == true) {
        opacity = 0.25
    }
    if(this.isDead == true) {
        opacity = this.state.dying
    }
    return {
        opacity: opacity,
        width: this.rendersize + "em",
        height: this.rendersize + "em",
        left: (this.x - (this.rendersize / 2)) + "em",
        top: (this.y - (this.rendersize / 2)) + "em",
        backgroundSize: "contain",
        backgroundImage: "url('" + image + "')",
        transform: "scaleX(" + this.direction + ")",
        transitionProperty: "transform",
        transitionDuration: "0.25s"
    }
}

Ninja.prototype.update = function(fluxdelta, delta) {
    if(this.isDead == false) {
        if(this.state.attacking > 0) {
            this.state.attacking -= fluxdelta
        }
        this.delta = fluxdelta
        if(Keyboard.isDown("W")
        || Keyboard.isDown("<up>")) {
            this.hasMoved = true
            this.y -= this.speed * fluxdelta
        } if(Keyboard.isDown("S")
        || Keyboard.isDown("<down>")) {
            this.hasMoved = true
            this.y += this.speed * fluxdelta
        } if(Keyboard.isDown("A")
        || Keyboard.isDown("<left>")) {
            this.hasMoved = true
            this.x -= this.speed * fluxdelta
            this.direction = +1
        } if(Keyboard.isDown("D")
        || Keyboard.isDown("<right>")) {
            this.hasMoved = true
            this.x += this.speed * fluxdelta
            this.direction = -1
        } if(Keyboard.isJustDown("<space>")) {
            var direction = this.direction * -1
            this.x += direction * 100
            this.state.slashing = 3
        }
        this.x += this.vx * fluxdelta
        this.y += this.vy * fluxdelta
        var friction = 0.000005
        if(this.vx > 0) {
            this.vx *= Math.pow(friction, fluxdelta)
            if(this.vx < 0) {
                this.vx = 0
            }
        } if(this.vx < 0) {
            this.vx *= Math.pow(friction, fluxdelta)
            if(this.vx > 0) {
                this.vx = 0
            }
        } if(this.vy > 0) {
            this.vy *= Math.pow(friction, fluxdelta)
            if(this.vy < 0) {
                this.vy = 0
            }
        } if(this.vy < 0) {
            this.vy *= Math.pow(friction, fluxdelta)
            if(this.vy > 0) {
                this.vy = 0
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
        while(Mouse.events.length > 0) {
            var event = Mouse.events.shift()
            if(event.type == "click") {
                this.hasMoved = true
                this.state.attacking = 3
                var direction = getAngleBetweenPoints(this, event)
                new Projectile({
                    "x": this.x,
                    "y": this.y,
                    "direction": direction,
                    "damage": 1,
                })
            }
        }
        if(this.state.slashing > 0) {
            if(this.state.slashing == 3) {
                new AOE({
                    x: this.x + ((this.direction * -1) * 64),
                    y: this.y,
                    width: 64,
                    height: 64,
                })
            }
            this.state.slashing -= fluxdelta
        }
    } else {
        this.state.dying -= 0.5 * delta
    }
}

Ninja.prototype.getAttacked = function(attacker) {
    if(this.isDead == false) {
        if(this.damageCooldown == false) {
            this.health -= attacker.damage
            if(this.health <= 0) {
                // you are dead
                this.isDead = true
                window.game.checkLoseCondition()
            } else {
                var angle = getAngleBetweenPoints(attacker, this)
                this.x += Math.cos(angle * (Math.PI / 180)) * 50
                this.y += Math.sin(angle * (Math.PI / 180)) * 50
                this.damageCooldown = true
                window.setTimeout(function() {
                    this.damageCooldown = false
                }.bind(this), 1000)
            }
        }
    }
}

module.exports = Ninja
