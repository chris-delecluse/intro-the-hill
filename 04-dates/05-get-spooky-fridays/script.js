
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {
    document.getElementById("run").addEventListener("click", () => {
        let input = document.getElementById("year").value;
        let allMonths = [null, "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
        let result = [];
        let date;

        for (let i = 1; i <= 12; i++) {
            date = new Date(i + "/13/" + input); 
            if (date.getDay() == 5) {
                result.push(allMonths[i]);
            }
        }   
        
        alert("List of all months that contain a friday 13th of " + input + " year : \n" + result);

    });

})();
