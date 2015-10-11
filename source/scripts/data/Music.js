var DataURI = require("datauri")

var Music = {
    "crazy": new Audio(DataURI("./source/music/crazy.mp3")),
    "chaos": new Audio(DataURI("./source/music/chaos.mp3")),
    "final": new Audio(DataURI("./source/music/final.mp3"))
}

module.exports = Music
