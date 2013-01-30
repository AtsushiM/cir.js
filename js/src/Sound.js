/* Test: "../../spec/_src/src/Sound/test.js" */
Global['Sound'] = function(config) {
    config['type'] = 'Audio';
    return new Media(config);
};
Global['Sound']['support'] = Global['Audio']['support'];
