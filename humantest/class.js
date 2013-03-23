/* (function() { */
    var test = C.lass.extend({
            init: function() {
                console.log(1111);
            },
            test1: function() {
                console.log(2222);
                return this;
            }
        }),
        test2 = test.extend({
            init: function() {
                this._super();
                console.log('test2');
            },
            test1: function() {
                this._super();
                console.log(3333);
            }
        }),
        test3 = test2.extend({
            init: function() {
                this._super();
            }
        });

    var instance = new test3;
    /* console.dir(instance.test1._super); */

    instance.test1();
/* }()); */
