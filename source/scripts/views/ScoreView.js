var React = require("react")

var ScoreView = React.createClass({
    render: function() {
        return (
            <div style={{
                color: "#EEE",
                fontSize: "48em"
            }}>
                <b style={{color: "#C00"}}>{this.props.data.name}: </b>
                <span>{this.props.data.score}</span>
            </div>
        )
    }
})

module.exports = ScoreView
