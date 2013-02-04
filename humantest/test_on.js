(function() {
    C.$('#box').on(C.e.CLICK, function() {
        console.log(C.e.CLICK);
    });
    C.$('#box').off(C.e.CLICK);
}());
