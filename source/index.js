var Loop = require("./scripts/utilities/Loop")
var Keyboard = require("./scripts/utilities/Keyboard")

var Game = require("./scripts/models/Game")
var Ninja = require("./scripts/models/Ninja")
var Monster = require("./scripts/models/Monster")
var NinjaStar = require("./scripts/models/NinjaStar")

var GameView = require("./scripts/views/GameView")

window.WIDTH = 1024
window.HEIGHT = 576

window.game = new Game()
game.ninja = new Ninja()
for(var i = 0; i < 3; i++) {
    var monster = new Monster()
    game.monsters[monster.id] = monster
}
var ninjastar = new NinjaStar({
    x: game.ninja.x, y: game.ninja.y
})
game.ninjastars[ninjastar.id] = ninjastar

console.log(game)

Loop(function(delta) {
    game.time += delta

    var a = 1 //amplitude, it bounces from zero to the amplitude.
    var p = 2 //period, the time it takes to bounce between amplitudes.
    var fluxdelta = ((a - 0.05) / 2) * Math.sin(2 * Math.PI * game.time * (1 / p)) + ((a - 0.05) / 2) + 0.05

    game.ninja.update(fluxdelta)
    for(var id in game.monsters) {
        var monster = game.monsters[id]
        monster.update(fluxdelta)
    } for(var id in game.ninjastars) {
        var monster = game.ninjastars[id]
        monster.update(fluxdelta)
    }

    GameView.forceUpdate()
})
