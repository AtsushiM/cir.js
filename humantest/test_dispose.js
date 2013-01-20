(function() {
    var obs = [],
        i = 0,
        len = 1000;

    for (; i < len; i++) {
        obs[i] = new C.Observer();
        obs[i].on('test', function() {
        });
    }

    setTimeout(function() {
        console.log(obs[0]);
        for (i = 0; i < len; i++) {
            /* obs[i].dispose(); */
        }

        /* console.log(obs[0]); */
    }, 3000);
}());
