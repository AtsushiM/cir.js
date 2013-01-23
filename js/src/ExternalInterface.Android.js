/* Test: "../../spec/_src/src/ExternalInterface.Android/test.js" */
Global['ExternalInterface']['Android'] = klass({
    'extend': Global['HashQuery'],
    'init': function(config) {
        config = config || {};

        this.android = config['android'];
        this.externalObj = config['externalObj'];
    },
    'properties': {
        'call': function(conf) {
            this.android[conf['mode']](this['makeHash'](conf));
        },
        'addCallback': function(name, func) {
            var mine = this;
            mine.externalObj[name] = function(vars) {
                var objs = mine['parseHash'](vars);
                return func(objs['vars']);
            };
        },
        'removeCallback': function(name) {
            delete this.externalObj[name];
        }
    }
});
