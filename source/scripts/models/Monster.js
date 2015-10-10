var ShortID = require("shortid")

var Monster = function() {
    this.id = ShortID.generate()
    window.game.monsters[this.id] = this

    this.x = Math.floor(Math.random() * WIDTH)
    this.y = Math.floor(Math.random() * HEIGHT)
    this.size = 48
}

Monster.prototype.getStyle = function() {
    return {
        width: this.size + "em",
        height: this.size + "em",
        left: this.x - (this.size / 2) + "em",
        top: this.y - (this.size / 2) + "em",
        backgroundColor: "#00CC00",
    }
}

Monster.prototype.update = function(delta) {
    this.x += 3 * delta
}

Monster.prototype.die = function() {
    delete window.game.monsters[this.id]
}

Monster.prototype.getAttacked = function(source) {
    // put stuff here skylar
}

module.exports = Monster
