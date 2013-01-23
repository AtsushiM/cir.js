/* Test: "../../spec/_src/src/HashQuery/test.js" */
Global['HashQuery'] = klass({
    'extend': Base,
    'properties': {
        'typeCast': function(str) {
            var caststr = typeCast(str),
                matchstr;

            if (str === caststr) {
                matchstr = str.match('^["\'](.*)["\']$');

                if (matchstr) {
                    return matchstr[1];
                }
            }

            return caststr;
        },
        'makeHash': function(conf) {
            var hash = '#' + conf['mode'],
                vars = conf['vars'],
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
        'setHash': function(vars) {
            location.hash = this['makeHash'](vars);
            return TRUE;
        },
        'parseHash': function(hashvars) {
            var hash,
                mode,
                varsHash,
                vars,
                splitVar,
                i;

            hash = decodeURIComponent(hashvars)
                   .split('#')[1];

            if (!hash) {
                return FALSE;
            }

            hash = hash.split('?');

            mode = hash[0];

            if (hash[1]) {
                vars = {};
                varsHash = hash[1].split('&');

                // hashをオブジェクトに整形
                for (i = varsHash.length; i--;) {
                    if (varsHash[i]) {
                        splitVar = varsHash[i].split('=');
                        vars[splitVar[0]] = this['typeCast'](splitVar[1]);
                    }
                }
            }

            return {
                'mode': mode,
                'vars': vars
            };
        },
        'getHash': function() {
            return this['parseHash'](location.hash);
        }
    }
});
