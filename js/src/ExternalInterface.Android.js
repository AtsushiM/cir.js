/* Test: "../../spec/_src/src/ExternalInterface.Android/test.js" */
var ExternalAndroid = klassExtend(Global['HashQuery'], function(config) {
    this.android = config['android'];
    this.externalObj = config['externalObj'];
}, {
    'call': function(conf) {
        this.android[conf['mode']](this['makeHash'](conf));
    },
    'addCallback': function(name, func) {
        var mine = this;

        mine.externalObj[name] = function(vars) {
            func(mine['parseHash'](vars)['vars']);
        };
    },
    'removeCallback': function(name) {
        delete this.externalObj[name];
    }
});
