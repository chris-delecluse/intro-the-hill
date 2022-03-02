// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array


(() => {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];
    document.getElementById("run").addEventListener("click", () => {
        let newFruits = new Set(fruits);
        
        console.log(fruits)
        console.log("\n New array : \n\n");
        console.log(newFruits);
    })
    
})();
