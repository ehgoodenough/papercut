var React = require("react")

var Images = require("../data/Images")

var GUIView = React.createClass({
    render: function() {
        return (
            <div className="gui-view">
                {this.renderFluxMeter()}
            </div>
        )
    },
    renderFluxMeter: function() {
        var style = {
            opacity: 0.75,
            right: 16 + "em",
            bottom: 16 + "em",
            position: "absolute",
            width: 64 + "em",
            borderRadius: 4 + "em",
            height: (1 - this.props.data.delta) * 128 + "em",
            backgroundImage: "url(" + Images.gui.flux + ")",
            backgroundSize: "100% auto"
        }
        return <div style={style}/>
    }
})

module.exports = GUIView
