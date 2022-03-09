// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    const target = document.getElementById("target");
    const button = document.getElementById("increment");
    
    let myLocalStorage = localStorage;
    let i = myLocalStorage.getItem('counter');

    target.innerHTML = i;

    button.addEventListener("click", () => {
        i++;
        target.innerHTML = i;
        myLocalStorage.setItem('counter', `${i}`);
    })
})();