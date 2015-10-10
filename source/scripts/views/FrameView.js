var React = require("react")

var FrameView = React.createClass({
    getDefaultProps: function() {
        return {
            "aspect-ratio": "1920x1080"
        }
    },
    render: function() {
        return (
            <div id="frame-view" {...this.props}
                className={"_" + this.props["aspect-ratio"]}/>
        )
    }
})

module.exports = FrameView
