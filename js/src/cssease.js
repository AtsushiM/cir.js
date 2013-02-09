/* Test: "../../spec/_src/src/cssease/test.js" */
Global['cssease'] = {
    'linear': 'linear',

    'inCubic': cssCubicBezierFormat('0.55,0.055,0.675,0.19'),
    'outCubic': cssCubicBezierFormat('0.215,0.61,0.355,1'),
    'inOutCubic': cssCubicBezierFormat('0.645,0.045,0.355,1'),

    'inQuart': cssCubicBezierFormat('0.895,0.03,0.685,0.22'),
    'outQuart': cssCubicBezierFormat('0.165,0.84,0.44,1'),
    'inOutQuart': cssCubicBezierFormat('0.77,0,0.175,1'),

    'inQuint': cssCubicBezierFormat('0.755,0.05,0.855,0.06'),
    'outQuint': cssCubicBezierFormat('0.23,1,0.32,1'),
    'inOutQuint': cssCubicBezierFormat('0.86,0,0.07,1'),

    'inSine': cssCubicBezierFormat('0.47,0,0.745,0.715'),
    'outSine': cssCubicBezierFormat('0.39,0.575,0.565,1'),
    'inOutSine': cssCubicBezierFormat('0.445,0.05,0.55,0.95'),

    'inExpo': cssCubicBezierFormat('0.95,0.05,0.795,0.035'),
    'outExpo': cssCubicBezierFormat('0.19,1,0.22,1'),
    'inOutExpo': cssCubicBezierFormat('1,0,0,1'),

    'inCirc': cssCubicBezierFormat('0.6,0.04,0.98,0.335'),
    'outCirc': cssCubicBezierFormat('0.075,0.82,0.165,1'),
    'inOutCirc': cssCubicBezierFormat('0.785,0.135,0.15,0.86'),

    'inQuad': cssCubicBezierFormat('0.55,0.085,0.68,0.53'),
    'outQuad': cssCubicBezierFormat('0.25,0.46,0.45,0.94'),
    'inOutQuad': cssCubicBezierFormat('0.455,0.03,0.515,0.955'),

    'inBack': [cssCubicBezierFormat('0.6,0,0.735,0.045'),cssCubicBezierFormat('0.6,-0.28,0.735,0.045')],
    'outBack': [cssCubicBezierFormat('0.175,0.885,0.32,1'),cssCubicBezierFormat('0.175,0.885,0.32,1.275')],
    'inOutBack': [cssCubicBezierFormat('0.68,0,0.265,1'),cssCubicBezierFormat('0.68,-0.55,0.265,1.55')]
};
