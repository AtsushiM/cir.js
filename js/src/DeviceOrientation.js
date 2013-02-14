/* Test: "../../spec/_src/src/DeviceOrientation/test.js" */
C['DeviceOrientation'] = function(config) {
    config['e'] = 'deviceorientation';
    return WindowAction(config);
};
C['DeviceOrientation']['support'] = 'ondeviceorientation' in win;
