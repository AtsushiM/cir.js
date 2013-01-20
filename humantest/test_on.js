(function() {
    C.$('#box').on(C.event.click, function() {
        console.log(C.event.click);
    });
    C.$('#box').off(C.event.click);
}());
