var Mouse = require("../utilities/Mouse")
var Keyboard = require("../utilities/Keyboard")
var getAngleBetweenPoints = require("../utilities/getAngleBetweenPoints")

var NinjaStar = require("./NinjaStar")

var Images = require("../data/Images.js")

var Ninja = function() {
    window.game.ninja = this

    this.x = WIDTH / 2
    this.y = HEIGHT / 2
    
    this.vx = 0
    this.vy = 0
    this.vmin = 0.001
    this.vmax = 0.075

    this.size = 48

    this.speed = 3
    this.direction = +1
    this.state = {
        attacking: 0
    }

    this.health = 2.5

    this.delta = 1
}

Ninja.prototype.getStyle = function() {
    var image = Images.ninja.moving.west
    if(this.state.attacking > 0) {
        image = Images.ninja.attacking
    }
    return {
        width: (this.size * 2) + "em",
        height: (this.size * 2) + "em",
        left: (this.x - ((this.size * 2) / 2)) + "em",
        top: (this.y - ((this.size * 2) / 2)) + "em",
        backgroundSize: "contain",
        backgroundImage: "url('" + image + "')",
        transform: "scaleX(" + this.direction + ")",
        transitionProperty: "transform",
        transitionDuration: "0.25s"
    }
}

Ninja.prototype.update = function(delta) {
    if(this.state.attacking > 0) {
        this.state.attacking -= delta
    }

    this.delta = delta

    if(Keyboard.isDown("W")
    || Keyboard.isDown("<up>")) {
        this.y -= this.speed * delta
    } if(Keyboard.isDown("S")
    || Keyboard.isDown("<down>")) {
        this.y += this.speed * delta
    } if(Keyboard.isDown("A")
    || Keyboard.isDown("<left>")) {
        this.x -= this.speed * delta
        this.direction = +1
    } if(Keyboard.isDown("D")
    || Keyboard.isDown("<right>")) {
        this.x += this.speed * delta
        this.direction = -1
    }

    while(Mouse.events.length > 0) {
        var event = Mouse.events.shift()
        if(event.type == "click") {
            this.state.attacking = 3
            var angle = getAngleBetweenPoints(this, event)
            new NinjaStar({
                x: this.x,
                y: this.y,
                angle: angle
            })
        }
    }
}

Ninja.prototype.getAttacked = function(){
    //TODO
}

module.exports = Ninja
