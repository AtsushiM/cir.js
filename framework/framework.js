(function() {
    var CustomModel = C.klass({
            extend: C.Model,
            prop: {
                /* store: new C.SessionStorage(), */
                defaults: {
                    test1: 0,
                    test2: 'test'
                },
                validate: {
                    test1: C.validate.isNumber
                },
                events: {
                    'change': function(value) {
                        console.log('change: ' + value);
                    },
                    'change:test1': function(value) {
                        console.log('change:test1: ' + value);
                    }
                }
            }
        }),
        model1 = new CustomModel(),
        model2 = new CustomModel(),
        CustomCollection = C.klass({
            extend: C.Collection
        }),
        collection = new CustomCollection({
            defaults: [
                model1,
                model2
            ]
        }),
        CustomView = C.klass({
            extend: C.View,
            init: function(config) {
                console.log(config);
                this.collection.on('change', this.render);
                this.render();
            },
            prop: {
                el: '#test',
                collection: collection,
                events: {
                    'me': {
                        'click': 'click'
                    }
                },
                render: function() {
                    var test1 = 0;
                    this.collection.each(function(model) {
                        test1 += model.get('test1');
                    });
                    this.el.find('.test').html('count: ' + test1);
                },
                click: function(e) {
                    this.collection.each(function(model) {
                        model.set('test1', model.get('test1') + 1);
                    });
                    this.render();
                }
            }
        }),
        view = new CustomView();
}());
