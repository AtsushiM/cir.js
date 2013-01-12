/* Test: "../../spec/_src/src/CanvasImg/test.js" */
Global.CanvasImg = function(config) {
    var canv = create('canvas'),
        img = create('img');

    img.onload = function() {
        canv.width = config.width;
        canv.height = config.height;
        canv.getContext('2d').drawImage(img, 0, 0);

        config.onload(canv, img);
    };
    img.src = config.src;

    return canv;
};
