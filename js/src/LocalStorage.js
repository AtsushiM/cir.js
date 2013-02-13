/* Test: "../../spec/_src/src/LocalStorage/test.js" */
C['LocalStorage'] = function(config) {
    config = config || {};

    config['type'] = 'local';
    return new WebStorage(config);
};
