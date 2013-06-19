C['Anvas'] = classExtendBase({
    'init': function(config /* varless */, that) {
        that = this;

        that._canvas = config['canvas'];
        that._ctx = that._canvas.getContext('2d');

        that['setSize'](config);
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
        var that = this,
            canv = create('canvas'),
            img;

        if (vars['src']) {
            img = create('img');

            img.onload = function() {
                canv.width = vars['width'];
                canv.height = vars['height'];
                canv.getContext('2d').drawImage(img, 0, 0);

                vars.onload.call(that, canv, img);
            };
            img.src = vars['src'];
            return override(vars, {'image': canv, 'x': vars.x || 0, 'y': vars.y || 0});
        }

        vars.onload.call(that, canv);
        return override(vars, {'x': vars.x || 0, 'y': vars.y || 0});
    },
    'pigments': function(vars, callback) {
        var that = this,
            i,
            count = 0,
            ret = {};

        callback = callback || nullFunction;

        for (i in vars) {
            pigment(vars[i]);
        }

        function pigment(pig) {
            var pigload = pig['onload'] || nullFunction;

            pig.onload = function() {
                pigload.apply(pig, arguments);
                count--;

                if (count == 0) {
                    callback.call(that, ret);
                }
            };

            ret[i] = that['pigment'](pig);
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
            if (temp = layer[i]) {
                if (temp['render']) {
                    temp['render'].call(temp, ctx, this);
                }
                else {
                    ctx.drawImage(temp['image'], temp['x'], temp['y']);
                }
            }
        }
    }
}, !!win['HTMLCanvasElement']);
