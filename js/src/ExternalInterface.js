/* Test: "../../spec/_src/src/ExternalInterface/test.js" */
Global.ExternalInterface = function(config) {
    config = config || {};

    var external;

    if (config.single && Global.ExternalInterface.instance) {
        return Global.ExternalInterface.instance;
    }

    if (config.android) {
        external = new Global.ExternalInterface.Android(config);
    }
    else {
        external = new Global.ExternalInterface.IOS(config);
    }

    if (config.single) {
        Global.ExternalInterface.instance = external;
    }

    return external;
};
Global.ExternalInterface.instance = null;
