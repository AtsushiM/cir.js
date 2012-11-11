/* Test: "../../spec/_src/src/HashController/test.js" */
(function() {
'use strict';

var util = Global.utility,
    cast = util.typeCast;

Global.HashController = Global.klass({
    init: function() {},
    methods: {
        makeHash: function(conf) {
            var hash = '#' + conf.mode,
                vars = conf.vars,
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
        setHash: function(vars) {
            location.hash = this.makeHash(vars);
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
            return this.parseHash(location.hash);
        }
    }
});

function typeCast(str) {
    var caststr = cast(str);

    if (str === caststr && str.match('^["\'](.*)["\']$')) {
        return str.match('^["\'](.*)["\']$')[1];
    }

    return caststr;
}
}());
