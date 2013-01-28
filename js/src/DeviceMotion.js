/* Test: "%JASMINE_TEST_PATH%" */
Global['DeviceMotion'] = function(config) {
    config.e = 'devicemotion';
    return new Glogal.DeviceAction(config);
};
Global['DeviceMotion']['support'] = 'ondevicemotion' in win;
