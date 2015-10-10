var React = require("react")

var FrameView = require("./FrameView")
var EntityView = require("./EntityView")
var ForEachView = require("./ForEachView")

var GameView = React.createClass({
    render: function() {
        var game = window.game || {}
        return (
            <FrameView aspect-ratio="1024x576">
                <ForEachView data={game.monsters} view={EntityView}/>
                <EntityView data={game.ninja}/>
                <ForEachView data={game.ninjastars} view={EntityView}/>
            </FrameView>
        )
    }
})

module.exports = React.render(<GameView/>, document.getElementById("game-view"))
