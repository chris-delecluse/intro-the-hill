// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {
    function loop () {
        target.innerHTML += phrase.charAt(i)
        i++
        setTimeout(loop, 50);
    }

    const target = document.getElementById("target");
    let phrase = target.innerHTML;
    let i = 0;
    target.innerHTML = "";

    loop();    
})();