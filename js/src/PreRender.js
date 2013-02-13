/* Test: "../../spec/_src/src/PreRender/test.js" */
C['PreRender'] = klassExtendBase(function(config) {
    this._els = config['els'];
    this._guesslimit = config['guesslimit'] || 30;
    this._onrendered = config['onrendered'];
    this._looptime = config['looptime'] || 100;
    this._loopblur = this._looptime + (config['loopblur'] || 20);
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

        for (i = mine._els.length; i--;) {
            show(mine._els[i]);
        }
        mine.loopid = setInterval(check, this._looptime, this);

        function check() {
            var gettime = dateNow(),
                difftime = gettime - prevtime,
                i;

            prevtime = gettime;

            if (difftime < mine._loopblur) {
                mine._guesslimit--;

                if (mine._guesslimit < 1) {
                    clearInterval(mine.loopid);

                    for (i = mine._els.length; i--;) {
                        hide(mine._els[i]);
                    }

                    mine._onrendered();
                }
            }
        }
    }
});
