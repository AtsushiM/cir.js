/* Test: "../../spec/_src/src/PreRender/test.js" */
Global['PreRender'] = klassExtendBase(function(config) {
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
}, {
    'disposeInternal': function() {
        clearInterval(this.loopid);
    },
    'start': function() {
        var i,
            mine = this,
            prevtime = dateNow();

        for (i = mine.els.length; i--;) {
            show(mine.els[i]);
        }
        mine.loopid = setInterval(check, this.looptime, this);

        function check() {
            var gettime = dateNow(),
                difftime = gettime - prevtime,
                i;

            prevtime = gettime;

            if (difftime < mine.loopblur) {
                mine.guesslimit--;

                if (mine.guesslimit < 1) {
                    clearInterval(mine.loopid);

                    for (i = mine.els.length; i--;) {
                        hide(mine.els[i]);
                    }

                    mine.onrendered();
                }
            }
        }
    }
});
