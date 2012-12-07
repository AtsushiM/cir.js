/* Test: "../../spec/_src/src/ImgLoad/test.js" */
Global.ImgLoad = Global.klass({
    init: function(config) {
        var mine = this;

        mine.srcs = config.srcs,
        mine.srccount = this.srcs.length,
        mine.loadedsrcs = [];
        mine.onload = config.onload || this.utility.nullFunction,
        mine.onprogress = config.onprogress || this.utility.nullFunction,
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
        utility: Global.utility,
        start: function() {
            var img,
                i, len;

            for (i = 0, len = this.srccount; i < len; i++) {
                img = this.utility.makeElement('img');
                img.src = this.srcs[i];
                img.onload = this.check;

                this.loadedsrcs.push(img);
            }
        },
        getProgress: function() {
            return this.progress;
        }
    }
});
