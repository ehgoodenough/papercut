var ShortID = require("shortid")

var Images = require("../data/Images")
var hasCircularCollision = require("../utilities/hasCircularCollision")

var AOE = function(protoaoe) {
    this.id = ShortID.generate()
    window.game.aoes[this.id] = this

    this.x = protoaoe.x || 0
    this.y = protoaoe.y || 0
    this.width = protoaoe.width || 32
    this.height = protoaoe.height || 32
    this.size = this.width
    this.damage = protoaoe.damage || 1
    this.target = protoaoe.target || "monsters"
    this.opacity = 0.75

    if(this.target == "monsters") {
        for(var id in window.game.monsters) {
            var monster = window.game.monsters[id]
            if(hasCircularCollision(this, monster)) {
                monster.getAttacked(this)
            }
        }
    } else if(this.target == "ninjas") {
        var ninja = window.game.ninja
        if(hasCircularCollision(this, ninja)) {
            ninja.getAttacked(this)
        }
    }
}

AOE.prototype.getStyle = function() {
    return {
        borderRadius: 99 + "em",
        opacity: this.opacity.toFixed(2),
        width: this.width + "em",
        height: this.height + "em",
        top: (this.y - (this.height / 2)) + "em",
        left: (this.x - (this.width / 2)) + "em",
        backgroundColor: "#C00",
    }
}

AOE.prototype.update = function(fluxdelta) {
    if(this.target === "monsters"){
        this.opacity -= 0.25 * fluxdelta
    } else if(this.target === "ninjas"){
        this.opacity -= 0.02 * fluxdelta
    }
    if(this.opacity <= 0) {
        this.remove()
    }
}

AOE.prototype.remove = function() {
    delete window.game.aoes[this.id]
}

module.exports = AOE
