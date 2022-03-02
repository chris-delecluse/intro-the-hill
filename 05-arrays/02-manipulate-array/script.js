// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
    
    document.getElementById("run").addEventListener("click", () => {
        fruits.shift(); // remove from start
        fruits.pop(); // remove from end
        fruits.unshift("banana") // add to the beginning
        fruits.push("kiwi") // add at the end
        
        alert(fruits);
    });

})();
