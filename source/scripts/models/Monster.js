var ShortID = require("shortid")

var Monster = function() {
    this.id = ShortID.generate()
    window.game.monsters[this.id] = this

    this.x = Math.floor(Math.random() * WIDTH)
    this.y = Math.floor(Math.random() * HEIGHT)
    this.size = 48
    this.speed = 1
    this.currentAction = null
    this.attackRange = 32
}

Monster.prototype.getStyle = function() {
    return {
        width: this.size + "em",
        height: this.size + "em",
        left: this.x - (this.size / 2) + "em",
        top: this.y - (this.size / 2) + "em",
        backgroundColor: "orange",
    }
}

Monster.prototype.update = function(delta) {

    if(delta > .9) {
        if ((window.game.ninja.y - this.y < this.attackRange &&
            window.game.ninja.x - this.x < this.attackRange) ||
            (window.game.ninja - this.x > -this.attackRange &&
            window.game.ninja - this.y > -this.attackRange)){
            this.currentAction = {}  //TODO: Attack!
        }
        else{
            this.currentAction = { 
                moveTo: {
                    x: window.game.ninja.x, 
                    y: window.game.ninja.y
                }
            }
        }
    }
    console.log("x "  + window.game.ninja.x)
    console.log("y " + window.game.ninja.y)
    if (this.currentAction && this.currentAction.moveTo){
        if (this.currentAction.moveTo.y > this.y)
            this.y += this.speed * delta
        else 
            this.y -= this.speed * delta
        if (this.currentAction.moveTo.x > this.x)
            this.x += this.speed * delta
        else 
            this.x -= this.speed * delta
    }

    
}

Monster.prototype.getPosition = function() {
    this.x
}

Monster.prototype.die = function() {
    delete window.game.monsters[this.id]
}

module.exports = Monster
