/* Test: "../../spec/_src/src/Loading/test.js" */
Global.Loading = function(config) {
    'use strict';

    var win = Global.utility.win,
        instanse = {
            onload: function(func) {
                win.addEventListener('load', func);
            }
        };

    if (config) {
        if (config.onload) {
            instanse.onload(config.onload);
        }
    }

    return instanse;
};
