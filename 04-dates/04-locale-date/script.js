
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    let date = new Date()
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dateResult = date.toLocaleDateString("en-GB", options);
    let hours = date.getHours();
    let mins = date.getMinutes();
    
    document.getElementById("target").innerHTML = dateResult + ", " + hours + "h" + mins;
})();