// limitbox
(function() {
    var limittext = new C.LimitText({
            el: C.dom.$('#limitbox .test'),
            width: 100,
            height: 100
        });

    console.log(
        limittext.getLimitTextLength('abcdefghijklmonpqrs')
    );
    console.log(
        limittext.getLimitFontSize('abcdefghijklmnopqr')
    );

    // var testary = [],
    //     i = 0,
    //     len = 100;

    // for (;i < len; i++) {
    //     testary[i] = i;
    // }

    // C.util.binarySearch({
    //     low: 0,
    //     high: testary.length - 1,
    //     compare: function(point) {
    //         if (testary[point] <= 50) {
    //             return true;
    //         }
    //         return false;
    //     },
    //     end: function(point) {
    //         console.log(point);
    //     }
    // });
}());

