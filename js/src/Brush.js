/* Test: "../../spec/_src/src/Brush/test.js" */
Global.Brush = klass({
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
        pigment: function(vars) {
            var canv = create('canvas'),
                img = create('img');

            img.onload = function() {
                canv.width = vars.width;
                canv.height = vars.height;
                canv.getContext('2d').drawImage(img, 0, 0);

                vars.onload(canv, img);
            };
            img.src = vars.src;

            return canv;
        },
        pigments: function(vars, callback) {
            var mine = this,
                i,
                count = 0,
                ret = {};

            callback = callback || nullFunction;

            for (i in vars) {
                pigment(vars[i]);
            }

            function pigment(pig) {
                var pigload = pig.onload || nullFunction;

                pig.onload = function(canvas, img) {
                    pigload(canvas, img);
                    count--;

                    if (count === 0) {
                        onload();
                    }
                };

                ret[i] = mine.pigment(pig);
                count++;
            }
            function onload() {
                callback(ret);
            }

            return ret;
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
