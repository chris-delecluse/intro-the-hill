
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {
    let date = new Date();
    let hour = date.getHours();
    let mins = date.getMinutes();

    let displayHour = document.getElementById("target");

    if (hour <= 18) {
        displayHour.innerHTML = hour + "h" + mins + " (Hello)";
    } else {
        displayHour.innerHTML = hour + "h" + mins + " (Good evening)";
    }
})();