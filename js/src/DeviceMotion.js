/* Test: "../../spec/_src/src/DeviceMotion/test.js" */
Global['DeviceMotion'] = function(config) {
    config = config || {};
    config['e'] = 'devicemotion';
    return new Global.DeviceAction(config);
};
Global['DeviceMotion']['support'] = 'ondevicemotion' in win;
