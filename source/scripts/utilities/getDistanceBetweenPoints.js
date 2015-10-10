var getDistanceBetweenPoints = function(p1, p2) {
    var x = p1.x - p2.x
    var y = p1.y - p2.y

    return Math.sqrt((x * x) + (y * y))
}

module.exports = getDistanceBetweenPoints
