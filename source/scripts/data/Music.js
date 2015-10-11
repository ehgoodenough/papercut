var DataURI = require("datauri")

var Music = {
    "one": new Audio(DataURI("./source/music/PapercutLoop1final.mp3")),
    "two": new Audio(DataURI("./source/music/PapercutLoop2final.mp3")),
    "three": new Audio(DataURI("./source/music/PapercutLoop3final.mp3"))
}

module.exports = Music
