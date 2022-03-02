// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    document.getElementById("run").addEventListener("click", () => {
        const people = {
            lastName : "Chris",
            firstName : "Delecluse",
            age : 32,
            city : "Tournai",
            country : "Belgium"
        }
        console.log(people);
    })
})();
