/* Test: "../../spec/_src/src/ImgLoad/test.js" */
Global['ImgLoad'] = klassExtendBase(function(config) {
    this.srcs = config['srcs'];
    this.srccount = this.srcs.length;
    this.loadedsrcs = [];
    this.disposeid = [];
    this._onload = config['onload'] || nullFunction;
    this._onprogress = config['onprogress'] || nullFunction;
    // this.loadcount = 0;
    // this.progress = 0;

    if (!config['manual']) {
        this['start']();
    }
}, {
    loadcount: 0,
    progress: 0,
    _c: function() {
        this.loadcount++;

        this.progress = this.loadcount / this.srccount;
        this._onprogress(this.progress);

        if (this.loadcount >= this.srccount) {
            var i = this.disposeid.length;

            for (; i--;) {
                this['uncontract'](this.disposeid[i]);
            }
            this.disposeid = [];

            this._onload(this.loadedsrcs);
        }
    },
    'start': function() {
        if (this.started) {
            return;
        }

        this.started = TRUE;

        var mine = this,
            img,
            i = mine.srccount;

        for (; i--;) {
            img = create('img');
            img.src = mine.srcs[i];

            mine.disposeid.push(mine['contract'](img, ev['LOAD'], countup));
            mine.loadedsrcs.push(img);
        }

        function countup() {
            mine._c();
        }
    },
    'getProgress': function() {
        return this.progress;
    }
});
