/* Test: "../../spec/_src/src/ImgLoad/test.js" */
Global.ImgLoad = klass({
    extend: Base,
    init: function(config) {
        this._dispose = [];

        this.srcs = config.srcs,
        this.srccount = this.srcs.length,
        this.loadedsrcs = [];
        this.onload = config.onload || nullFunction,
        this.onprogress = config.onprogress || nullFunction,
        this.loadcount = 0;
        this.progress = 0;
        this.started = false;

        if (!config.manual) {
            this.start();
        }
    },
    properties: {
        _c: function() {
            this.loadcount++;

            this.progress = this.loadcount / this.srccount;
            this.onprogress(this.progress);

            if (this.loadcount >= this.srccount) {
                this.onload(this.loadedsrcs);
            }
        },
        start: function() {
            if (this.started) {
                return false;
            }

            this.started = true;

            var mine = this,
                img,
                i = 0,
                len = mine.srccount;

            for (; i < len; i++) {
                img = create('img');
                img.src = mine.srcs[i];

                on(img, ev.load, countup);
                this._dispose.push([img, ev.load, countup]);

                mine.loadedsrcs.push(img);
            }

            function countup() {
                mine._c();
            }
        },
        getProgress: function() {
            return this.progress;
        }
    }
});
