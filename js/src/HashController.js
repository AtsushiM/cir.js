/* Test: "../../spec/_src/src/HashController/test.js" */
Global.HashController = function() {
    'use strict';

    var onHashChange = null,
        firingCount = 0,
        fireHashKey = 'fire',
        controller = {
            makeHash: function(config) {
                var hash = '#' + config.mode,
                    vars = config.vars,
                    sign = '?';

                for (var i in vars) {
                    /* if (i !== fireHashKey) { */
                        hash +=
                            sign +
                            i + '=' +
                            JSON.stringify(vars[i]);
                        sign = '&';
                    /* } */
                }

                // 発火回数を追加
                // if (!config.once) {
                //     hash += sign + fireHashKey + '=' + firingCount;
                //     firingCount++;
                // }

                return encodeURI(hash);
            },
            setHash: function(config) {
                location.hash = controller.makeHash(config);
                return true;
            },
            parseHash: function(hashvars) {
                var hash,
                    mode,
                    varsHash,
                    vars = null;

                // hash = [mode, contents]
                hash = decodeURI(hashvars)
                       .split('#')[1];

                // hashが存在しない場合終了
                if (!hash) {
                    return false;
                }

                hash = hash.split('?');

                mode = hash[0];

                if (hash[1]) {
                    vars = {};
                    varsHash = hash[1].split('&');

                    // hashをオブジェクトに整形
                    (function() {
                        var splitVar;

                        for (var i = 0, len = varsHash.length; i < len; i++) {
                            if (varsHash[i]) {
                                splitVar = varsHash[i].split('=');
                                vars[splitVar[0]] = typeCast(splitVar[1]);
                            }
                        }
                    }());

                    return {
                        mode: mode,
                        vars: vars
                    };
                }

                return {
                    mode: mode
                };
            },
            getHash: function() {
                return controller.parseHash(location.hash);
            }
        };

    function typeCast(str) {
        if (str.match('^{.*}$')) {
            return JSON.parse(str);
        }
        else if (str.match('^[0-9\.]+$')) {
            return str * 1;
        }
        else if (str === 'true') {
            return true;
        }
        else if (str === 'false') {
            return false;
        }
        else if (str.match('^["\'](.*)["\']$')) {
            return str.match('^["\'](.*)["\']$')[1];
        }

        return str;
    }

    return controller;
};
