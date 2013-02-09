(function() {
    var modal = new C.Modal({
            html: '<div><p>TEST.</p><p class="close">close</p></div>',
            overlayClose: true,
            closeSelector: '.close',
            manual: true
        });

    C.$('.open').on(C.e.CLICK, function() {
        modal.open();
    });
}());
