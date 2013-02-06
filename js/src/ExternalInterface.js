/* Test: "../../spec/_src/src/ExternalInterface/test.js" */
Global['ExternalInterface'] = function(config) {
    config = config || {};

    if (config['android']) {
        return new ExternalAndroid(config);
    }

    return new ExternalIOS(config);
};
