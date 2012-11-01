/* Test: "../../spec/_src/CanvasRender/test.js" */
(function() {
'use strict';

Global.CanvasRender = function(config) {
    this.canvas = config.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;

    this.setSize(config);
};
Global.CanvasRender.prototype = {
    setSize: function(vars) {
        if (vars.width) {
            this.canvas.width = this.canvasWidth = vars.width;
        }
        if (vars.height) {
            this.canvas.height = this.canvasHeight = vars.height;
        }
    },
    draw: function(layer) {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

        for (var i = 0, len = layer.length, item; i < len; i++) {
            item = layer[i];
            this.ctx.drawImage(item.image, item.x, item.y);
        }
    }
};
}());
