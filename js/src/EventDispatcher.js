// EventDispatcher
(function (win, doc, ns) {

    var EventObject = ClassExtendBase({
        'init': function (context, args, opt) {
            var stopPropagation = this.stopPropagation;
            util.copyClone(this, context, args, opt);
            this._context = context;
            this.stopPropagation = stopPropagation;
        },
        'stopPropagation': function () {
            if (this._context.stopPropagation) {
                this._context.stopPropagation();
            }
            this._context._bubbleCanceled = true;
        }
    });

    var EventDispatcher = ClassExtendBase({
        'init': function() {
            this.handlers = {};
        },
        'fire': function (typ, opt_evt) {
            var obj = this.handlers,
                arr = [].concat(obj[typ] || []), //Use copy
                evt = new EventObject(this, opt_evt, {
                    'type': typ
                });

            // handle specified event type
            this._fire(arr, evt);

            // handle wildcard "*" event
            this._fire(obj['*'] || [], evt);
        },
        _fire: function(arr, evt) {
            var func, i, len;

            for (i = 0, len = arr.length; i < len; ++i) {
                (fnc = arr[i][0]) && fnc.call(arr[i][1] || this, evt);
            }
        },

        'on': function (typ, fnc) {
            var obj = this.handlers;

            (obj[typ] || (obj[typ] = [])).push(fnc);
        },

        'off': function (typ, fnc) {
            if (!typ) {
                this.handlers = {};
                return;
            }

            if (!fnc) {
                this.handlers[typ] = [];
                return;
            }

            var obj = this.handlers,
                arr = obj[typ] || [],
                i = arr.length;

            while(i) {
                arr[--i][0] === fnc && arr.splice(i, 1);
            }
        },
        'one': function (typ, fnc) {
            var that = this;

            function _fnc() {
                that['off'](typ, _fnc);
                fncapply(that, arguments);
            }

            this.on(typ, _fnc);
        }

        dispose: function () {
            this['off']();
            this['_super']();
        }
    });

    /*! ---------------------------------------------------------
        EXPORTS
    ------------------------------------------------------------- */

    ns.EventDispatcher = EventDispatcher;
    ns.EventObject     = EventObject;

}(window, document, window));
