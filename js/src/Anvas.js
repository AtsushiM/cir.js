C['Anvas'] = classExtendBase({
    'init': function(config /* varless */, mine) {
        mine = this;

        mine._canvas = config['canvas'];
        mine._ctx = mine._canvas.getContext('2d');

        mine['setSize'](config);
    },
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

                if (count == 0) {
                    callback(ret);
                }
            };

            ret[i] = mine['pigment'](pig);
            count++;
        }

        return ret;
    },
    'draw': function(layer) {
        var i = 0,
            len = layer.length,
            ctx = this._ctx,
            temp = this._canvas;

        ctx.clearRect(0, 0, temp.width, temp.height);

        for (; i < len; i++) {
            temp = layer[i];
            ctx.drawImage(temp['image'], temp['x'], temp['y']);
        }
    }
}, !!win['HTMLCanvasElement']);
