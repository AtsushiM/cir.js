/* Test: "../../spec/_src/src/PreRender/test.js" */
Global.PreRender = Global.klass({
    init: function(config) {
        config = config || {};

        if (!config.elements) {
            config.elements = [];
        }
        if (!config.guesslimit) {
            config.guesslimit = 30;
        }
        if (!config.looptime) {
            config.looptime = 100;
        }
        if (!config.loopblur) {
            config.loopblur = 20;
        }
        if (!config.onrendered) {
            config.onrendered = function() {};
        }

        this.elements = config.elements;
        this.guesslimit = config.guesslimit;
        this.onrendered = config.onrendered;
        this.looptime = config.looptime;
        this.loopblur = this.looptime + config.loopblur;
        this.loopid = null;
        this.prevtime = null;
    },
    properties: {
        utility: Global.utility,
        start: function() {
            var i;

            for (i = this.elements.length; i--;) {
                this.utility.showElement(this.elements[i]);
            }
            this.prevtime = Date.now();
            this.loopid = setInterval(check, this.looptime, this);

            function check(mine) {
                var gettime = Date.now(),
                    difftime = gettime - mine.prevtime;

                mine.prevtime = gettime;

                if (difftime < mine.loopblur) {
                    mine.guesslimit--;

                    if (mine.guesslimit < 1) {
                        clearInterval(mine.loopid);

                        for (var i = mine.elements.length; i--;) {
                            this.utility.hideElement(mine.elements[i]);
                        }

                        mine.onrendered();
                    }
                }
            }
        }
    }
});
