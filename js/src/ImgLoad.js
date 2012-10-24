/* Test: "../../spec/_src/src/ImgLoad/test.js" */
Global.ImgLoad = function(config) {
    'use strict';

    var util = Global.utility,
        create = util.createElement,
        srcs = config.srcs,
        srccount = srcs.length,
        onload = config.onload,
        loadcount = 0,
        imgload = {
            start: function() {
                var img,
                    i;

                for (i = srccount; i--;) {
                    img = create('img');
                    img.src = srcs[i];
                    img.onload = completeCheck;
                }
            }
        };

    function completeCheck() {
        loadcount++;
        if (loadcount >= srccount) {
            onload();
        }
    }

    return imgload;
};
