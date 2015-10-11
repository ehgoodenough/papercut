module.exports = [
// Array of levels.
    // Level 1 - Zombie Intro
    // Goal: teach the player to punch a hole in a zombie surround and kite.
    {
        "name" : "Zombies!",
        "music" : "crazy",
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
            {"tx" : 8, "ty" : 3, "id" : "grunt"},
        ],
    },

    // Level 2 - Skeledude Intro
    // Teach the player to flank the skeleton shield guys
    {
        "name" : "Meet the Skeleton",
        "music" : "crazy",
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
    // Dealing with multiple, supported shield dudes.  Not thrilled with this one.
    {
        "name" : "Phalanx",
        "music" : "crazy",
        "ninja" : {
            "tx" : 16,
            "ty" : 14,
        },
        "arena" : {
            "tx" : 32,
            "ty" : 18,
        },
        "monsters" : [
            // Grunt wedges to screen and act as murderable chaff
            {"tx" : 12, "ty" : 3, "id" : "grunt"},
            {"tx" : 13, "ty" : 5, "id" : "grunt"},
            {"tx" : 14, "ty" : 3, "id" : "grunt"},

            {"tx" : 18, "ty" : 3, "id" : "grunt"},
            {"tx" : 19, "ty" : 5, "id" : "grunt"},
            {"tx" : 20, "ty" : 3, "id" : "grunt"},
            // Skeleton backup
            {"tx" : 8, "ty" : 1, "id" : "warlord"},
            {"tx" : 16, "ty" : 1, "id" : "warlord"},
            {"tx" : 24, "ty" : 1, "id" : "warlord"},
        ],
    },

    // Level 4 - Introduction to Archery
    // Teach the player to rush and eliminate unscreened archers.
    {
        "name" : "Crossfire",
        "music" : "chaos",
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
            {"tx" : 10, "ty" : 5, "id" : "grunt"},
            {"tx" : 12, "ty" : 3, "id" : "grunt"},
            {"tx" : 16, "ty" : 1, "id" : "Warlord"},
            {"tx" : 20, "ty" : 3, "id" : "grunt"},
            {"tx" : 22, "ty" : 5, "id" : "grunt"},

            // Archer flankers to teach the player to go kill them
            {"tx" : 2, "ty" : 16, "id" : "archer"},
            {"tx" : 30, "ty" : 16, "id" : "archer"},

            // Enemy to prevent the player from simply kiting backward
            {"tx" : 16, "ty" : 18, "id" : "warlord"},
        ],
    },

    // Level 5 - Screened Archers
    // Now make the player work for the archer solution.
    {
        "name" : "Combined Arms",
        "music" : "chaos",
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
            {"tx" : 5, "ty" : 1, "id" : "archer"},
            {"tx" : 27, "ty" : 1, "id" : "archer"},

            // Flank zombies to eat time
            {"tx" : 6, "ty" : 3, "id" : "grunt"},
            {"tx" : 7, "ty" : 4, "id" : "grunt"},
            {"tx" : 8, "ty" : 3, "id" : "grunt"},
            {"tx" : 26, "ty" : 3, "id" : "grunt"},
            {"tx" : 25, "ty" : 4, "id" : "grunt"},
            {"tx" : 24, "ty" : 3, "id" : "grunt"},
        ],
    },

    // Level 6 - Mastery opportunity
    // both vulnerable and protected targets, but not particularly difficult (pacing)
    {
        "name" : "Mastery",
        "music" : "chaos",
        "ninja" : {
            "tx" : 16,
            "ty" : 9,
        },
        "arena" : {
            "tx" : 32,
            "ty" : 18,
        },
        "monsters" : [
            // Protected Archers
            {"tx" : 4, "ty" : 4, "id" : "archer"},
            {"tx" : 4, "ty" : 14, "id" : "archer"},

            // Grunt screens
            {"tx" : 4, "ty" : 3, "id" : "grunt"},
            {"tx" : 5, "ty" : 4, "id" : "grunt"},
            {"tx" : 4, "ty" : 5, "id" : "grunt"},

            {"tx" : 4, "ty" : 13, "id" : "grunt"},
            {"tx" : 5, "ty" : 14, "id" : "grunt"},
            {"tx" : 4, "ty" : 15, "id" : "grunt"},

            // Isolated warlord
            {"tx" : 28, "ty" : 3, "id" : "warlord"},

            // Isolated archers
            {"tx" : 4, "ty" : 10, "id" : "archer"},
            {"tx" : 4, "ty" : 16, "id" : "archer"},
        ],
    },

    // Level 7 - Archery surround
    {
        "name" : "Dodgeball",
        "music" : "final",
        "ninja" : {
            "tx" : 16,
            "ty" : 9,
        },
        "arena" : {
            "tx" : 32,
            "ty" : 18,
        },
        "monsters" : [
            // Ring of archery
            {"tx" : 6, "ty" : 2, "id" : "archer"},
            {"tx" : 1, "ty" : 9, "id" : "archer"},
            {"tx" : 6, "ty" : 16, "id" : "archer"},

            {"tx" : 26, "ty" : 2, "id" : "archer"},
            {"tx" : 31, "ty" : 9, "id" : "archer"},
            {"tx" : 26, "ty" : 16, "id" : "archer"},

            // Grunt wedges to add pressure and screen some archers from
            // instant shuriken murder.
            {"tx" : 3, "ty" : 8, "id" : "grunt"},
            {"tx" : 4, "ty" : 9, "id" : "grunt"},
            {"tx" : 3, "ty" : 10, "id" : "grunt"},

            {"tx" : 29, "ty" : 8, "id" : "grunt"},
            {"tx" : 28, "ty" : 9, "id" : "grunt"},
            {"tx" : 29, "ty" : 10, "id" : "grunt"},
        ],
    },

    // Level 8 - All Factors
    // The big surround, all factors in play
    // Dealing with a non-zombie surround sitation; search for weak points.
    {
        "name" : "Battle Royale",
        "music" : "final",
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
            {"tx" : 14, "ty" : 16, "id" : "archer"},

            // Archer chaff screen - not full coverage
            {"tx" : 4, "ty" : 4, "id" : "grunt"},
            {"tx" : 28, "ty" : 14, "id" : "grunt"},
            {"tx" : 3, "ty" : 4, "id" : "grunt"},
            {"tx" : 29, "ty" : 14, "id" : "grunt"},

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
        ],
    },

    // Question is, what next?
]
