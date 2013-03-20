/* Test: "../../spec/_src/src/PreRender/test.js" */
C['PreRender'] = klassExtendBase(function(config /* varless */, mine) {
    mine = this;

    mine._els = config['els'];
    mine._guesslimit = config['guesslimit'] || 30;
    mine._onrendered = config['onrendered'];
    mine._looptime = config['looptime'] || 100;
    mine._loopblur = mine._looptime + (config['loopblur'] || 20);
    /* mine._loopid = mine.prevtime = NULL; */

    if (!config['manual']) {
        mine['start']();
    }
}, {
    'disposeInternal': this_clearInterval_loop,
    'start': function() {
        var i,
            mine = this,
            prevtime = dateNow();

        for (i = mine._els.length; i--;) {
            show(mine._els[i]);
        }
        mine._loopid = setInterval(check, mine._looptime, mine);

        function check() {
            var gettime = dateNow(),
                difftime = gettime - prevtime,
                i;

            prevtime = gettime;

            if (difftime < mine._loopblur) {
                mine._guesslimit--;

                if (mine._guesslimit < 1) {
                    clearInterval(mine._loopid);

                    for (i = mine._els.length; i--;) {
                        hide(mine._els[i]);
                    }

                    mine._onrendered();
                }
            }
        }
    }
});
