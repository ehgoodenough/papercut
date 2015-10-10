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
        backgroundColor: "orange",
    }
}

Monster.prototype.update = function(delta) {

    var chase = 0
    if (window.game.ninja.y > this.y)
        this.y += 1 * delta
    else 
        this.y -= 1 * delta
    if (window.game.ninja.x > this.x)
        this.x += 1 * delta
    else 
        this.x -= 1 * delta
}

Monster.prototype.getPosition

Monster.prototype.die = function() {
    delete window.game.monsters[this.id]
}

module.exports = Monster
