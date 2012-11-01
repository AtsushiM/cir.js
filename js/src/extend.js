/* Test: "../../spec/_src/src/extend/test.js" */
(function () {
'use strict';

Global.extend = function(child, _super) {
    function ctor() { this.constructor = child; }
    ctor.prototype = _super.prototype;
    child.prototype = new ctor();
    child.prototype._superclass = _super;
    child.prototype._super = function() {
        if (this._prevctor) {
            this._prevctor = this._prevctor.prototype._superclass;
        }
        else {
            this._prevctor = _super;
        }
        this._prevctor.apply(this, arguments);
    };
}
}());
