var Mouse = {
    events: []
}

document.addEventListener("click", function(event) {
    var x = event.clientX
    var y = event.clientY

    var html = document.getElementById("frame-view")
    var css = window.getComputedStyle(html)
    var scale = Number(css.fontSize.match(/(\d+(\.\d+)?)px$/)[1])
    var offset = {
        x: html.offsetLeft,
        y: html.offsetTop
    }

    x -= offset.x
    y -= offset.y
    x /= scale
    y /= scale
    x = Math.floor(x)
    y = Math.floor(y)

    Mouse.events.push({
        type: "click",
        x: x, y: y
    })
})

module.exports = Mouse
