var ShortID = require("shortid")

var Monster = function(protomonster) {
    this.id = ShortID.generate()
    window.game.monsters[this.id] = this
    console.log(protomonster)
    this.x = protomonster.x || protomonster.tx * 32 || 0
    this.y = protomonster.y || protomonster.ty * 32 || 0
    this.size = 48
    this.speed = 1
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
        this.y += this.speed * delta
    else
        this.y -= this.speed * delta
    if (window.game.ninja.x > this.x)
        this.x += this.speed * delta
    else
        this.x -= this.speed * delta
}

Monster.prototype.getPosition

Monster.prototype.die = function() {
    delete window.game.monsters[this.id]
}

Monster.prototype.getAttacked = function(source) {
    // put stuff here skylar
}

module.exports = Monster
