// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    const sumOfallNumbesrArray = (array) => {
        let result = 0;

        array.forEach(el => {
            result += el;
        });

        return result;
    }

    const averageOfAllNumbesrarray = (array) => {
        return (sumOfallNumbesrArray(array) / array.length);
    }

    document.getElementById("run").addEventListener("click", () => {
        let randomNumberArray = [];
        let i = 0;
    
        Array.from(document.getElementsByTagName("td")).forEach(el => {
            randomNumberArray.push(Math.floor(Math.random() * 101));
            el.innerHTML = randomNumberArray[i];
            i++;
        })
    
        document.getElementById("min").innerHTML = Math.min(...randomNumberArray);
        document.getElementById("max").innerHTML = Math.max(...randomNumberArray);
        document.getElementById("sum").innerHTML = sumOfallNumbesrArray(randomNumberArray)
        document.getElementById("average").innerHTML = averageOfAllNumbesrarray(randomNumberArray);
    });

        
})();