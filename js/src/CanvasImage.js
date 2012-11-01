/* Test: "../../spec/_src/src/CanvasImage/test.js" */
(function() {
'use strict';

var util = Global.utility,
    create = util.createElement;

Global.CanvasImage = function(config) {
    var mine = this,
        canv = create('canvas');

    mine.src = config.src;
    mine.width = config.width;
    mine.height = config.height;
    mine.onload = config.onload;
    mine.img = create('img');

    mine.img.onload = function() {
        canv.width = mine.width;
        canv.height = mine.height;
        canv.getContext('2d').drawImage(mine.img, 0, 0);

        mine.onload(canv, mine.img);
    };
    mine.img.src = mine.src;

    return canv;
};
}());
