C['Anvas'] = classExtendBase({
    'init': function(config /* varless */, that) {
        that = this;

        that._canvas = config['canvas'];
        that._ctx = that._canvas.getContext(config['ctxtype'] || '2d');

        that['setSize'](config);
    },
    'setSize': function(vars) {
        if (vars[label_w]) {
            this._canvas[label_w] = vars[label_w];
        }
        if (vars[label_h]) {
            this._canvas[label_h] = vars[label_h];
        }
    },
    'pigment': function(vars) {
        var that = this,
            canv = create('canvas'),
            img;

        if (vars['src']) {
            img = create('img');

            img.onload = function() {
                size(canv, vars[label_w], vars[label_h]);
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
    'getCtx': function(type) {
        return this._ctx;
    },
    'render': function(layer /* varless */, that) {
        that = this;

        var i = 0,
            len = layer.length,
            ctx = that._ctx,
            temp = that._canvas;

        ctx.clearRect(0, 0, temp[label_w], temp[label_h]);

        for (; i < len; i++) {
            if (temp = layer[i]) {
                if (temp['render']) {
                    temp['render'](ctx, that);
                }
                else {
                    that['draw'](temp);
                }
            }
        }
    },
    'draw': function(obj) {
        this._ctx.drawImage(obj['image'], obj['x'], obj['y']);
    },
    'sandboxCtx': function(func /* varless */, ctx) {
        ctx = this._ctx;
        ctx['save']();
        func.call(this, ctx);
        ctx['restore']();
    }
}, !!win['HTMLCanvasElement']);
