var vkey = require("vkey")

var Keyboard = {
    isDown: function(key) {
        if(this.data[key] == undefined) {
            this.data[key] = -1
        }
        return this.data[key] >= 0
    },
    isJustDown: function(key) {
        if(this.data[key] == undefined) {
            this.data[key] = -1
        }
        if(this.data[key] == 0) {
            this.data[key] += 1
            return true
        } else {
            return false
        }
    },
    isUp: function(key) {
        if(this.data[key] == undefined) {
            this.data[key] = -1
        }
        return this.data[key] <= 0
    },
    isJustUp: function(key) {
        if(this.data[key] == undefined) {
            this.data[key] = -1
        }
        if(this.data[key] == -1) {
            this.data[key] -= 1
            return true
        } else {
            return false
        }
    },
    setDown: function(key) {
        this.data[key] = 0
    },
    setUp: function(key) {
        this.data[key] = -1
    },
    data: new Object(),
}

document.addEventListener("keydown", function(event) {
    if(Keyboard.isUp(vkey[event.keyCode])) {
        Keyboard.setDown(vkey[event.keyCode])
    }
})

document.addEventListener("keyup", function(event) {
    Keyboard.setUp(vkey[event.keyCode])
})

module.exports = Keyboard
