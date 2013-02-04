/* Test: "%JASMINE_TEST_PATH%" */
Global['View'] = klassExtendBase(function(config) {
    this.el = config['el'] || create('div');

}, {
});

/*
var view = C.klass({
    extend: C.View,
    init: function() {
        // this.opt1 = config.opt1;
        this.model = config.model;
        this.model.on('change', this.render);
        this.model.on('destroy', this.remove);
    },
    properties: {
        el: C.$('#test')[0],
        events: {
            // 'click': 'update'
            'click': {
                '.submit': 'update'
            }
        },
        update: function() {
            this.model.set('test', 123); // fire change & change:test
        },
        render: function(vars) {
            $(this.el).html(JSON.stringify(vars));
        },
        remove: function() {
            $(this.el).remove();
        }
    }
});
*/
