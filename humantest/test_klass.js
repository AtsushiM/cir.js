(function() {
var Test1 = C.klass({
        extend: C.Base,
        init: function() {
            this.no1 = 1;
        },
        prop: {
            disposeInternal: function() {
                console.log(1);
            }
        }
    }),
    Test2 = C.klass({
        extend: Test1,
        init: function() {
            this.no2 = 2;
        },
        prop: {
            disposeInternal: function() {
                console.log(2);
            }
        }
    }),
    Test3 = C.klass({
        extend: Test2,
        init: function() {
            this.no3 = 3;
        },
        prop: {
            disposeInternal: function() {
                console.log(3);
            }
        }
    }),
    Test4 = C.klass({
        extend: Test3,
        init: function() {
            this.no4 = 4;
        },
        prop: {
            disposeInternal: function() {
                console.log(4);
            }
        }
    }),
    Test5 = C.klass({
        extend: Test4,
        init: function() {
            this.no5 = 5;
        },
        prop: {
            disposeInternal: function() {
                console.log(5);
            }
        }
    }),
    test5 = new Test5();

test5.dispose();
}());
