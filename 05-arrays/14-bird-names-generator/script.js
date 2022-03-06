// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    
    document.getElementById("run").addEventListener("click",() => {
        myArr = [...adjectives];
        let i = Math.floor(Math.random() * birds.length)
        let j = Math.floor(Math.random() * adjectives.size)
    
        if (birds[i].fem === true) {
            document.getElementById("target"). innerHTML = birds[i].name + " " + myArr[j] + "e";
        } else {
            document.getElementById("target"). innerHTML = birds[i].name + " " + myArr[j];
        }
    });
})();
