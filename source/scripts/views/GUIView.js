var React = require("react")

var Images = require("../data/Images")

var GUIView = React.createClass({
    render: function() {
        return (
            <div className="gui-view">
                {this.renderFluxMeter()}
                {this.renderYinYangs()}
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
            backgroundPosition: "bottom",
            backgroundSize: "100% auto"
        }
        return <div style={style}/>
    },
    renderYinYangs: function() {
        var style = {
            top: 16 + "em",
            left: 16 + "em",
            position: "absolute",
        }
        var substyle1 = {
            width: 48 + "em",
            height: 48 + "em",
            marginRight: 8 + "em",
            backgroundSize: "contain",
            backgroundImage: "url(" + Images.gui.yinyang + ")",
            float: "left"
        }
        var substyle2 = {
            width: 48 + "em",
            height: 48 + "em",
            marginRight: 8 + "em",
            backgroundSize: "contain",
            backgroundImage: "url(" + Images.gui.yin + ")",
            float: "left"
        }
        var renderings = new Array()
        for(var i = 0; i < Math.floor(this.props.data.health); i++) {
            renderings.push(<div key={i} style={substyle1}/>)
        }
        if(this.props.data.health % 1 != 0) {
            renderings.push(<div key={-1} style={substyle2}/>)
        }
        return (
            <div style={style}>
                {renderings}
            </div>
        )
    }
})

module.exports = GUIView
