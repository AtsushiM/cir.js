/* Test: "../../spec/_src/src/ImgLoad/test.js" */
Global.ImgLoad = Global.klass({
    init: function(config) {
        var mine = this;

        mine.srcs = config.srcs,
        mine.srccount = mine.srcs.length,
        mine.loadedsrcs = [];
        mine.onload = config.onload || mine._u.nullFunction,
        mine.onprogress = config.onprogress || mine._u.nullFunction,
        mine.loadcount = 0;
        mine.progress = 0;
        mine.check = function() {
            mine.loadcount++;

            mine.progress = mine.loadcount / mine.srccount;
            mine.onprogress(mine.progress);

            if (mine.loadcount >= mine.srccount) {
                mine.onload(mine.loadedsrcs);
            }
        };
    },
    properties: {
        _u: Global.utility,
        _el: Global.element,
        _ev: Global.event,
        start: function() {
            var img,
                i, len;

            for (i = 0, len = this.srccount; i < len; i++) {
                img = this._el.create('img');
                img.src = this.srcs[i];

                this._el.on(img, this._ev.load, this.check);

                this.loadedsrcs.push(img);
            }
        },
        getProgress: function() {
            return this.progress;
        }
    }
});
