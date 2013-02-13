/* Test: "../../spec/_src/src/SessionStorage/test.js" */
C['SessionStorage'] = function(config) {
    config = config || {};

    config['type'] = 'session';
    return new WebStorage(config);
};
