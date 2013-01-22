/* Test: "../../spec/_src/src/ease/test.js" */
var easebackrate = 1.70158;
Global['ease'] = {
    'linear': function(time, from, dist, duration) {
        return dist * time / duration + from;
    },
    'inCubic': function(time, from, dist, duration) {
        return dist * Math.pow(time / duration, 3) + from;
    },
    'outCubic': function(time, from, dist, duration) {
        return dist * (Math.pow(time / duration - 1, 3) + 1) + from;
    },
    'inOutCubic': function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * Math.pow(time, 3) + from;
        }
        return dist / 2 * (Math.pow(time - 2, 3) + 2) + from;
    },
    'inQuart': function(time, from, dist, duration) {
        return dist * Math.pow(time / duration, 4) + from;
    },
    'outQuart': function(time, from, dist, duration) {
        return -dist * (Math.pow(time / duration - 1, 4) - 1) + from;
    },
    'inOutQuart': function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * Math.pow(time, 4) + from;
        }
        return -dist / 2 * (Math.pow(time - 2, 4) - 2) + from;
    },
    'inQuint': function(time, from, dist, duration) {
        return dist * Math.pow(time / duration, 5) + from;
    },
    'outQuint': function(time, from, dist, duration) {
        return dist * (Math.pow(time / duration - 1, 5) + 1) + from;
    },
    'inOutQuint': function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * Math.pow(time, 5) + from;
        }
        return dist / 2 * (Math.pow(time - 2, 5) + 2) + from;
    },
    'inSine': function(time, from, dist, duration) {
        return dist *
            (1 - Math.cos(time / duration * (Math.PI / 2))) + from;
    },
    'outSine': function(time, from, dist, duration) {
        return dist * Math.sin(time / duration * (Math.PI / 2)) + from;
    },
    'inOutSine': function(time, from, dist, duration) {
        return dist / 2 * (1 - Math.cos(Math.PI * time / duration)) + from;
    },
    'inExpo': function(time, from, dist, duration) {
        return dist * Math.pow(2, 10 * (time / duration - 1)) + from;
    },
    'outExpo': function(time, from, dist, duration) {
        return dist * (-Math.pow(2, -10 * time / duration) + 1) + from;
    },
    'inOutExpo': function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * Math.pow(2, 10 * (time - 1)) + from;
        }
        return dist / 2 * (-Math.pow(2, -10 * --time) + 2) + from;
    },
    'inCirc': function(time, from, dist, duration) {
        return dist * (1 - Math.sqrt(1 - (time /= duration) * time)) + from;
    },
    'outCirc': function(time, from, dist, duration) {
        return dist *
            Math.sqrt(1 - (time = time / duration - 1) * time) + from;
    },
    'inOutCirc': function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * (1 - Math.sqrt(1 - time * time)) + from;
        }
        return dist / 2 * (Math.sqrt(1 - (time -= 2) * time) + 1) + from;
    },
    'inQuad': function(time, from, dist, duration) {
        return dist * (time /= duration) * time + from;
    },
    'outQuad': function(time, from, dist, duration) {
        return -dist * (time /= duration) * (time - 2) + from;
    },
    'inOutQuad': function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * time * time + from;
        }
        return -dist / 2 * ((--time) * (time - 2) - 1) + from;
    },
    'inBack': function(time, from, dist, duration) {
        return dist * (time /= duration) * time * ((s + 1) * time - s) + from;
    },
    'outBack': function(time, from, dist, duration) {
        return dist * ((time = time / duration - 1) * time *
                ((easebackrate + 1) * time + easebackrate) + 1) + from;
    },
    'inOutBack': function(time, from, dist, duration) {
        if ((time /= duration / 2) < 1) {
            return dist / 2 * (time * time *
                    (((easebackrate *= (1.525)) + 1) * time - easebackrate)) + from;
        }
        return dist / 2 * ((time -= 2) * time *
                (((easebackrate *= (1.525)) + 1) * time + easebackrate) + 2) + from;
    }
};
