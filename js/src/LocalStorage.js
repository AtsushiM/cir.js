/* Test: "../../spec/_src/src/LocalStorage/test.js" */
Global['LocalStorage'] = function(config) {
    config = config || {};

    config['type'] = 'Local';
    return new Global['WebStorage'](config);
};
