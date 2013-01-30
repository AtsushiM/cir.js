/* Test: "../../spec/_src/src/Movie/test.js" */
Global['Movie'] = function(config) {
    config['type'] = 'Video';
    return new Media(config);
};
Global['Movie']['support'] = Global['Video']['support'];
