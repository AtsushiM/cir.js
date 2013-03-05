/* Test: "%JASMINE_TEST_PATH%" */
C['BookmarkBubble'] = klassExtendBase(function(config) {
    this._img = config['img'] || $('link[rel="apple-touch-icon"]').href;
    this._text = config['text'];
}, {
    'show': function() {
    },
    'hide': function() {
    }
});
