var React = require("react")

var EntityView = React.createClass({
    render: function() {
        var style = {}
        if(!!this.props.data && !!this.props.data.getStyle) {
            style = this.props.data.getStyle()
        }
        return (
            <div className="entity-view" style={style}/>
        )
    }
})

module.exports = EntityView
