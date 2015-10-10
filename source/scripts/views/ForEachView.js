var React = require("react")

var ForEachView = React.createClass({
    render: function() {
        var renders = new Array()
        var View = this.props.view
        for(var id in this.props.data) {
            var data = this.props.data[id]
            renders.push(
                <View key={id}
                    data={data}/>
            )
        }
        return (
            <div>{renders}</div>
        )
    }
})

module.exports = ForEachView
