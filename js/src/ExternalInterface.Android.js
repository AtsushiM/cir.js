/* Test: "../../spec/_src/src/ExternalInterface.Android/test.js" */
var ExternalAndroid = klassExtend(Global['HashQuery'], function(config) {
    this.android = config['android'];
    this.externalObj = config['externalObj'];
}, {
    'call': function(conf) {
        this.android[conf['mode']](this['makeHash'](conf));
    },
    'addCallback': function(name, func) {
        this.externalObj[name] = bind(this, function(vars) {
            var objs = this['parseHash'](vars);
            return func(objs['vars']);
        });
    },
    'removeCallback': function(name) {
        delete this.externalObj[name];
    }
});
