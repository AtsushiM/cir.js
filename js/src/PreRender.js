/* Test: "../../spec/_src/src/PreRender/test.js" */
Global['PreRender'] = klass({
    'extend': Base,
    'init': function(config) {
        config = config || {};

        if (!config['loopblur']) {
            config['loopblur'] = 20;
        }

        this.elements = config['elements'] || [];
        this.guesslimit = config['guesslimit'] || 30;
        this.onrendered = config['onrendered'] || nullFunction;
        this.looptime = config['looptime'] || 100;
        this.loopblur = this.looptime + config['loopblur'];
        /* this.loopid = this.prevtime = NULL; */

        if (!config['manual']) {
            this['start']();
        }
    },
    'properties': {
        'start': function() {
            var i;

            for (i = this.elements.length; i--;) {
                show(this.elements[i]);
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
                            hide(mine.elements[i]);
                        }

                        mine.onrendered();
                    }
                }
            }
        }
    }
});
