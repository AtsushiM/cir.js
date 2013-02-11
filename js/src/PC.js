/* Test: "../../spec/_src/src/PC/test.js" */
pc = Global['PC'] = klassExtendBase(UNDEFINED, {
    _scroll: function(isNoTop, overflow) {
        if (!isNoTop) {
            pageTop();
        }

        css(doc.body, {
            'overflow': overflow
        });
    },
    'killScroll': function(isNoTop) {
        this._scroll(isNoTop, 'hidden');
    },
    'revivalScroll': function(isNoTop) {
        this._scroll(isNoTop, 'auto');
    }
});
Global['pc'] = new pc();
