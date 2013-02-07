/* Test: "../../spec/_src/src/DeviceOrientation/test.js" */
Global['DeviceOrientation'] = function(config) {
    config = config || {};
    config['e'] = 'deviceorientation';
    return Global.DeviceAction(config);
};
Global['DeviceOrientation']['support'] = 'ondeviceorientation' in win;
