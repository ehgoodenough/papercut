var DataURI = require("datauri")

var Images = {
    "paper": {
        "0": DataURI("./source/images/paper-0.png"),
        "1": DataURI("./source/images/paper-1.png"),
        "2": DataURI("./source/images/paper-2.png"),
    },
    "gui": {
        "flux": DataURI("./source/images/gui-flux.png"),
        "yin": DataURI("./source/images/gui-yin.png"),
        "yinyang": DataURI("./source/images/gui-yinyang.png"),
        "play-button": DataURI("./source/images/gui-play-button.png"),
        "quit-button": DataURI("./source/images/gui-quit-button.png"),
        "title-screen": DataURI("./source/images/gui-title-screen.png"),
        "gameover-screen": DataURI("./source/images/gui-gameover-screen.png"),
    },
    "ninja": {
        "moving": {
            "north": DataURI("./source/images/ninja-moving-north.png"),
            "south": DataURI("./source/images/ninja-moving-south.png"),
            "west": DataURI("./source/images/ninja-moving-west.png"),
        },
        "throwing": DataURI("./source/images/ninja-throwing.png"),
        "slashing": DataURI("./source/images/ninja-slashing.png"),
        "dead": DataURI("./source/images/ninja-dead.png")
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
        },
        "grunt": {
            "idle": DataURI("./source/images/skeleton-grunt-idle.png"),
            "attacking": DataURI("./source/images/skeleton-grunt-attacking.png"),
            "attack": DataURI("./source/images/skeleton-grunt-attack.png"),
            "dead": DataURI("./source/images/skeleton-grunt-dead.png"),
        }
    },
    "projectiles": {
        "ninjastar": DataURI("./source/images/projectile-ninjastar.png"),
        "arrow": DataURI("./source/images/projectile-arrow.png")
    }
}

module.exports = Images
