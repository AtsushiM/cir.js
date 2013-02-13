/* Test: "../../spec/_src/src/extend/test.js" */
C['extend'] = function(child, _super) {
    function ctor() {}

    ctor.prototype = _super.prototype;
    child.prototype = new ctor();

    var cpt = child.prototype;

    cpt._superclass = _super;
    // cpt._super = function() {
    //     var prev = this._prevctor;

    //     if (prev) {
    //         prev = prev.prototype._superclass;
    //     }
    //     else {
    //         prev = this._prevctor = _super;
    //     }

    //     prev.apply(this, arguments);
    // };
};
