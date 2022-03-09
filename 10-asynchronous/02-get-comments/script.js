// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires


(() => {

    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts((error, article) => {
            if (error != null) {
                return console.log(`Error`);
            } else {
                article.forEach(el => {
                    window.lib.getComments(el.id /* index */, (error, comments) => {
                        if (error != null) {
                            return console.log(`Error`)
                        } else {
                            comments.forEach(ell => {
                                article[el.id] = ell;
                            })
                        }  
                    });

                    console.log(el);
                })
            }
        })
    })
})();