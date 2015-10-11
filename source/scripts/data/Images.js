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
        },
        "archer": {
            "idle": DataURI("./source/images/skeleton-archer-idle.png"),
            "notching": DataURI("./source/images/skeleton-archer-notching.png"),
            "aiming": DataURI("./source/images/skeleton-archer-aiming.png"),
            "dead": DataURI("./source/images/skeleton-archer-dead.png"),
        }
    },
    "projectiles": {
        "ninjastar": DataURI("./source/images/projectile-ninjastar.png"),
        "arrow": DataURI("./source/images/projectile-arrow.png")
    }
}

module.exports = Images
