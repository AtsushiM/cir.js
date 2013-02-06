var Test1 = C.klass({
        extend: C.Base,
        init: function() {
            this.no1 = 1;
        }
    }),
    Test2 = C.klass({
        extend: Test1,
        init: function() {
            this.no2 = 2;
        }
    }),
    Test3 = C.klass({
        extend: Test2,
        init: function() {
            this.no3 = 3;
        }
    }),
    Test4 = C.klass({
        extend: Test3,
        init: function() {
            this.no4 = 4;
        }
    }),
    Test5 = C.klass({
        extend: Test4,
        init: function() {
            this.no5 = 5;
        }
    }),
    test5 = new Test5();

console.log(test5);

(function view() {
    var model = new C.Model({
            defaults: {
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
