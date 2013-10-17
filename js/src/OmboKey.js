C['OmboKey'] = classExtendObserver({
    'init': function(config) {
        var that = this,
            i;

        that['_super']();

        that._keyno = override({
            'alt': [18],
            'ctrl': [17],
            'shift': [16],
            'meta': [91, 93]
        }, config['keyno']);

        that._isDown = {};

        for (i in that._keyno) {
            that._isDown[i] = false;
        }

        that._switcher = config['switcher'];

        that._el = C['$'](win);

        bindOnProp(that, config);

        ifManualStart(that, config, 'attach');
    },
    'attach': function() {
        var that = this;

        that._bindAttachKeydown = function(e){
            that._keydown(e.keyCode);

            that._specialUpdate(e);
            that['check'](e);
        };
        that._bindAttachKeyup = function(e){
            that._keyup(e.keyCode);

            that._specialUpdate(e);
        };

        that._el
            ['on']('keydown', that._bindAttachKeydown)
            ['on']('keyup', that._bindAttachKeyup);
    },
    'detach': function() {
        var that = this;

        that._el
            ['off']('keydown', that._bindAttachKeydown)
            ['off']('keyup', that._bindAttachKeyup);
    },
    _specialUpdate: function(e) {
        var down = this._isDown;

            down['alt'] = e['altKey'];
            down['ctrl'] = e['ctrlKey'];
            down['meta'] = e['metaKey'];
            down['shift'] = e['shiftKey'];
    },
    'check': function(e) {
        var that = this,
            ret = that._switcher(that._isDown, that['getPressCount']());

        if (ret) {
            that['emit'](ret, e);
        }

        return ret;
    },
    'getKeyName': function(keycode) {
        var keyno = this._keyno,
            label;

        for (label in keyno) {
            if (inArray(keycode, keyno[label]) !== -1) {
                return label;
            }
        }
    },
    'getPressCount': function() {
        var down = this._isDown,
            i,
            ret = 0;

        for (i in down) {
            if (down[i]) {
                ret++;
            }
        }

        return ret;
    },
    _keyhandle: function(keycode, bool) {
        var keyno = this._keyno,
            isDown = this._isDown,
            label = this['getKeyName'](keycode);

        if (label) {
            isDown[label] = bool;
        }
    },
    _keydown: function(keycode) {
        this._keyhandle(keycode, TRUE);
    },
    _keyup: function(keycode) {
        this._keyhandle(keycode, FALSE);
    }
});
