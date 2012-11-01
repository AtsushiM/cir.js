/* Test: "../../spec/_src/src/ExternalInterface/test.js" */
(function() {
'use strict';

var instanse;

Global.ExternalInterface = function(config) {
    config = config || {};

    var external;

    if (config.single && instanse) {
        return instanse;
    }

    if (config.android) {
        external = new Global.ExternalAndroidInterface(config);
    }
    else {
        external = new Global.ExternalIOSInterface(config);
    }

    if (config.single) {
        instanse = external;
    }

    return external;
};
}());
