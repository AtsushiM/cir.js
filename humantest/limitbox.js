// limitbox
(function() {
    var limittext = new C.LimitText({
            el: C.dom.$('#limitbox .test'),
            width: 100,
            height: 100
        });

    console.log(
        limittext.getLimitTextLength(1234567890)
    );
    console.log(
        limittext.getLimitFontSize(1234567890)
    );

}());

