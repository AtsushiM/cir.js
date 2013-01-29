/* Test: "../../spec/_src/src/DeviceOrientation/test.js" */
Global['DeviceOrientation'] = function(config) {
    config = config || {};
    config['e'] = 'deviceorientation';
    return new Global.DeviceAction(config);
};
Global['DeviceOrientation']['support'] = 'ondeviceorientation' in win;
