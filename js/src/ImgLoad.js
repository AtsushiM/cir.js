/* Test: "../../spec/_src/src/ImgLoad/test.js" */
Global.ImgLoad = Global.klass({
    init: function(config) {
        this.srcs = config.srcs,
        this.srccount = this.srcs.length,
        this.loadedsrcs = [];
        this.onload = config.onload || this._u.nullFunction,
        this.onprogress = config.onprogress || this._u.nullFunction,
        this.loadcount = 0;
        this.progress = 0;
    },
    properties: {
        _u: Global.utility,
        _el: Global.element,
        _ev: Global.event,
        _c: function() {
            this.loadcount++;

            this.progress = this.loadcount / this.srccount;
            this.onprogress(this.progress);

            if (this.loadcount >= this.srccount) {
                this.onload(this.loadedsrcs);
            }
        },
        start: function() {
            var mine = this,
                img,
                i, len;

            for (i = 0, len = mine.srccount; i < len; i++) {
                img = mine._el.create('img');
                img.src = mine.srcs[i];

                mine._el.on(img, mine._ev.load, function() {
                    mine._c();
                });

                mine.loadedsrcs.push(img);
            }
        },
        getProgress: function() {
            return this.progress;
        }
    }
});
