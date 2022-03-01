
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    let date = new Date();
    let hour = date.getHours();
    let mins = date.getMinutes();

    let displayHour = document.getElementById("target");

    if (hour <= 17 && mins <= 30) {
        displayHour.innerHTML = hour + "h" + mins + " (Hello)";
    } else {
        displayHour.innerHTML = hour + "h" + mins + " (Good evening)";
    }
})();