/* Test: "../../spec/_src/src/ExternalInterface/test.js" */
Global['ExternalInterface'] = function(config) {
    config = config || {};

    var Mine = Global['ExternalInterface'],
        external;

    if (config['single'] && Mine.instance) {
        return Mine.instance;
    }

    if (config['android']) {
        external = new ExternalAndroid(config);
    }
    else {
        external = new ExternalIOS(config);
    }

    if (config['single']) {
        Mine.instance = external;
    }

    return external;
};
