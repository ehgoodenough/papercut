window.WIDTH = 1024
window.HEIGHT = 576

var React = require("react")

var GameView = require("./scripts/views/GameView")
var FrameView = require("./scripts/views/FrameView")

var MainView = React.createClass({
    render: function() {
        return (
            <FrameView aspect-ratio="1024x576">
                <GameView/>
            </FrameView>
        )
    }
})

React.render(<MainView/>, document.getElementById("main-view"))
