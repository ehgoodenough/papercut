var React = require("react")

var EntityView = require("./EntityView")
var ForEachView = require("./ForEachView")
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
                <div style={{
                    width: "100%",
                    height: "100%",
                    backgroundSize: "100%",
                    backgroundImage: "url(" + Images.gui.winscreen + ")"
                }}/>
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
        new Game(parseInt(getURLQuery("level")) || 0)
        window.admin = {
            show: "winscreen"
        }
        Loop(function(delta) {
            if(!!admin.show) {
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
