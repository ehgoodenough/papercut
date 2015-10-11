var PlayFab = require("playfab-sdk")
var ShortID = require("shortid")

var TITLE_ID = "B561"

PlayFab.settings.title_id = TITLE_ID
PlayFab.settings.developer_secret_key = "4XIGGU13I3BZOSAYID8C75AB18AFT78TI1JFC6EU5H33SRAXA4"

PlayFab.client.LoginWithCustomID({
    CreateAccount: true,
    CustomId: ShortID.generate(),
    TitleId: TITLE_ID
}, function(error, results) {
    if(error) {
        console.log(error)
    } else {
        console.log(results)
    }
})

module.exports = PlayFab
