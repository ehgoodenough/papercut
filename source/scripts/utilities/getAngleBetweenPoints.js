var getAngleBetweenPoints = function(p1, p2) {
    return Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI
}

module.exports = getAngleBetweenPoints
