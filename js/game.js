// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You wake up, but do you check your phone?",
            choices: [
                {
                    text: "Check phone",
                    nextLevel: "phonePath1",
                },

                {
                    text: "Don't check phone",
                    nextLevel: "lifePath1",
                },
            ]
        },

        disasterEnd: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "This world has abandoned its people. Humanity is reaching torwards the end.",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        sleepEnd: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "sleep",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        awakeEnd: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You are awoken, and must now join the others. An entirely new world awaits.",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        phonePath1: {
            message: "C. is the most popular social media program to date. Its goal is to connect people, and all other motives are unknown. After C.'s initial launch in 2079, the app's founder's mysteriously vanished.",
            choices: [
                {
                    text: "Check the news",
                    nextLevel: "disasterEnd1",
                },
                {
                    text: "Check C.",
                    nextLevel: "phonePath2",
                },
            ]
        },

        disasterEnd1: {
            message: "You learn that a viral outbreak taken shape in all major cities across the globe, including yours. Both the infection and mortality rates are now greater that 95%. Noteable side effects include increased aggrivation and instatiable hunger. You living room window has just been shattered. run.",
            choices: [
                {
                    text: "...",
                    nextLevel: "disasterEnd",
                },
                {
                    text: "...",
                    nextLevel: "disasterEnd",
                },
            ]
        },

        phonePath2: {
            message: "You have 1 new notification",
            choices: [
                {
                    text: "Ignore",
                    nextLevel: "sleepEnd1",
                },
                {
                    text: "Open notification",
                    nextLevel: "user_8",
                },
            ]
        },


        lifePath1: {
            message: "You are beginning to get out of bed",
            choices: [
                {
                    text: "get out of bed on your right",
                    nextLevel: "lifePath2",
                },
                {
                    text: "get out of bed on your left",
                    nextLevel: "lifepath2",
                },
            ]
        },

        lifePath2: {
            message: "you are brushing your teeth",
            choices: [
                {
                    text: "brush with your left hand",
                    nextLevel: "lifePath3",
                },
                {
                    text: "brush with your right hand",
                    nextLevel: "lifePath3",
                },
            ]
        },

        lifePath3: {
            message: "you are walking torwards the front door",
            choices: [
                {
                    text: "leave the apartment",
                    nextLevel: "lifePath4",
                },
                {
                    text: "stay",
                    nextLevel: "lifePath4",
                },
            ]
        },

        lifePath4: {
            message: "You decided to stay in the apartment today. This is how most of your days progress. You are now sitting on the couch in front of the t.v.",
            choices: [
                {
                    text: "turn on the t.v.",
                    nextLevel: "disasterEnd2",
                },
                {
                    text: "leave the t.v. off",
                    nextLevel: "lifePath5",
                },
            ]
        },

        disasterEnd2: {
            message: "All news channels are reporting a near cataclysmic global market crash with unprecedented effects. You recieve many calls from your place of work. You panic.",
            choices: [
                {
                    text: "...",
                    nextLevel: "disasterEnd",
                },
                {
                    text: "...",
                    nextLevel: "disasterEnd",
                },
            ]
        },

        lifePath5: {
            message: "You hear knocking at the door",
            choices: [
                {
                    text: "answer the door",
                    nextLevel: "sleep1",
                },
                {
                    text: "stay",
                    nextLevel: "phonePath2",
                },
            ]
        },

        sleep1: {
            message: "A man in all black stands before you. He reveals a damp rag and forcefully holds it up to your face. You are defenseless.",
            choices: [
                {
                    text: "...",
                    nextLevel: "sleepEnd",
                },
                {
                    text: "...",
                    nextLevel: "sleepEnd",
                },
            ]
        },

        // user_8: {
        //     message: "",
        //     choices: [
        //         {
        //             text: "",
        //             nextLevel: "",
        //         },
        //         {
        //             text: "",
        //             nextLevel: "",
        //         },
        //     ]
        // },

    }
};
