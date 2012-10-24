/* Test: "../../spec/_src/src/HashController/test.js" */
Global.HashController = function() {
    'use strict';

    var util = Global.utility,
        cast = util.typeCast,
        controller = {
            makeHash: function(config) {
                var hash = '#' + config.mode,
                    vars = config.vars,
                    sign = '?',
                    i;

                for (i in vars) {
                    hash +=
                        sign +
                        i + '=' +
                        JSON.stringify(vars[i]);
                    sign = '&';
                }

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

                hash = decodeURIComponent(hashvars)
                       .split('#')[1];

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
                        var splitVar,
                            i;

                        for (i = varsHash.length; i--;) {
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
        var caststr = cast(str);

        if (str === caststr && str.match('^["\'](.*)["\']$')) {
            return str.match('^["\'](.*)["\']$')[1];
        }

        return caststr;
    }

    return controller;
};
