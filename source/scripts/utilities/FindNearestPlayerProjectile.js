var getDistanceBetweenPoints = require("../utilities/getDistanceBetweenPoints")

var findNearestPlayerProjectile = function(point) {

    var nearestPlayerProjectile = {}
    var closest = 99999
    for (var projectile in window.game.ninjastars){
        if (projectile.type === "ninjastar"){ 
            var distance = getDistanceBetweenPoints({x: projectile.x y: projectile.y }, {x: point.x y: point.y})
            if (distance < closest){
                nearestPlayerProjectile = projectile
            }
        }
    }
}

module.exports = findNearestPlayerProjectile
