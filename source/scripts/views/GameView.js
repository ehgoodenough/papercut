var React = require("react")

var FrameView = require("./FrameView")
var EntityView = require("./EntityView")

var GameView = React.createClass({
    render: function() {
        return (
            <FrameView aspect-ratio="1024x576">
                {this.renderMonsters()}
                {this.renderNinja()}
            </FrameView>
        )
    },
    renderMonsters: function() {
        var renderings = []
        if(window.game != undefined) {
            for(var id in window.game.monsters) {
                var monster = window.game.monsters[id]
                renderings.push(
                    <EntityView key={monster.id}
                        style={monster.render()}/>
                )
            }
        }
        return renderings
    },
    renderNinja: function() {
        if(window.game != undefined && window.game.ninja != undefined) {
            return <EntityView style={window.game.ninja.render()}/>
        }
    }
})

module.exports = React.render(<GameView/>, document.getElementById("game-view"))
