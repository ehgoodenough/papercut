var ShortID = require("shortid")

var Images = require("../data/Images")
var hasCircularCollision = require("../utilities/hasCircularCollision")

var Projectile = function(protoprojectile) {
    this.id = ShortID.generate()
    window.game.projectiles[this.id] = this

    this.x = protoprojectile.x || 0
    this.y = protoprojectile.y || 0
    this.direction = protoprojectile.direction || 0
    this.target = protoprojectile.target || "monsters"
    this.type = protoprojectile.type || "ninjastar"
    this.damage = protoprojectile.damage || 0.5

    this.size = 12
    this.maxsize = 36

    this.rotation = 0
    this.speed = 4
}

Projectile.prototype.getStyle = function() {
    if(this.type == "ninjastar") {
        return {
            width: this.size + "em",
            height: this.size + "em",
            top: (this.y - (this.size / 2)) + "em",
            left: (this.x - (this.size / 2)) + "em",
            transform: "rotate(" + this.rotation + "deg)",
            backgroundImage: "url(" + Images.projectiles.ninjastar + ")",
            backgroundSize: "contain",
        }
    } else if(this.type == "arrow") {
        return {
            width: (this.size * 2.5) + "em",
            height: (this.size * 2.5) + "em",
            top: (this.y - ((this.size * 2.5) / 2)) + "em",
            left: (this.x - ((this.size * 2.5) / 2)) + "em",
            transform: "rotate(" + (this.direction + 90) + "deg)",
            backgroundImage: "url(" + Images.projectiles.arrow + ")",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
        }
    }
}

Projectile.prototype.update = function(delta) {
    if(this.size < this.maxsize) {
        this.size += delta
        if(this.size > this.maxsize) {
            this.size = this.maxsize
        }
    }

    this.rotation += 9 * delta

    this.x += Math.cos(this.direction * (Math.PI / 180)) * this.speed * delta
    this.y += Math.sin(this.direction * (Math.PI / 180)) * this.speed * delta

    if(this.x < 0 - this.size
    || this.x > WIDTH + this.size
    || this.y < 0 - this.size
    || this.y > HEIGHT + this.size) {
        this.remove()
    }

    if(this.target == "monsters") {
        for(var id in window.game.monsters) {
            var monster = window.game.monsters[id]
            if(monster.alive == true) {
                if(hasCircularCollision(this, monster)) {
                    monster.getAttacked(this)
                    this.remove()
                }
            }
        }
    } else if(this.target == "ninjas") {
        var ninja = window.game.ninja
        if(ninja.isDead == false) {
            if(hasCircularCollision(this, ninja)) {
                ninja.getAttacked(this)
                this.remove()
            }
        }
    }
}

Projectile.prototype.remove = function() {
    delete window.game.projectiles[this.id]
}

module.exports = Projectile
