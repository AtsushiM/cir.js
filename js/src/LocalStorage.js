/* Test: "../../spec/_src/src/LocalStorage/test.js" */
Global['LocalStorage'] = function(config) {
    config = config || {};

    config['type'] = 'local';
    return new WebStorage(config);
};
