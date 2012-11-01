/* Test: "../../spec/_src/src/Loading/test.js" */
(function() {
var win = Global.utility.win;

Global.Loading = function(config) {
    if (config && config.onload) {
        this.onload(config.onload);
    }
};
Global.Loading.prototype = {
    onload: function(func) {
        win.addEventListener('load', func);
    }
};
}());
