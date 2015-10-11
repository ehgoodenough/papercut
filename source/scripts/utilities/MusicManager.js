var Music = require("../data/Music")

var MusicManager = {
    play: function(music_name) {
        if(!!this.music) {
            this.music.pause()
        }
        this.music = Music[music_name]
        this.music.loop = true
        this.music.volume = 1
        this.music.play()
    }
}

module.exports = MusicManager
