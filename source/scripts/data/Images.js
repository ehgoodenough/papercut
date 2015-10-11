var DataURI = require("datauri")

var Images = {
    "gui": {
        "flux": DataURI("./source/images/gui-flux.png"),
        "yin": DataURI("./source/images/gui-yin.png"),
        "yinyang": DataURI("./source/images/gui-yinyang.png"),
    },
    "ninja": {
        "moving": {
            "north": DataURI("./source/images/ninja-moving-north.png"),
            "south": DataURI("./source/images/ninja-moving-south.png"),
            "west": DataURI("./source/images/ninja-moving-west.png"),
        },
        "attacking": DataURI("./source/images/ninja-attacking.png"),
    },
    "skeleton": {
        "warlord": {
            "idle": DataURI("./source/images/skeleton-warlord-idle.png"),
            "attacking": DataURI("./source/images/skeleton-warlord-attacking.png"),
            "attack": DataURI("./source/images/skeleton-warlord-attack.png"),
            "dead": DataURI("./source/images/skeleton-warlord-dead.png"),
        }
    },
    "ninjastar": DataURI("./source/images/ninjastar.png"),
}

module.exports = Images
