// Command + any keydown handle.
C['Shortcut'] = classExtendObserver({
    'init': function(config) {
        var that = this,
            checker = config['switcher'],
            keyno = config['keyno'],
            actions = config['action'],
            i;

        that._keyno = override({
            'alt': [18],
            'ctrl': [17],
            'shift': [16],
            'meta': [91, 93]
        }, keyno);

        that._isDown = {};

        for (i in that._keyno) {
            that._isDown[i] = false;
        }

        that._checker = checker;

        override(that, actions);

        C['$'](win)
            ['on']('keydown', function(e){
                that._keydown(e.keyCode);

                that._specialUpdate(e);
                that['check'](e);
            })
            ['on']('keyup', function(e){
                that._keyup(e.keyCode);

                that._specialUpdate(e);
            });
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
            ret = that._checker(that._isDown);

        if (that[ret]) {
            that[ret](e);
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

// new ShortCut({
//     switcher: function(down) {
//         if((down.ctrl || down.meta) && down.slash) {
//             return 'openSearch';
//         }
//         if(down.escape_) {
//             return 'closeSearch';
//         }
//     },
//     keyno: {
//         slash: [191],
//         escape_: [27],
//     },
//     action: {
//         closeSearch: function(e) {
//             console.log('esc');
//         },
//         openSearch: function(e) {
//             console.log('/');
//         }
//     }
// });
