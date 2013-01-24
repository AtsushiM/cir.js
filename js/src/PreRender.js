/* Test: "../../spec/_src/src/PreRender/test.js" */
Global['PreRender'] = klass({
    'extend': Base,
    'init': function(config) {
        config = config || {};

        if (!config['loopblur']) {
            config['loopblur'] = 20;
        }

        this.els = config['elements'] || [];
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

            for (i = this.els.length; i--;) {
                show(this.els[i]);
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

                        for (var i = mine.els.length; i--;) {
                            hide(mine.els[i]);
                        }

                        mine.onrendered();
                    }
                }
            }
        }
    }
});
