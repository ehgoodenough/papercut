var ShortID = require("shortid")

var NinjaStar = function(protoninjastar) {
    this.id = ShortID.generate()
    window.game.ninjastars[this.id] = this

    this.x = protoninjastar.x || 0
    this.y = protoninjastar.y || 0

    this.size = 36

    this.rotation = 0
    this.angle = protoninjastar.angle
    this.speed = 4
    this.rotationspeed = 3
}

NinjaStar.prototype.getStyle = function() {
    return {
        width: this.size + "em",
        height: this.size + "em",
        backgroundColor: "#CC00CC",
        top: (this.y - (this.size / 2)) + "em",
        left: (this.x - (this.size / 2)) + "em",
        transform: "rotate(" + this.rotation + "deg)",
    }
}

NinjaStar.prototype.update = function(delta) {
    this.rotation += this.rotationspeed * 3 * delta
    this.x += Math.cos(this.angle * (Math.PI / 180)) * this.speed * delta
    this.y += Math.sin(this.angle * (Math.PI / 180)) * this.speed * delta
}

module.exports = NinjaStar
