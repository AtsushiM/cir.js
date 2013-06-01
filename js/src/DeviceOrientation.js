DeviceOrientation = C['DeviceOrientation'] = function(config) {
    config['e'] = 'deviceorientation';
    return WindowAction(config);
};
DeviceOrientation['support'] = 'ondeviceorientation' in win;
