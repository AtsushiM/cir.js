/* Test: "../../spec/_src/src/SessionStorage/test.js" */
Global['SessionStorage'] = function(config) {
    config = config || {};

    config['type'] = 'Session';
    return new Global['WebStorage'](config);
};
