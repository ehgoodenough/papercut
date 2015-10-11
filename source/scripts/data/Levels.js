// Array of levels.
var Levels = [
    // Level 1 - Zombie Intro
    {
        "name" : "Zombies!",
        "music" : null,
        "ninja" : {
            "tx" : 16,
            "ty" : 9,
        },
        "arena" : {
            "tx" : 32,
            "ty" : 18,
        },
        "monsters" : [
            // Left side, top to bottom:
            {"tx" : 8, "ty" : 3, "id" : "archer"},
            {"tx" : 4, "ty" : 9, "id" : "archer"},
            {"tx" : 8, "ty" : 15, "id" : "archer"},
            // Right side, top to bottom:
            {"tx" : 24, "ty" : 3, "id" : "archer"},
            {"tx" : 28, "ty" : 9, "id" : "archer"},
            {"tx" : 24, "ty" : 15, "id" : "archer"},
        ],
    },

    // Level 2 - Skeledude Intro
    {
        "name" : "Meet the Skeleton",
        "music" : null,
        "ninja" : {
            "tx" : 16,
            "ty" : 14,
        },
        "arena" : {
            "tx" : 32,
            "ty" : 18,
        },
        "monsters" : [
            // Top side, left to right
            {"tx" : 8, "ty" : 4, "id" : "grunt"},
            {"tx" : 16, "ty" : 1, "id" : "warlord"},
            {"tx" : 24, "ty" : 4, "id" : "grunt"},
        ],
    },

    // Level 3 - Phalanx
    {
        "name" : "Phalanx",
        "music" : null,
        "ninja" : {
            "tx" : 16,
            "ty" : 14,
        },
        "arena" : {
            "tx" : 32,
            "ty" : 18,
        },
        "monsters" : [
            // Zombie block, left to right and top to bottom
            {"tx" : 12, "ty" : 3, "id" : "grunt"},
            {"tx" : 16, "ty" : 3, "id" : "grunt"},
            {"tx" : 20, "ty" : 3, "id" : "grunt"},
            {"tx" : 10, "ty" : 5, "id" : "grunt"},
            {"tx" : 16, "ty" : 5, "id" : "grunt"},
            {"tx" : 22, "ty" : 5, "id" : "grunt"},
            // Skeleton backup
            {"tx" : 8, "ty" : 1, "id" : "warlord"},
            {"tx" : 16, "ty" : 1, "id" : "warlord"},
            {"tx" : 24, "ty" : 1, "id" : "warlord"},
        ],
    },

    // Level 4 - Introduction to Archery
    {
        "name" : "Crossfire",
        "music" : null,
        "ninja" : {
            "tx" : 16,
            "ty" : 9,
        },
        "arena" : {
            "tx" : 32,
            "ty" : 18,
        },
        "monsters" : [
            // Block of basic enemies to push player away
            {"tx" : 10, "ty" : 6, "id" : "grunt"},
            {"tx" : 12, "ty" : 4, "id" : "grunt"},
            {"tx" : 16, "ty" : 2, "id" : "Warlord"},
            {"tx" : 20, "ty" : 4, "id" : "grunt"},
            {"tx" : 22, "ty" : 6, "id" : "grunt"},

            // Archer flankers to teach the player to go kill them
            {"tx" : 2, "ty" : 16, "id" : "archer"},
            {"tx" : 30, "ty" : 16, "id" : "archer"},

            // Enemy to prevent the player from simply kiting backward
            {"tx" : 16, "ty" : 17, "id" : "warlord"},
        ],
    },

    // Level 5 - Screened Archers
    {
        "name" : "Combined Arms",
        "music" : null,
        "ninja" : {
            "tx" : 16,
            "ty" : 20,
        },
        "arena" : {
            "tx" : 32,
            "ty" : 18,
        },
        "monsters" : [
            // Shieldwall
            {"tx" : 13, "ty" : 5, "id" : "warlord"},
            {"tx" : 15, "ty" : 5, "id" : "warlord"},
            {"tx" : 17, "ty" : 5, "id" : "warlord"},
            {"tx" : 19, "ty" : 5, "id" : "warlord"},

            // Archers behind the lines
            {"tx" : 13, "ty" : 2, "id" : "archer"},
            {"tx" : 19, "ty" : 2, "id" : "archer"},

            // Flank zombies to eat time
            {"tx" : 6, "ty" : 3, "id" : "grunt"},
            {"tx" : 7, "ty" : 4, "id" : "grunt"},
            {"tx" : 8, "ty" : 3, "id" : "grunt"},
            {"tx" : 26, "ty" : 3, "id" : "grunt"},
            {"tx" : 25, "ty" : 4, "id" : "grunt"},
            {"tx" : 24, "ty" : 3, "id" : "grunt"},
        ],
    },

    // The big surround, all factors in play
    {
        "name" : "Battle Royale",
        "music" : null,
        "ninja" : {
            "tx" : 16,
            "ty" : 9,
        },
        "arena" : {
            "tx" : 32,
            "ty" : 18,
        },
        "monsters" : [
            // Flank archers
            {"tx" : 3, "ty" : 3, "id" : "archer"},
            {"tx" : 29, "ty" : 15, "id" : "archer"},

            // Archer chaff screen
            {"tx" : 4, "ty" : 4, "id" : "grunt"},
            {"tx" : 28, "ty" : 14, "id" : "grunt"},

            // Chaff surround
            // Left side, top to bottom:
            {"tx" : 8, "ty" : 3, "id" : "grunt"},
            {"tx" : 4, "ty" : 9, "id" : "grunt"},
            {"tx" : 8, "ty" : 15, "id" : "grunt"},
            // Right side, top to bottom:
            {"tx" : 24, "ty" : 3, "id" : "grunt"},
            {"tx" : 28, "ty" : 9, "id" : "grunt"},
            {"tx" : 24, "ty" : 15, "id" : "grunt"},

            // Asymmetrical heavy flankers
            {"tx" : 5, "ty" : 16, "id" : "warlord"},
            {"tx" : 17, "ty" : 2, "id" : "warlord"},
            {"tx" : 30, "ty" : 8, "id" : "warlord"},
        ]
    },
]

module.exports = Levels
