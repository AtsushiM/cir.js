/* Test: "../../spec/_src/src/ExternalAndroidInterface/test.js" */
(function() {
'use strict';

var instanse;

Global.ExternalAndroidInterface = Global.klass({
    init: function(config) {
        config = config || {};

        if (config.single && instanse) {
            return instanse;
        }

        this.android = config.android;
        this.externalObj = config.externalObj;

        if (!this.externalObj) {
            Global.EXTERNAL_ANDROID = {};
            this.externalObj = Global.EXTERNAL_ANDROID;
        }

        if (config.single) {
            instanse = this;
        }
    },
    properties: {
        hashCtrl: new Global.HashController(),
        'call': function(conf) {
            this.android[conf.mode](this.hashCtrl.makeHash(conf));
        },
        'addCallback': function(name, func) {
            var mine = this;
            mine.externalObj[name] = function(vars) {
                var objs = mine.hashCtrl.parseHash(vars);
                return func(objs.vars);
            };
        },
        'removeCallback': function(name) {
            delete this.externalObj[name];
        }
    }
});
}());
