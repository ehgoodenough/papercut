var PlayFabSDK = require("playfab-sdk")
var ShortID = require("shortid")

var PlayFab = function(){

}

PlayFab.prototype.sendHighScoreAndRetrieveHighScoreList = function(name, score, callback){
    var TITLE_ID = "B561"
    PlayFabSDK.settings.title_id = TITLE_ID
    PlayFabSDK.settings.developer_secret_key = "4XIGGU13I3BZOSAYID8C75AB18AFT78TI1JFC6EU5H33SRAXA4"
    PlayFabSDK.client.LoginWithCustomID({
        CreateAccount: true,
        CustomId: name || ShortID.generate(),
        TitleId: TITLE_ID,
    }, function(error, results) {
        PlayFabSDK.client.UpdateUserStatistics({
            "UserStatistics": {
                "HighScore": score
            }
        }, function(error, results) {
            PlayFabSDK.client.GetLeaderboard({
                "StatisticName": "HighScore",
                "StartPosition": 0,
                "MaxResultsCount": 20
            }, function(error, results) {
                callback(results)
            })
        })
    })
}

module.exports = PlayFab