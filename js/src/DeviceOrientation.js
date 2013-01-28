/* Test: "%JASMINE_TEST_PATH%" */
Global['DeviceOrientation'] = function(config) {
    config.e = 'deviceorientation';
    return new Glogal.DeviceAction(config);
};
Global['DeviceOrientation']['support'] = 'ondeviceorientation' in win;
