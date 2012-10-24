/* Test: "../../spec/_src/src/CanvasImage/test.js" */
Global.CanvasImage = function(config) {
    'use strict';

    var util = Global.utility,
        create = util.createElement,
        src = config.src,
        width = config.width,
        height = config.height,
        onload = config.onload,
        img = create('img'),
        canv = create('canvas');

    img.onload = function() {
        canv.width = width;
        canv.height = height;
        canv.getContext('2d').drawImage(img, 0, 0);

        onload(canv, img);
    };
    img.src = src;

    return canv;
};

