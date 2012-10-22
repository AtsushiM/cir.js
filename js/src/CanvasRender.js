/* Test: "../../spec/_src/CanvasRender/test.js" */
Global.CanvasRender = function(config) {
    'use strict';

    var Mine = Global.CanvasRender,
        canvas = config.canvas,
        ctx = canvas.getContext('2d'),
        canvasWidth = canvas.width,
        canvasHeight = canvas.height,
        instanse = {
            setSize: function(vars) {
                if (vars.width) {
                    canvasWidth = vars.width;
                    canvas.width = canvasWidth;
                }
                if (vars.height) {
                    canvasHeight = vars.height;
                    canvas.height = canvasHeight;
                }
            },
            draw: function(layer) {
                ctx.clearRect(0, 0, canvasWidth, canvasHeight);

                for (i = 0, len = layer.length; i < len; i++) {
                    item = layer[i];
                    ctx.drawImage(item.image, item.x, item.y);
                }
            }
        },
        i, len, item;

    instanse.setSize(config);

    return instanse;
};
