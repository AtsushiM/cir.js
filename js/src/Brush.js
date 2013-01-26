/* Test: "../../spec/_src/src/Brush/test.js" */
Global['Brush'] = klass({
    'extend': Base,
    'init': function(config) {
        this._canvas = config['canvas'];
        this.ctx = this._canvas.getContext('2d');

        this['setSize'](config);
    },
    'properties': {
        'setSize': function(vars) {
            if (vars['width']) {
                this._canvas.width = vars['width'];
            }
            if (vars['height']) {
                this._canvas.height = vars['height'];
            }
        },
        'pigment': function(vars) {
            var canv = create('canvas'),
                img = create('img');

            img.onload = function() {
                canv.width = vars['width'];
                canv.height = vars['height'];
                canv.getContext('2d').drawImage(img, 0, 0);

                vars.onload(canv, img);
            };
            img.src = vars['src'];

            return {'image': canv, 'x': vars.x || 0, 'y': vars.y || 0};
        },
        'pigments': function(vars, callback) {
            var mine = this,
                i,
                count = 0,
                ret = {};

            callback = callback || nullFunction;

            for (i in vars) {
                pigment(vars[i]);
            }

            function pigment(pig) {
                var pigload = pig['onload'] || nullFunction;

                pig.onload = function(canvas, img) {
                    pigload(canvas, img);
                    count--;

                    if (count === 0) {
                        onload();
                    }
                };

                ret[i] = mine['pigment'](pig);
                count++;
            }
            function onload() {
                callback(ret);
            }

            return ret;
        },
        'draw': function(layer) {
            var i = 0, len = layer.length, item;

            this.ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);

            for (; i < len; i++) {
                item = layer[i];
                this.ctx.drawImage(item['image'], item['x'], item['y']);
            }
        }
    }
});
Global['Brush']['support'] = !!win['HTMLCanvasElement'];
