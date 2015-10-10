var getDistanceBetweenPoints = require("./getDistanceBetweenPoints")

var hasCircularCollision = function(p1, p2) {
    var mindistance = (p1.size / 2) + (p2.size / 2)
    var distance = getDistanceBetweenPoints(p1, p2)
    return distance < mindistance
}

module.exports = hasCircularCollision
