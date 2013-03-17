/* Test: "../../spec/_src/src/ImgLoad/test.js" */
C['ImgLoad'] = klassExtendBase(function(config /* varless */, mine) {
    mine = this;

    mine._srcs = config['srcs'];
    mine._srccount = mine._srcs.length;
    mine._loadedsrcs = [];
    mine._contractid = [];
    mine._onload = config['onload'] || nullFunction;
    mine._onprogress = config['onprogress'] || nullFunction;
    // mine._loadcount = 0;
    // mine._progress = 0;

    if (!config['manual']) {
        mine['start']();
    }
}, {
    _loadcount: 0,
    _progress: 0,
    _c: function(/* varless */ mine) {
        mine = this;

        var i,
            loadcount = ++mine._loadcount;

        mine._progress = loadcount / mine._srccount;
        mine._onprogress(mine._progress);

        if (loadcount >= mine._srccount) {
            i = mine._contractid.length;

            for (; i--;) {
                mine['uncontract'](mine._contractid[i]);
            }
            mine._contractid = [];

            mine._onload(mine._loadedsrcs);
        }
    },
    'start': function() {
        var mine = this,
            img,
            i = mine._srccount;

        if (mine.started) {
            return;
        }

        mine.started = TRUE;

        for (; i--;) {
            img = create('img');
            img.src = mine._srcs[i];

            mine._contractid.push(mine['contract'](img, ev['LOAD'], countup));
            mine._loadedsrcs.push(img);
        }

        function countup() {
            mine._c();
        }
    },
    'getProgress': function() {
        return this._progress;
    }
});
