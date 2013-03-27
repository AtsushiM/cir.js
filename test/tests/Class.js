describe('Classは', function() {
    beforeEach(function() {
        // init
    });
    afterEach(function() {
        // clear
    });

    it('extend(prop)でクラスを作成する', function() {
        var initcount = 0,
            method1count = 0,
            Test = C.lass.extend({
                init: function(num) {
                    initcount += num;
                },
                method1: function() {
                    method1count++;
                }
            }),
            test = new Test(1);

        expect(initcount).to.be(1);
        test.method1();
        expect(method1count).to.be(1);
        test.method1();
        expect(method1count).to.be(2);
    });

    it('initは省略できる', function() {
        var method1count = 0,
            Test = C.lass.extend({
                method1: function() {
                    method1count++;
                }
            }),
            test = new Test(1);

        test.method1();
        expect(method1count).to.be(1);
        test.method1();
        expect(method1count).to.be(2);
    });

    it('extend()で作成したクラスはextend()を持つ', function() {
        var method1count = 0,
            method2count = 0,
            method3count = 0,
            Test1 = C.lass.extend({
                method1: function() {
                    method1count += 1;
                },
                method2: function() {
                    method2count += 1;
                },
                method3: function() {
                    method3count += 1;
                }
            }),
            Test2 = Test1.extend({
                method1: function() {
                    method1count += 2;
                },
                method2: function() {
                    method2count += 2;
                    this._super();
                }
            }),
            test2 = new Test2();

        test2.method1();
        test2.method2();
        test2.method3();

        expect(method1count).to.be(2);
        expect(method2count).to.be(3);
        expect(method3count).to.be(1);
    });
});
