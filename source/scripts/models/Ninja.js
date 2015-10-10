var Keyboard = require("../utilities/Keyboard")

var Ninja = function() {
    this.x = WIDTH / 2
    this.y = HEIGHT / 2

    this.vx = 0
    this.vy = 0
    this.vmin = 0.001
    this.vmax = 0.075

    this.size = 48

    this.speed = 3
    this.direction = +1
}

Ninja.prototype.getStyle = function() {
    return {
        width: this.size + "em",
        height: this.size + "em",
        left: (this.x - (this.size / 2)) + "em",
        top: (this.y - (this.size / 2)) + "em",
        backgroundColor: "#CC0000",
    }
}

Ninja.prototype.update = function(delta) {
    if(Keyboard.isDown("W")
    || Keyboard.isDown("<up>")) {
        this.y -= this.speed * delta
    } if(Keyboard.isDown("S")
    || Keyboard.isDown("<down>")) {
        this.y += this.speed * delta
    } if(Keyboard.isDown("A")
    || Keyboard.isDown("<left>")) {
        this.x -= this.speed * delta
        this.direction = -1
    } if(Keyboard.isDown("D")
    || Keyboard.isDown("<right>")) {
        this.x += this.speed * delta
        this.direction = +1
    }
}

module.exports = Ninja
