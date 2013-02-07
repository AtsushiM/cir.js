var Test1 = C.klass({
        extend: C.Base,
        init: function() {
            this.no = 1;
        },
        prop: {
            disposeInternal: function() {
                console.log(this.no);
            }
        }
    }),
    Test2 = C.klass({
        extend: Test1,
        init: function() {
            this.no = 2;
        },
        prop: {
            disposeInternal: function() {
                console.log(this.no);
            }
        }
    }),
    Test3 = C.klass({
        extend: Test2,
        init: function() {
            this.no = 3;
        },
        prop: {
            disposeInternal: function() {
                console.log(this.no);
            }
        }
    }),
    Test4 = C.klass({
        extend: Test3,
        init: function() {
            this.no = 4;
        },
        prop: {
            disposeInternal: function() {
                console.log(this.no);
            }
        }
    }),
    Test5 = C.klass({
        extend: Test4,
        init: function() {
            this.no = 5;
        },
        prop: {
            disposeInternal: function() {
                console.log(this.no);
            }
        }
    }),
    test5 = new Test5();

console.log(test5);
test5.dispose();

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
