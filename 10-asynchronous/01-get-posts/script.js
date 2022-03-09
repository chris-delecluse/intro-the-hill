// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles


(() => {

    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts((error, article) => {
            if (error != null) {
                return console.log(`Error !`);
            } else {
                article.forEach(el => {
                    console.log(el);
                });
            }
        })
    })
})();
