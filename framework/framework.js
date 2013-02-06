(function view() {
    var model = new C.Model({
            store: {
                test: 1,
                test2: 'test'
            },
            validate: {
                test: function(vars) {
                    if (C.util.isNumber(vars)) {
                        return true;
                    }
                    return false;
                }
            }
        }),
        view = new C.View({
            el: '#test',
            model: model,
            events: {
                'me': {
                    'click': 'click'
                }
            },
            init: function() {
                this.render();
                this.model.on('change:test', this.render);
            },
            render: function() {
                this.el.find('.test').html('count: ' + this.model.get('test'));
            },
            click: function(e) {
                this.model.set('test', this.model.get('test') + 1);
            },
            clickLower: function(e) {
                console.log('click lower.');
                /* C.utility.eventStop(e); */
            }
        });
}());
