/* Test: "../../spec/_src/src/ExternalInterface/test.js" */
C['ExternalInterface'] = function(config) {
    config = config || NULLOBJ;

    var ext = ExternalIOS;

    if (config['android']) {
        ext = ExternalAndroid;
    }

    return new ext(config);
};
