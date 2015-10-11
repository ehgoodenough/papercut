var Ninja = require("./Ninja")
var Projectile = require("./Projectile")
var SkeletonGrunt = require("./SkeletonGrunt")
var SkeletonArcher = require("./SkeletonArcher")
var SkeletonWarlord = require("./SkeletonWarlord")

var Levels = require("../data/Levels")

var Game = function(lvl) {
    window.game = this

    this.lvl = lvl

    this.time = 0

    this.ninja = {}
    this.monsters = {}
    this.projectiles = {}

    new Ninja(Levels[lvl].ninja)
    for(var index in Levels[lvl].monsters) {
        var monster = Levels[lvl].monsters[index]
        if(monster.id === "grunt") {
            new SkeletonGrunt(monster)
        } else if(monster.id === "warlord") {
            new SkeletonWarlord(monster)
        } else if(monster.id === "archer") {
            new SkeletonArcher(monster)
        }
        else if (monster.id === "archer"){
            new SkeletonArcher(monster)
        }
    }
}

Game.prototype.checkWinCondition = function() {
    var allAreDead = true
    for(var id in this.monsters) {
        var monster = this.monsters[id]
        if(monster.alive == true) {
            allAreDead = false
            break
        }
    }
    if(allAreDead == true) {
        window.setTimeout(function() {
            new Game(this.lvl + 1)
        }.bind(this), 5000)
    }
}

Game.prototype.checkLoseCondition = function() {
    if(window.game.ninja.isDead == true) {
        window.setTimeout(function() {
            new Game(this.lvl)
        }.bind(this), 5000)
    }
}

module.exports = Game
