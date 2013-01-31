/**
 * This script give simple keyframe system.
 * @version 0.0.1
 * @author Kazuya Hiruma
 * @email edo.m18@gmail.com
 * @blog http://css-eblog.com/
 * @github https://github.com/edom18/SimpleKeyframes.js
 */
(function(win, doc, Class, exports, undefined) {

    'use strict';

    function noop (argument) { /* noop. */ }

    function PropertyValue (types) {
        this._types = types;
        this._value = null;
        this._optimize();
    }
    PropertyValue.prototype = {
        toString: function () {
            return this.stringify();
        },
        stringify: function (val) {

            var types = this._types,
                type  = null,
                values = [],
                cnt    = 0,
                ret    = '';

            for (var i = 0, l = types.length; i < l; ++i) {
                type = types[i];

                for (var prop in type) {
                    values = type[prop];
                    ret += prop !== '-' ? prop + '(' : '';

                    for (var j = 0, k = values.length; j < k; j += 3) {
                        ret += val ? val[cnt++] : values[j + 0]; //as number
                        ret += values[j + 1] || ''; // as unit
                        ret += values[j + 2] || ''; // as separator
                    }

                    ret += prop !== '-' ? ') ' : '';
                }
            }


            return ret;
        },
        _optimize: function () {

            var ret = [],
                types = this._types,
                type = null,
                value = [];

            for (var i = 0, l = types.length; i < l; ++i) {
                type = types[i];
                for (var prop in type) {
                    value = type[prop];

                    for (var j = 0, k = value.length; j < k; ++j) {
                        if (typeof value[j] === 'number') {
                            ret.push(value[j]);
                        }
                    }
                }
            }

            type = null;
            types = null;

            this._value = ret;
        },
        getValues: function () {
            return this._value;
        },
        getTypes: function () {
            return this._types;
        },
        constructor: PropertyValue
    };

    function ValueParser (prop, str) {
        this._str = str;
        this._cur = str;
        this._prop = prop;
        this._value = [];
        this._type = '';
        this._types = [];
    }

    ValueParser.prototype = {
        parse: function () {

            var type = {},
                reg = null,
                m   = null;

            //type of number
            if (typeof this._cur === 'number') {
                type['-'] = [ this._cur, getUnitType(this._prop)];
                this._types.push(type);
            }

            //type of like number.
            else if (/^\d+$/.test(this._cur)) {
                type['-'] = [ this._cur, getUnitType(this._prop)];
                this._types.push(type);
            }

            /*!
             * type of number with unit.
             * e.g. 5px | 5px 5px
             */
            else if (/\d/.test(this._cur.charAt(0))) {
                type['-'] = this._parse();
                this._types.push(type);
            }

            /*!
             * type of this._curing.
             * e.g. rotate(90deg) | translate3d(1px, 2px, 3px) | scale(0) rotate(30deg)
             */
            else {
                this._parseWord();
            }

            return new PropertyValue(this._types);
        },

        _parseWord: function () {

            var type = {};

            //If context start as charactor, it is like string as type with '('.
            var reg = /\s*(\w+)\(/i;
            var m = reg.exec(this._cur);

            if (!(m && m[1])) {
                throw new Error('Parse error for property value.');
            }

            this._cur = this._cur.replace(reg, '');

            if (!this._cur) {
                throw new Error('Not fount end of context as ")" charactor.');
            }

            //parse for primitive.
            type[m[1]] = this._parse();
            this._types.push(type);

            reg = /\s*\)/i;
            this._cur = this._cur.replace(reg, '');

            if (this._cur) {
                this._parseWord();
            }
        },

        /**
         * Parse string.
         *
         * @return {Array}
         */
        _parse: function () {

            var ret = [],
                reg = null,
                m   = null;

            while (true) {
                reg = /^\s*(-?\d+)(\.?\d+)*([a-z%]*)([\s,])?/i;
                m = reg.exec(this._cur);

                if (!m || !m[0]) {
                    break;
                }

                if (m[2]) {
                    ret.push(+(m[1] + m[2]));
                }
                else {
                    ret.push(+m[1]);
                }

                ret.push(m[3] || '');

                if (m[4]) {
                    ret.push(this._separate || m[4]);
                    this._separate = this._separate || m[4];
                }

                this._cur = this._cur.replace(reg, '');
            }

            return ret;
        },
        constructor: ValueParser
    };

    var unitTypes = {};

    function getUnitType (prop) {
        if (unitTypes[prop] !== undefined) {
            return unitTypes[prop];
        }

        var div = doc.createElement('div');

        if (!prop in div.style) {
            return null;
        }

        div.style[prop] = 0;

        var unit = '' + div.style[prop];
        unit = unit.slice(1);
        unitTypes[prop] = unit;

        return unit;
    }

    function each (arr, func, context) {
        if (Array.prototype.forEach) {
            arr.forEach(func, context);
        }
        else {
            for (var i = 0, l = arr.length; i < l; ++i) {
                func.call(context || arr, arr[i]);
            }
        }
    }

    function isFunction (arg) {
        return ({}).toString.call(arg) === '[object Function]';
    }

    /**
     * Dispose class
     * @constructor
     */
    var Disposal = Class.extend({
        disposeInternal: noop,
        dispose: function (removeNode) {
            var el = this.el;

            if (removeNode && el) {
                el.parentNode.removeChild(el);
                this.el = null;
            }

            this.disposeInternal.apply(this, arguments);
        }
    });


    /**
     * EvtEmit class.
     * @constructor
     * @example
     * var targetObj = {};
     * EvtEmit.attach(targetObj);
     * //attach event
     * targetObj.bind('update', function (data) {
     *         alert('update!');
     * });
     * //dispatch event
     * targetObj.trigger('update', data);
     */
    var EvtEmit = Disposal.extend({
        dispose: function (removeNode) {
            this._super(removeNode);
            this.off();
        },
        trigger: function  (type, optData) {

            var handlers,
                handleArr,
                l,
                func;

            if (!type) {
                return false;
            }

            handlers = this.handlers || (this.handlers = {});
            handleArr = handlers[type] || [];
            l = handleArr.length;

            while(l--) {
                (func = handleArr[l]) &&
                func[0].call(func[1] || this, optData);
            }
        },
        bind: function (type, func, context) {
            var handlers = this.handlers || (this.handlers = {});

            if (!type) {
                return false;
            }

            (handlers[type] || (handlers[type] = [])).push([func, context]);
        },

        one: function (type, func, context) {

            var self = this;

            function _func () {
                self.off(type, _func);
                func.apply(context, arguments);
                context = null;
                self  = null;
                _func = null;
            }

            this.on(type, _func, context);
        },

        unbind: function (type, func) {

            var handlers,
                handleArr,
                i;

            if (arguments.length === 0) {
                this.clear();
                return;
            }

            if (!type) {
                return false;
            }

            handlers  = this.handlers || (this.handlers = {});
            handleArr = handlers[type] || [];
            i = handleArr.length;

            if (!func) {
                this.handlers[type] = [];
            }
            else {
                while (i--) {
                    handleArr[i][0] === func && handleArr.splice(i, 1);
                }
            }
        },

        clear: function () {
            var handlers  = this.handlers;

            for (var type in handlers) {
                handlers[type] = [];
            }
        }
    });


    /////////////////////////////////////////////////////////////////////

    //Shortcut.
    EvtEmit.fn = EvtEmit.prototype;
    EvtEmit.fn.fire = EvtEmit.fn.trigger;
    EvtEmit.fn.on = EvtEmit.fn.bind;
    EvtEmit.prototype.off = EvtEmit.fn.unbind;

    /* ------------------------------------------------
        Defined class method.
    --------------------------------------------------- */
    EvtEmit.attach = (function() {

        var re = new RegExp('Object|Array|Date|Arguments', 'i');

        /**
         * util functions
         */
        function detectType(o) {
            return Object.prototype.toString.call(o).replace(/^\[object (.+)\]$/, '$1');
        }

        function makeArray(args, sp) {
            if (!sp) {
                sp = 0;
            }

            return Array.prototype.slice.call(args, sp);
        }

        function _cloneObject(o, type) {

            var newList = [],
                i, e;

            if(!type) {
                type = detectType(o);
            }
            if (type == 'Array') {
                for (i = 0; e = o[i];  i++) {
                  newList.push(_cloneObject(e));
                }

                return newList;
            }
            else if (type == 'Object' || type == 'Arguments') {

              return _extendObject({}, o, true);
            }
            else if (type == 'Date') {

              return new Date(o.toString());
            }
            else {

              return o;
            }
        }

        function _extendObject(parent, obj, deepCopy) {

            var val, type;

            for (var key in obj) {
                val = obj[key];
                type = detectType(val);

                parent[key] = (deepCopy && re.test(type)) ? _cloneObject(val, type) : val;
            }

            return parent;
        }

        return function(target) {
            _extendObject(target, new EvtEmit, true);
        };
    })();

    ////////////////////////////////////////////////////////

    var Crono = EvtEmit.extend({
        init: function () {
            this._children  = [];
            this._frame     = 0;
            this._lastFrame = 0;
            this._reversing = false;
            this.play();
        },

        /*! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            PRIVATE METHODS.
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
        /**
         * Return last frame number.
         * @return {number}
         */
        _getLastFrame: function () {
            var children = this._children,
                len = children.length,
                ret = 0,
                max = Math.max;

            while (len--) {
                ret = max(ret, children[len].getLastFrame());
            }

            return ret;
        },


        /*! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            PUBLIC METHODS.
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

        /**
         * Remove child as argument.
         * @param {Crono} crono
         */
        remove: function (crono) {
            var children = this._children,
                len = children.length,
                ret = null;

            while (len--) {
                if (children[len] === crono) {
                    ret = children.splice(len, 1);
                    break;
                }
            }

            return ret;
        },

        /**
         * function of arguments invoke to takes each child.
         */
        each: function (func, context) {
            each(this._children, func, context || this);
        },

        /**
         * Set parent as this.
         * @param {Crono} crono
         */
        setParent: function (crono) {
            this._parent = crono;
        },

        /**
         * Add child. This takes Crono class.
         * @param {Crono} crono
         */
        add: function (crono) {
            if (({}).toString.call(crono) !== '[object Array]') {
                crono = [crono];
            }

            for (var i = 0, l = crono.length; i < l; ++i) {
                crono[i].setParent(this);
                this._children.push(crono[i]);
            }

            this._lastFrame = this._getLastFrame();
        },

        /**
         * Switch the time flow to forward.
         * If _reversing is false, time to move forward.
         */
        timeForward: function () {
            this._reversing = false;
            this.play();

            this.each(function (child) {
                child.timeForward();
            });
        },

        /**
         * Switch the time flow to backward.
         * If _reversing is true, time to move backward.
         */
        timeBackward: function () {
            this._reversing = true;
            this.play();

            this.each(function (child) {
                child.timeBackward();
            });
        },

        /**
         * noop
         */
        getLastFrame: noop,

        /**
         * Every frame it is invoked.
         */
        enterFrame: function (reverse, isTerminal) {
            var children = this._children;
            var len = children.length;

            if (this._stopped) {
                return;
            }

            while (len--) {
                children[len].enterFrame(reverse, isTerminal);
            }
        },

        /**
         * Switch stop flag to `false`
         * If this flag is false, enterFrame method will work.
         */
        play: function () {
            this._stopped = false;
        },

        playFor: function () {
            this.timeForward();
            this.play();
        },
        playBack: function () {
            this.timeBackward();
            this.play();
        },

        /**
         * Switch stop flag to `true`
         * If this flag is true, enterFrame method will skip progress.
         */
        stop: function () {
            this._stopped = true;
        }
    });

    /////////////////////////////////////////////////////////////////

    var Stage = Crono.extend({
        init: function () {
            this._super();
            this._stopped = true;
        },

        /**
         * Every frame it will be called.
         */
        flow: function () {
            var children  = this._children,
                len       = children.length,
                lastFrame = this._lastFrame,
                endFlg    = false,
                t;

            if (this._stopped) {
                return;
            }

            t = this._reversing ? --this._frame : ++this._frame;

            if (t < 0) {
                this._frame = t = 0;
            }
            else if (t === lastFrame) {
                this.trigger('animationend');
            }
            else if (t > lastFrame) {
                this._frame = t = lastFrame;
                endFlg = true;
            }

            while (len--) {
                children[len].enterFrame(endFlg);
            }
        },

        /**
         * Start the time.
         */
        run: function () {
            var self = this;

            this._stopped = false;

            if (this._running) {
                return;
            }

            this._running = true;

            (function loop() {
                if (self._stopped) {
                    return;
                }
                self.flow();
                self.frameTimer = setTimeout(loop, 32);
            }());
        },

        /**
         * Stop the time.
         */
        stop: function () {
            this._super();
            clearTimeout(this.frameTimer);
            this._running = false;
        }
    });

    /////////////////////////////////////////////////////////////////

    /**
     * Keyframes class.
     * @constructor
     * Disposal <- EvtEmit
     */
    var Keyframes = EvtEmit.extend({
        init: function (frames, config) {

            config || (config = {});
            config.defaults || (config.defaults = {});

            if (({}).toString.call(frames) !== '[object Array]') {
                frames = [frames];
            }

            this._frames = frames;
            this._config = config;
            this._optimize();
        },

        dispose: function () {
            this._super();
            this._keyframeActions = null;
            this._frames = null;
        },

        /*! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            PRIVATE METHODS.
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
        /**
         * @param {number} pos
         */
        _getKeyframes: function (pos) {

            var frames = this._frames,
                len  = frames.length,
                from = null,
                to   = null;

            while (len--) {
                if (frames[len].frame === pos) {
                    from = frames[len];
                    break;
                }
                if (frames[len].frame <= pos) {
                    from = frames[len + 0];
                    to   = frames[len + 1];
                    break;
                }
            }

            return {
                from: from,
                to: to
            };
        },

        /**
         * Optimize data.
         */
        _optimize: function () {

            var frameItem = null,
                keyframeActions = {},
                frames = this._frames,
                config = this._config;

            this.each(function (frame) {

                var properties,
                    unit = '',
                    div  = null,
                    vp   = null;

                if (frame) {
                    frame.easing = easing[frame.timingFunction || config.defaults.timingFunction || ''];

                    if (isFunction(frame.on)) {
                        keyframeActions[frame.frame] = frame.on;
                    }

                    if (frame.properties) {
                        frame.properties_ = {};
                        properties = frame.properties;

                        for (var prop in properties) {
                            div  = doc.createElement('div');
                            unit = '';

                            if (!prop in div.style) {
                                delete properties[prop];
                                continue;
                            }

                            if (typeof properties[prop] === 'number') {
                                unit = getUnitType(prop);
                            }

                            div.style[prop] = properties[prop] + (unit || '');

                            if (!div.style[prop]) {
                                delete properties[prop];
                                continue;
                            }

                            vp = new ValueParser(prop, properties[prop]);
                            var tmp = vp.parse();

                            frame.properties_[prop] = tmp;
                        }
                    }
                }
            }, this);

            this._keyframeActions = keyframeActions;

            if ((frameItem = frames[frames.length - 1])) {
                this._lastFrame = frameItem.frame;
            }
        },

        _makeProperties: function (properties) {
            var ret = {};

            for (var prop in properties) {
                ret[prop] = properties[prop].toString();
            }

            return ret;
        },

        /*! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            PUBLIC METHODS.
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
        each: function (func) {
            each(this._frames, func, this);
        },

        /**
         * @param {Crono} crono
         */
        setParent: function (crono) {
            this._parent = crono;
        },

        getLastFrame: function () {
            return this._lastFrame || 0;
        },

        /**
         * @param {number} pos
         * @return {?Object}
         */
        getFrameAt: function (pos) {

            var keyframeActions = this._keyframeActions,
                lastFrame = this._lastFrame,
                keyframes = null,
                from = null,
                to   = null,
                ret  = {},

                easeFunc,
                fromProp,
                toProp,
                fromVal,
                toVal;

            keyframes = this._getKeyframes(pos);
            from = keyframes.from;
            to   = keyframes.to;

            if (!from) {
                return null;
            }

            easeFunc = from.easing;

            if (!to) {
                ret = this._makeProperties(from.properties_);
            }
            else if (!easeFunc) {
                ret = this._makeProperties(from.properties_);
            }
            else {
                fromProp = from.properties_;
                toProp   = to.properties_;

                var fromFrame = from.frame,
                    f = 0,
                    b = 0,
                    c = 0,
                    d = to.frame - fromFrame,
                    val = 0,
                    unit = '',
                    action = null,
                    flg = false,
                    tmp = [];

                for (var prop in fromProp) {

                    flg = (fromProp[prop] && toProp[prop]);

                    if (flg === 0 || flg) {
                        fromVal = fromProp[prop].getValues();
                        toVal   = toProp[prop].getValues();
                        tmp = [];

                        for (var i = 0, l = fromVal.length; i < l; ++i) {
                            b = fromVal[i];
                            f = toVal[i];
                            c = f - b;
                            tmp.push(easeFunc(pos - fromFrame, b, c, d));
                        }

                        ret[prop] = fromProp[prop].stringify(tmp);
                    }
                }
            }

            if ((action = keyframeActions[pos])) {
                action.call(this._parent);
            }

            if (lastFrame <= pos) {
                this.trigger('frameend', {
                    lastFrame: lastFrame
                });
            }

            return ret;
        }
    });

    /////////////////////////////////////////////////////////////////

    var Movie = Crono.extend({
        init: function (el, keyframes, config) {
            this._super();

            this.el     = el;
            this._index = 0;

            this.setKeyframes(keyframes, config);
        },

        dispose: function (removeNode) {
            this._super(removeNode);
            this._parent.remove(this);
            this._keyframes.dispose();
            this._keyframes = null;
        },

        /**
         * @return {number}
         */
        getLastFrame: function () {
            return this._keyframes.getLastFrame();
        },

        /**
         * @param {boolean} reverse
         */
        enterFrame: function (isTerminal) {

            this._super(isTerminal);

            if (this._stopped) {
                return;
            }

            var t  = this._frame,
                el = this.el,
                keyframes = this._keyframes,
                props;

            if (this._reversing) {
                --t;
            }
            else if (!isTerminal || this._lastFrame > t) {
                ++t;
            }

            if (t < 0) {
                this._frame = t = 0;
            }

            this._frame = t;

            if (!el) {
                return;
            }

            props = keyframes.getFrameAt(t);

            for (var prop in props) {
                el.style[prop] = props[prop];
            }
        },

        /**
         * Go frame to position and play.
         * @param {number} pos
         */
        gotoAndPlay: function (pos) {
            this.go(pos);
            this.play();
        },

        /**
         * Go frame to position and stop.
         * @param {number} pos
         */
        gotoAndStop: function (pos) {
            this.go(pos);
            this.stop();
        },

        /**
         * Go frame to position.
         * @param {number} pos
         */
        go: function (pos) {
            this._frame = +pos;
        },

        /**
         * Set keyframes.
         * @param {Keyframes} keyframes
         */
        setKeyframes: function (keyframes, config) {
            var _keyframes = null;

            _keyframes = keyframes instanceof Keyframes ? keyframes : new Keyframes(keyframes, config);
            _keyframes.setParent(this);

            this._keyframes = _keyframes;
            this._lastFrame = this.getLastFrame();
        },


        /*! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            PRIVATE METHODS.
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
        _onUpdate: function (data) {
            //this.stop();
            //this._frame = data.lastFrame;
        }
    });

    exports.Keyframes = Keyframes;
    exports.Crono = Crono;
    exports.Stage = Stage;
    exports.Movie = Movie;
    exports.ValueParser = ValueParser;

}(window, window.document, window.Class, window));
