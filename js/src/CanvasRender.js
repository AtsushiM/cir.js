/* Test: "../../spec/_src/src/CanvasRender/test.js" */
Global.CanvasRender = klass({
    init: function(config) {
        this.canvas = config.canvas;
        this.ctx = this.canvas.getContext('2d');

        this.setSize(config);
    },
    properties: {
        setSize: function(vars) {
            if (vars.width) {
                this.canvas.width = vars.width;
            }
            if (vars.height) {
                this.canvas.height = vars.height;
            }
        },
        draw: function(layer) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            for (var i = 0, len = layer.length, item; i < len; i++) {
                item = layer[i];
                this.ctx.drawImage(item.image, item.x, item.y);
            }
        }
    }
});
