/* Test: "../../spec/_src/src/PreRender/test.js" */
Global.PreRender = Global.klass({
    init: function(config) {
        config = config || {};

        if (!config.loopblur) {
            config.loopblur = 20;
        }

        this.elements = config.elements || [];
        this.guesslimit = config.guesslimit || 30;
        this.onrendered = config.onrendered || this._u.nullFunction;
        this.looptime = config.looptime || 100;
        this.loopblur = this.looptime + config.loopblur;
        this.loopid = this.prevtime = null;

        if (!config.manual) {
            this.start();
        }
    },
    properties: {
        _u: Global.utility,
        _el: Global.element,
        start: function() {
            var i;

            for (i = this.elements.length; i--;) {
                this._el.show(this.elements[i]);
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
                            mine._el.hide(mine.elements[i]);
                        }

                        mine.onrendered();
                    }
                }
            }
        }
    }
});
