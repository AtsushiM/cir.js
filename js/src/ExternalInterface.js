/* Test: "../../spec/_src/src/ExternalInterface/test.js" */
Global['ExternalInterface'] = function(config) {
    config = config || NULLOBJ;

    var ext = ExternalIOS;

    if (config['android']) {
        ext = ExternalAndroid;
    }

    return new ext(config);
};
