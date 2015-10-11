var Ninja = require("./Ninja")
var SkeletonGrunt = require("./SkeletonGrunt")
var SkeletonWarlord = require("./SkeletonWarlord")
var NinjaStar = require("./NinjaStar")

var Levels = require("../data/Levels")

window.Game = function(lvl) {
    window.game = this

    this.lvl = lvl

    this.time = 0

    this.ninja = {}
    this.monsters = {}
    this.ninjastars = {}

    new Ninja()
    for(var index in Levels[lvl].monsters) {
        var monster = Levels[lvl].monsters[index]
        if (monster.id === "grunt"){
            new SkeletonGrunt(monster)
        }
        else if (monster.id === "warlord"){
            new SkeletonWarlord(monster)
        }

    }
}

module.exports = Game
