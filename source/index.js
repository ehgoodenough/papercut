var Loop = require("./scripts/utilities/Loop")
var Mouse = require("./scripts/utilities/Mouse")
var Keyboard = require("./scripts/utilities/Keyboard")

var Game = require("./scripts/models/Game")
var Ninja = require("./scripts/models/Ninja")
var Monster = require("./scripts/models/Monster")
var NinjaStar = require("./scripts/models/NinjaStar")

window.WIDTH = 1024
window.HEIGHT = 576

new Game()
new Ninja()
new Monster()
new Monster()
new Monster()

window.view = require("./scripts/views/GameView")

Loop(function(delta) {
    game.time += delta

    var a = 1 //amplitude, it bounces from zero to the amplitude.
    var p = 2 //period, the time it takes to bounce between amplitudes.
    var fluxdelta = ((a - 0.05) / 2) * Math.sin(2 * Math.PI * game.time * (1 / p)) + ((a - 0.05) / 2) + 0.05

    game.ninja.update(fluxdelta)
    for(var id in game.monsters) {
        var monster = game.monsters[id]
        monster.update(delta)
    } for(var id in game.ninjastars) {
        var monster = game.ninjastars[id]
        monster.update(fluxdelta)
    }

    if(window.view != undefined) {
        window.view.forceUpdate()
    }
})
