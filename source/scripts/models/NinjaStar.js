var ShortID = require("shortid")

var NinjaStar = function(protoninjastar) {
    this.id = ShortID.generate()

    this.x = protoninjastar.x || 0
    this.y = protoninjastar.y || 0

    this.size = 36

    this.speed = 4
    this.rotation = 0
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
    this.rotation += this.speed * 3 * delta
    this.y -= this.speed * delta
}

module.exports = NinjaStar
