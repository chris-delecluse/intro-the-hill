// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    document.getElementById("run").addEventListener("click", () => {
        console.log(people.size + " is the size of the set people.");
        console.log("Alexandre inside the set ? : " + people.has("Alexandre"));
    });
})();
