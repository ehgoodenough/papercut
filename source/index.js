var Loop = require("./scripts/utilities/Loop")
var Mouse = require("./scripts/utilities/Mouse")
var Keyboard = require("./scripts/utilities/Keyboard")
var getURLQuery = require("./scripts/utilities/getURLQuery")

var Game = require("./scripts/models/Game")

window.WIDTH = 1024
window.HEIGHT = 576

var lvl = parseInt(getURLQuery("level")) || 0
new Game(lvl)

window.view = require("./scripts/views/GameView")

Loop(function(delta) {
    game.time += delta

    var a = 1 //amplitude, it bounces from zero to the amplitude.
    var p = 2 //period, the time it takes to bounce between amplitudes.
    var fluxdelta = ((a - 0.05) / 2) * Math.sin(2 * Math.PI * game.time * (1 / p)) + ((a - 0.05) / 2) + 0.05

    game.ninja.update(fluxdelta, delta)
    for(var id in game.monsters) {
        game.monsters[id].update(fluxdelta)
    } for(var id in game.projectiles) {
        game.projectiles[id].update(fluxdelta)
    } for(var id in game.aoes) {
        game.aoes[id].update(fluxdelta)
    }

    if(window.view != undefined) {
        window.view.forceUpdate()
    }
})
