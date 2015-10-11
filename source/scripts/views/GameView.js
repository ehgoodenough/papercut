var React = require("react")

var FrameView = require("./FrameView")
var EntityView = require("./EntityView")
var ForEachView = require("./ForEachView")
var GUIView = require("./GUIView")

var GameView = React.createClass({
    render: function() {
        var game = window.game || {}
        return (
            <FrameView aspect-ratio="1024x576">
                <EntityView data={game}/>
                <ForEachView data={game.monsters} view={EntityView}/>
                <EntityView data={game.ninja}/>
                <ForEachView data={game.aoes} view={EntityView}/>
                <ForEachView data={game.projectiles} view={EntityView}/>
                <GUIView data={game.ninja}/>
            </FrameView>
        )
    }
})

module.exports = React.render(<GameView/>, document.getElementById("game-view"))
