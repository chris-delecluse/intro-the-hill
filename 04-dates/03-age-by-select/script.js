
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    document.getElementById("run").addEventListener("click", () => {
        let day = parseInt(document.getElementById("dob-day").value);
        let month = parseInt(document.getElementById("dob-month").value);
        let year = parseInt(document.getElementById("dob-year").value);

        let currentDate = new Date();
        let birthDate = new Date(year, month, day);

        let age = currentDate.getFullYear() - birthDate.getFullYear();
        let calcMonth = currentDate.getMonth() - birthDate.getMonth();

        if (calcMonth < 0 || (calcMonth === 0 && age.getDate() < birthDate.getDate())) {
            age = age - 1;
        }
        alert(age)
    });
})();