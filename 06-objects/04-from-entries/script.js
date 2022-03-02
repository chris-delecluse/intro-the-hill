// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];

    document.getElementById("run").addEventListener("click", () => {
        let myArr = [];
        let finalArr;
        let temp;
    
        for (let i = 0; i < keys.length; i++) {
            temp = [keys[i], values[i]];
    
            myArr.push(temp);
        }
        finalArr = Object.fromEntries(myArr);

        console.log(finalArr);
    })
})();