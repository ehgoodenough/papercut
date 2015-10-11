var Ninja = require("./Ninja")
var SkeletonGrunt = require("./SkeletonGrunt")
var SkeletonWarlord = require("./SkeletonWarlord")
var NinjaStar = require("./NinjaStar")

var Levels = require("../data/Levels")
var PlayFab = require("../utilities/PlayFab")

var Game = function(lvl) {
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
            PlayFab.client.LogEvent({
                EventName: "deaths",
                Body: {
                    "level_number": this.lvl
                }
            }, function(error, results) {
                if(error) {
                    console.log("error:", error)
                } else {
                    consle.log(results)
                }
            })
            new Game(this.lvl)
        }.bind(this), 5000)
    }
}

module.exports = Game
