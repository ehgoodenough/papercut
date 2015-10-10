var React = require("react")
var ShortID = require("shortid")

var Loop = require("./scripts/utilities/Loop")
var Input = require("./scripts/utilities/Input")
var GameView = require("./scripts/views/GameView")

var WIDTH = 1024
var HEIGHT = 576

var Game = function() {
    window.game = this

    this.time = 0

    this.ninja = {}
    this.monsters = {}
}

var Ninja = function() {
    window.game.ninja = this

    this.x = WIDTH / 2
    this.y = HEIGHT / 2
    this.size = 48
}

Ninja.prototype.render = function() {
    return {
        width: this.size + "em",
        height: this.size + "em",
        left: (this.x - (this.size / 2)) + "em",
        top: (this.y - (this.size / 2)) + "em",
        backgroundColor: "#CC0000",
    }
}

Ninja.prototype.update = function(delta) {
    if(Input.isDown("W")) {
        this.y -= 1 //?!
    }
}

var Monster = function() {
    this.id = ShortID.generate()
    window.game.monsters[this.id] = this

    this.x = Math.floor(Math.random() * WIDTH)
    this.y = Math.floor(Math.random() * HEIGHT)
    this.size = 48
}

Monster.prototype.render = function() {
    return {
        width: this.size + "em",
        height: this.size + "em",
        left: this.x - (this.size / 2) + "em",
        top: this.y - (this.size / 2) + "em",
        backgroundColor: "#00CC00",
    }
}

Monster.prototype.update = function(delta) {
    // console.log(delta)
}

new Game()
new Monster()
new Monster()
new Monster()
new Monster()
new Ninja()

Loop(function(delta) {
    game.time += delta

    var a = 1 //amplitude, it bounces from zero to the amplitude.
    var p = 1 //period, the time it takes to bounce between amplitudes.
    var fluxdelta = (a / 2) * Math.sin(2 * Math.PI * game.time * (1 / p)) + (a / 2)

    window.game.ninja.update(delta)
    for(var id in window.game.monsters) {
        var monster = window.game.monsters[id]
        monster.update(delta)
    }

    GameView.forceUpdate()
})
