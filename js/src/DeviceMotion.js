/* Test: "../../spec/_src/src/DeviceMotion/test.js" */
C['DeviceMotion'] = function(config) {
    config['e'] = 'devicemotion';
    return DeviceAction(config);
};
C['DeviceMotion']['support'] = 'ondevicemotion' in win;
