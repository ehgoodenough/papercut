var React = require("react")

var EntityView = React.createClass({
    render: function() {
        return (
            <div className="entity-view"
                style={this.props.data.getStyle()}/>
        )
    }
})

module.exports = EntityView
