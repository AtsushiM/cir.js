/* Test: "../../spec/_src/src/DeviceMotion/test.js" */
C['DeviceMotion'] = function(config) {
    config['e'] = 'devicemotion';
    return WindowAction(config);
};
C['DeviceMotion']['support'] = 'ondevicemotion' in win;
