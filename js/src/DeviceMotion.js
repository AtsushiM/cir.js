/* Test: "../../spec/_src/src/DeviceMotion/test.js" */
Global['DeviceMotion'] = function(config) {
    config['e'] = 'devicemotion';
    return DeviceAction(config);
};
Global['DeviceMotion']['support'] = 'ondevicemotion' in win;
