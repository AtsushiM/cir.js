/* Test: "../../spec/_src/src/ExternalInterface/test.js" */
Global.ExternalInterface = function(config) {
    'use strict';

    var external,
        isAndroid = false,
        android = null,
        ios = null,
        hashCtrl = new Global.HashController();

    if (!config) {
        config = {};
    }

    // ネイティブから呼び出しメソッドが設定されているか、
    // 強制的にAndoroidモードにするフラグでチェック
    if (config.android) {
        isAndroid = true;
        android = config.android;

        // Androidのネイティブから参照するオブジェクト
        Global.EXTERNAL = {};
    }
    else {
        ios = {};
    }

    external = (function() {
            var returned;
            if (isAndroid) {
                // Android
                returned = {
                    call: function(config) {
                        android[config.mode](hashCtrl.makeHash(config));
                    },
                    addCallback: function(name, func) {
                        Global.EXTERNAL[name] = function(vars) {
                            var objs = hashCtrl.parseHash(vars);
                            return func(objs.vars);
                        };
                    },
                    removeCallback: function(name) {
                        delete Global.EXTERNAL[name];
                    }
                };
            }
            else {
                // iOS
                returned = {
                    call: function(config) {
                        hashCtrl.setHash(config);
                    },
                    addCallback: function(name, func) {
                        ios[name] = function(e) {
                            var hash = hashCtrl.getHash();

                            if (hash.mode === name) {
                                func(hash.vars);
                                return true;
                            }
                            return false;
                        };
                        window.addEventListener('hashchange', ios[name]);
                    },
                    removeCallback: function(name) {
                        window.removeEventListener('hashchange', ios[name]);
                        delete ios[name];
                    }
                };
            }

            returned.isAndroid = function() {
                return isAndroid;
            };

            return returned;
        }());

    return external;
};
