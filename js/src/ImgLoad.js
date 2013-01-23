/* Test: "../../spec/_src/src/ImgLoad/test.js" */
Global['ImgLoad'] = klass({
    'extend': Base,
    'init': function(config) {
        this['_super']();

        this.srcs = config['srcs'],
        this.srccount = this.srcs.length,
        this.loadedsrcs = [];
        this.disposeid = [];
        this.onload = config['onload'] || nullFunction,
        this.onprogress = config['onprogress'] || nullFunction,
        this.loadcount = 0;
        this.progress = 0;
        this.started = FALSE;

        if (!config['manual']) {
            this['start']();
        }
    },
    'properties': {
        _c: function() {
            this.loadcount++;

            this.progress = this.loadcount / this.srccount;
            this.onprogress(this.progress);

            if (this.loadcount >= this.srccount) {
                var i = this.disposeid.length;

                for (; i--;) {
                    this['uncontract'](this.disposeid[i]);
                }
                this.disposeid = [];

                this.onload(this.loadedsrcs);
            }
        },
        'start': function() {
            if (this.started) {
                return FALSE;
            }

            this.started = TRUE;

            var mine = this,
                img,
                i = 0,
                len = mine.srccount;

            for (; i < len; i++) {
                img = create('img');
                img.src = mine.srcs[i];

                mine.disposeid.push(mine['contract'](img, ev['load'], countup));
                mine.loadedsrcs.push(img);
            }

            function countup() {
                mine._c();
            }
        },
        'getProgress': function() {
            return this.progress;
        }
    }
});
