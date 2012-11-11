/* Test: "../../spec/_src/src/PreRender/test.js" */
(function() {
'use strict';

var util = Global.utility,
    override = util.override,
    show = util.showElement,
    hide = util.hideElement;

Global.PreRender = Global.klass({
    init: function(config) {
        config = override({
            elements: [],
            guesslimit: 30,
            looptime: 100,
            loopblur: 20,
            onrendered: function() {}
        }, config);

        this.elements = config.elements;
        this.guesslimit = config.guesslimit;
        this.onrendered = config.onrendered;
        this.looptime = config.looptime;
        this.loopblur = this.looptime + config.loopblur;
        this.loopid = null;
        this.prevtime = null;
    },
    methods: {
        start: function() {
            var i;

            for (i = this.elements.length; i--;) {
                show(this.elements[i]);
            }
            this.prevtime = Date.now();
            this.loopid = setInterval(check, this.looptime, this);
        }
    }
});

function check(mine) {
    var gettime = Date.now(),
        difftime = gettime - mine.prevtime;

    mine.prevtime = gettime;

    if (difftime < mine.loopblur) {
        mine.guesslimit--;

        if (mine.guesslimit < 1) {
            clearInterval(mine.loopid);

            for (var i = mine.elements.length; i--;) {
                hide(mine.elements[i]);
            }

            mine.onrendered();
        }
    }
}
}());
