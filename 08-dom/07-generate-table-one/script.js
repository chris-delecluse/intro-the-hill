// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    let target = document.getElementById("target");
    let table = document.createElement("table");
    let arr = [];

    for (let i = 0; i < 10; i++) {
        arr.push(document.createElement("tr"))
        
    }

    arr.forEach(el => {
        table.appendChild(el)
        el.appendChild(document.createElement("td"))
    })

    target.appendChild(table);
})();