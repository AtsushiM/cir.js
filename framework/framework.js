(function mvctest() {
    var CustomModel = C.klass({
            extend: C.Model,
            prop: {
                defaults: {
                    test1: 1,
                    test2: 'test'
                },
                validate: {
                    test1: function(value) {
                        if (C.util.isNumber(value)) {
                            return true;
                        }
                        return false;
                    }
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
        model = new CustomModel(),
        CustomView = C.klass({
            extend: C.View,
            init: function(config) {
                console.log(config);
                this.model.on('change', this.render);
                this.render();
            },
            prop: {
                el: '#test',
                model: model,
                events: {
                    'me': {
                        'click': 'click'
                    }
                },
                render: function() {
                    this.el.find('.test').html('count: ' + this.model.get('test1'));
                },
                click: function(e) {
                    console.log(this);
                    this.model.set('test1', this.model.get('test1') + 1);
                }
            }
        }),
        view = new CustomView();

    // var model = new C.Model({
    //         defaults: {
    //             test: 1,
    //             test2: 'test'
    //         },
    //         validate: {
    //             test: function(vars) {
    //                 if (C.util.isNumber(vars)) {
    //                     return true;
    //                 }
    //                 return false;
    //             }
    //         }
    //     }),
    //     view = new C.View({
    //         el: '#test',
    //         model: model,
    //         events: {
    //             'me': {
    //                 'click': 'click'
    //             }
    //         },
    //         init: function() {
    //             this.render();
    //             this.model.on('change:test', this.render);
    //         },
    //         render: function() {
    //             this.el.find('.test').html('count: ' + this.model.get('test'));
    //         },
    //         click: function(e) {
    //             this.model.set('test', this.model.get('test') + 1);
    //         },
    //         clickLower: function(e) {
    //             console.log('click lower.');
    //             /* C.utility.eventStop(e); */
    //         }
    //     });
}());
