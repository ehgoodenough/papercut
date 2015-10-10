var vkey = require("vkey")

var Input = {
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
    if(Input.isUp(vkey[event.keyCode])) {
        Input.setDown(vkey[event.keyCode])
    }
})

document.addEventListener("keyup", function(event) {
    Input.setUp(vkey[event.keyCode])
})

module.exports = Input
