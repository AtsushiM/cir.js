DeviceMotion = C['DeviceMotion'] = function(config) {
    config['e'] = 'devicemotion';
    return WindowAction(config);
};
DeviceMotion['support'] = 'ondevicemotion' in win;
