var DataURI = require("datauri")

var Music = {
    "crazy": new Audio(DataURI("./source/music/PapercutLoop1final.mp3")),
    "chaos": new Audio(DataURI("./source/music/PapercutLoop2final.mp3")),
    "final": new Audio(DataURI("./source/music/PapercutLoop3final.mp3"))
}

module.exports = Music
