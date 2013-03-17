(function() {
    var $test = document.querySelector('#test');

    setInterval(getZoom, 3000);

    function getZoom() {
        // if (console) {
        //     console.log($test.offsetTop);
        // }
        // else {
            alert($test.offsetTop);
        // }
    }
}());
