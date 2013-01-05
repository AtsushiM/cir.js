/* Test: "../../spec/_src/src/CanvasImage/test.js" */
(function() {
'use strict';

var el= Global.element,
    create = el.create;

Global.CanvasImage = function(config) {
    var canv = create('canvas'),
        img = create('img'),
        src = config.src,
        width = config.width,
        height = config.height,
        onload = config.onload;

    img.onload = function() {
        canv.width = width;
        canv.height = height;
        canv.getContext('2d').drawImage(img, 0, 0);

        onload(canv, img);
    };
    img.src = src;

    return canv;
};
}());
