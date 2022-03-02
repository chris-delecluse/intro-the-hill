// 05-arrays/08-array-includes/script.js - 5.8: presence in an aray

(() => {

    const fruits = [
        "apple",
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    document.getElementById("run").addEventListener("click", () => {
        let bool = false;
    
        fruits.forEach(el => {
            if (el === "apple") {
                bool = true;
            }
        });
    
        if (bool === true) {
            console.log("There is an apple in the array fruits !");
        } else {
            console.log("No apple in the array fruits :(");
        }
    });


})();
