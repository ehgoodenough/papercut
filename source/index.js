var Loop = require("./scripts/utilities/Loop")
var Mouse = require("./scripts/utilities/Mouse")
var Keyboard = require("./scripts/utilities/Keyboard")
var getURLQuery = require("./scripts/utilities/getURLQuery")

var Game = require("./scripts/models/Game")
var Ninja = require("./scripts/models/Ninja")
var Monster = require("./scripts/models/Monster")
var NinjaStar = require("./scripts/models/NinjaStar")

var Levels = require("./scripts/data/Levels")
var Images = require("./scripts/data/Images")
var Music = require("./scripts/data/Music")

Music.one.loop = true
Music.one.volume = 0.1
Music.one.play()

window.WIDTH = 1024
window.HEIGHT = 576

new Game()
new Ninja()
var lvl = getURLQuery("level") || 0
for(var index in Levels[lvl].monsters) {
    var monster = Levels[lvl].monsters[index]
    new Monster(monster)
}

window.view = require("./scripts/views/GameView")

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

    if(window.view != undefined) {
        window.view.forceUpdate()
    }
})
