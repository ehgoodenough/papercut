var datauri = require("datauri")

var Images = {
    "ninja": {
        "move": {
            "north": datauri("./source/images/ninja-north.png"),
            "south": datauri("./source/images/ninja-south.png"),
            "west": datauri("./source/images/ninja-west.png"),
        }
    },
    "ninjastar": datauri("./source/images/ninjastar.png"),
}

module.exports = Images
