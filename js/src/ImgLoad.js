/* Test: "../../spec/_src/src/ImgLoad/test.js" */
Global.ImgLoad = function(config) {
    'use strict';

    var Mine = Global.ImgLoad,
        srcs = config.srcs,
        srccount = srcs.length,
        onload = config.onload,
        loadcount = 0,
        instanse = {
            start: function() {
                var img,
                    i;

                for (i = srccount; i--;) {
                    img = new Image();
                    img.src = srcs[i];
                    img.onload = instanse.imgloaded;
                }
            },
            completeCheck: function() {
                if (loadcount >= srccount) {
                    onload();
                    return true;
                }

                return false;
            }
        };

    function imgloaded() {
        loadcount++;
        instanse.completeCheck();
    }

    return instanse;
};
