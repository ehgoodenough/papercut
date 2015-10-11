var Ninja = require("./Ninja")
var Projectile = require("./Projectile")
var SkeletonGrunt = require("./SkeletonGrunt")
var SkeletonArcher = require("./SkeletonArcher")
var SkeletonWarlord = require("./SkeletonWarlord")

var Levels = require("../data/Levels")
var Images = require("../data/Images")
var MusicManager = require("../utilities/MusicManager")

var Game = function(level_id) {
    this.level_id = level_id
    var protolevel = Levels[level_id]

    window.game = this

    this.time = 0
    this.ninja = {}
    this.monsters = {}
    this.projectiles = {}
    this.aoes = {}

    new Ninja(protolevel.ninja)
    for(var index in protolevel.monsters) {
        var monster = protolevel.monsters[index]
        if(monster.id === "grunt") {
            new SkeletonGrunt(monster)
        } else if(monster.id === "warlord") {
            new SkeletonWarlord(monster)
        } else if(monster.id === "archer") {
            new SkeletonArcher(monster)
        }    
    }

    if(!!protolevel.music) {
        MusicManager.play(protolevel.music)
    }

    this.background = protolevel.background || 0
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
            new Game(this.level_id + 1)
        }.bind(this), 5000)
    }
}

Game.prototype.checkLoseCondition = function() {
    if(window.game.ninja.isDead == true) {
        window.setTimeout(function() {
            admin.show = "losescreen"
            new Game(this.level_id)
        }.bind(this), 5000)
    }
}

Game.prototype.getStyle = function() {
    return {
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundImage: "url(" + Images.paper[this.background] + ")",
    }
}

module.exports = Game
