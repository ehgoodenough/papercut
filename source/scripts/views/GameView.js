var React = require("react")

var EntityView = require("./EntityView")
var ForEachView = require("./ForEachView")
var ScoreView = require("./ScoreView")
var GUIView = require("./GUIView")

var Game = require("../models/Game")
var Images = require("../data/Images")
var Loop = require("../utilities/Loop")
var Keyboard = require("../utilities/Keyboard")
var getURLQuery = require("../utilities/getURLQuery")

var GameView = React.createClass({
    render: function() {
        var game = window.game
        if(!!game) {
            if(admin.show == "titlescreen") {
                return (
                    <div style={{
                        width: "100%",
                        height: "100%",
                        backgroundSize: "cover",
                        backgroundImage: "url(" + Images.gui.titlescreen + ")"
                    }}>
                        <div style={{
                            width: "200em",
                            height: "100em",
                            position: "absolute",
                            left: "50em",
                            bottom: "50em",
                            backgroundSize: "cover",
                            backgroundImage: "url(" + Images.gui.playbutton + ")",
                            hover: "pointer",
                        }} onClick={function() {
                            admin.show = ""
                        }}/>
                        <div style={{
                            opacity: "0.5",
                            width: "200em",
                            height: "100em",
                            position: "absolute",
                            left: 200 + 50 + 50 + "em",
                            bottom: "50em",
                            backgroundSize: "cover",
                            backgroundImage: "url(" + Images.gui.quitbutton + ")"
                        }}/>
                    </div>
                )
            } else if(admin.show == "losescreen") {
                return (
                    <div style={{
                        width: "100%",
                        height: "100%",
                        backgroundSize: "cover",
                        backgroundImage: "url(" + Images.gui.losescreen + ")"
                    }}>
                        <div style={{
                            width: "200em",
                            height: "100em",
                            position: "absolute",
                            left: "50em",
                            bottom: "50em",
                            backgroundSize: "cover",
                            backgroundImage: "url(" + Images.gui.playbutton + ")",
                            hover: "pointer",
                        }} onClick={function() {
                            admin.show = ""
                        }}/>
                    </div>
                )
            } else if(admin.show == "winscreen") {
                return (
                    <div style={{
                        width: "100%",
                        minHeight: "900%",
                        backgroundSize: "100% auto",
                        backgroundImage: "url(" + Images.gui.winscreen + ")",
                        position: "absolute",
                        top: Math.min(0, admin.scroll),
                        backgroundRepeat: "no-repeat",
                    }}/>
                )
            } else if(admin.show == "highscores") {
                var scores = [
                    {name: "asdf", score: "123"},
                    {name: "asdf", score: "123"},
                    {name: "asdf", score: "123"},
                ]
                return (
                    <div style={{padding: "32em"}}>
                        <span style={{fontWeight: "bold", fontSize: "128em"}}>HIGHSCORES!</span>
                        <ForEachView data={scores} view={ScoreView}/>
                    </div>
                )
            } else {
                return (
                    <div className="game-view">
                        <EntityView data={game}/>
                        <ForEachView data={game.monsters} view={EntityView}/>
                        <EntityView data={game.ninja}/>
                        <ForEachView data={game.aoes} view={EntityView}/>
                        <ForEachView data={game.projectiles} view={EntityView}/>
                        <GUIView data={game.ninja}/>
                    </div>
                )
            }
        } else {
            return <div/>
        }
    },
    componentDidMount: function() {
        this.startGame()
    },
    startGame: function() {
        window.admin = {
            show: "titlescreen",
            scroll: 100
        }
        if(getURLQuery("level") != "") {
            new Game(parseInt(getURLQuery("level")))
            admin.show = "winscreen"
        }  else {
            new Game(0)
        }
        Loop(function(delta) {
            if(admin.show == "titlescreen") {
                if(Keyboard.isDown("<enter>")) {
                    admin.show = ""
                }
            } else if(admin.show == "losescreen") {
                if(Keyboard.isDown("<enter>")
                || Keyboard.isDown("W")
                || Keyboard.isDown("S")
                || Keyboard.isDown("D")
                || Keyboard.isDown("A")
                || Keyboard.isDown("<space>")
                || Keyboard.isDown("<up>")
                || Keyboard.isDown("<down>")
                || Keyboard.isDown("<left>")
                || Keyboard.isDown("<right>")) {
                    admin.show = ""
                }
            } else if(admin.show == "winscreen") {
                if(Keyboard.isDown("<enter>")
                || Keyboard.isDown("W")
                || Keyboard.isDown("S")
                || Keyboard.isDown("D")
                || Keyboard.isDown("A")
                || Keyboard.isDown("<space>")
                || Keyboard.isDown("<up>")
                || Keyboard.isDown("<down>")
                || Keyboard.isDown("<left>")
                || Keyboard.isDown("<right>")) {
                    delta *= 10
                }
                admin.scroll -= 50 * delta
                if(admin.scroll <= -1100) {
                    admin.scroll = -1100
                    admin.show = "highscores"
                    window.setTimeout(function() {
                        admin.name = prompt("Enter your name for the highscores", admin.name)
                    }, 5000)
                }
            } else if(admin.show == "highscores") {
                if(Keyboard.isDown("<enter>")) {
                    admin.show = "titlescreen"
                }
            } else {
                if(Keyboard.isDown("<escape>")) {
                    admin.show = "titlescreen"
                }
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
            }
            this.forceUpdate()
        }.bind(this))
    }
})

module.exports = GameView
