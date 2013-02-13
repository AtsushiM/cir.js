/* Test: "../../spec/_src/src/ImgLoad/test.js" */
C['ImgLoad'] = klassExtendBase(function(config) {
    this._srcs = config['srcs'];
    this._srccount = this._srcs.length;
    this._loadedsrcs = [];
    this._contractid = [];
    this._onload = config['onload'] || nullFunction;
    this._onprogress = config['onprogress'] || nullFunction;
    // this._loadcount = 0;
    // this._progress = 0;

    if (!config['manual']) {
        this['start']();
    }
}, {
    _loadcount: 0,
    _progress: 0,
    _c: function() {
        this._loadcount++;

        this._progress = this._loadcount / this._srccount;
        this._onprogress(this._progress);

        if (this._loadcount >= this._srccount) {
            var i = this._contractid.length;

            for (; i--;) {
                this['uncontract'](this._contractid[i]);
            }
            this._contractid = [];

            this._onload(this._loadedsrcs);
        }
    },
    'start': function() {
        if (this.started) {
            return;
        }

        this.started = TRUE;

        var mine = this,
            img,
            i = mine._srccount;

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
