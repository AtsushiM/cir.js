/* Test: "../../spec/_src/src/Event/test.js" */
(function() {
var instance,
    override = Global.utility.override;

Global.Event = function(config) {
    config = override({
        single: false,
        isMobile: function() {
            return false;
        }
    }, config);

    // singleton
    if (config.single && instance) {
        return instance;
    }

    // デフォルトイベント
    this.click = 'click';
    this.mousedown = 'mousedown';
    this.mousemove = 'mousemove';
    this.mouseup = 'mouseup';
    this.touchstart = 'touchstart';
    this.touchmove = 'touchmove';
    this.touchend = 'touchend';

    // 切替イベント
    this.switchclick = 'touchstart';
    this.switchdown = 'touchstart';
    this.switchmove = 'touchmove';
    this.switchup = 'touchend';

    if (!config.isMobile()) {
        this.switchclick = 'click';
        this.switchdown = 'mousedown';
        this.switchmove = 'mousemove';
        this.switchup = 'mouseup';
    }

    if (config.single) {
        instance = this;
    }
};
}());
