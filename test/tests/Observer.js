describe('C.Observerは', function() {
    var c = window.C ? C : Global,
        observer;

    beforeEach(function() {
        // init
        observer = new c.Observer();
    });
    afterEach(function() {
        // clear
        if (observer.dispose) {
            observer.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        observer.dispose();
        expect(observer).to.eql({});
    });

    it('on()でイベントを登録する', function() {
        var count = 0,
            dammy = function() {
                count++;
            };

        observer.on('test', dammy);
        observer.on('test', dammy);
        observer.on('test1', function() {
            count += 2;
        });

        observer.fire('test');
        expect(count).to.be(2);

        observer.fire('test1');
        expect(count).to.be(4);
    });

    it('one()で一度のみ発火するイベントを登録する', function() {
        var count = 0,
            args = {
                one: function() {
                    count++;
                }
            };

        observer.one('one', args.one);
        observer.fire('one');
        observer.fire('one');

        expect(count).to.be(1);

        observer.one('one', args.one);
        observer.off('one', args.one);
        observer.fire('one');

        expect(count).to.be(1);
    });

    it('off()でイベントを削除する', function() {
        var count = 0,
            dammy1 = function() {
                count++;
            };

        observer.on('test', dammy1);
        observer.off('test');

        observer.fire('test');

        expect(count).to.be(0);
    });

    it('fire()でイベントを発火する', function() {
        var ret1 = 0,
            dammy1 = function() {
                ret1++;
            },
            ret2 = 0,
            dammy2 = function() {
                ret2++;
            };

        observer.on('test1', dammy1);
        observer.on('test2', dammy2);

        observer.fire('test1');

        expect(ret1).to.be(1);
        expect(ret2).to.be(0);

        observer.fire('test2');

        expect(ret1).to.be(1);
        expect(ret2).to.be(1);

        observer.on('test1', dammy2);

        observer.fire('test1');

        expect(ret1).to.be(2);
        expect(ret2).to.be(2);

        observer.fire('test2');

        expect(ret1).to.be(2);
        expect(ret2).to.be(3);

        observer.on('test3', function(arg1, arg2, arg3) {
            expect(arg1).to.be(1);
            expect(arg2).to.be(2);
            expect(arg3).to.be(3);
        });

        observer.fire('test3', 1, 2, 3);
    });

    it('bubble()はfireのエイリアスである', function() {
        expect(observer.fire).to.be(observer.bubble);
    });

    it('addChild(instance)はObserverのインスタンスを子供として登録する。', function() {
        var ret = [],
            child1 = new C.Observer,
            child2 = new C.Observer;

        observer.addChild(child1);
        child1.addChild(child2);

        observer.on('test', function(num) {
            expect(num).to.be(123);
            ret.push(0);
        });
        child1.on('test', function(num) {
            expect(num).to.be(123);
            ret.push(1);
        });
        child2.on('test', function(num) {
            expect(num).to.be(123);
            ret.push(2);
        });

        child2.fire('test', 123);

        expect(ret).to.eql([2, 1, 0]);
    });

    it('capture()は親から子にイベントを伝播する', function() {
        var ret = [],
            child1 = new C.Observer,
            child2 = new C.Observer;

        observer.addChild(child1);
        child1.addChild(child2);

        observer.on('test', function(num) {
            expect(num).to.be(123);
            ret.push(0);
        });
        child1.on('test', function(num) {
            expect(num).to.be(123);
            ret.push(1);
        });
        child2.on('test', function(num) {
            expect(num).to.be(123);
            ret.push(2);
        });

        observer.capture('test', 123);

        expect(ret).to.eql([0, 1, 2]);
    });

    it('removeChild([instance])は子供を削除する。instanceを省略した場合、すべての子供を削除する。', function() {
        var ret = [],
            child1 = new C.Observer,
            child2 = new C.Observer;

        observer.addChild(child1);
        child1.addChild(child2);

        observer.on('test', function(num) {
            expect(num).to.be(123);
            ret.push(0);
        });
        child1.on('test', function(num) {
            expect(num).to.be(123);
            ret.push(1);
        });
        child2.on('test', function(num) {
            expect(num).to.be(123);
            ret.push(2);
        });

        observer.removeChild(child1);

        child2.fire('test', 123);

        expect(ret).to.eql([2, 1]);

        child1.removeChild();
        child2.fire('test', 123);

        expect(ret).to.eql([2, 1, 2]);
    });

    it('only()は親、子にイベントを伝播せず実行する', function() {
        var ret = [],
            child1 = new C.Observer,
            child2 = new C.Observer;

        observer.addChild(child1);
        child1.addChild(child2);

        observer.on('test', function(num) {
            expect(num).to.be(123);
            ret.push(0);
        });
        child1.on('test', function(num) {
            expect(num).to.be(123);
            ret.push(1);
        });
        child2.on('test', function(num) {
            expect(num).to.be(123);
            ret.push(2);
        });

        child2.only('test', 123);

        expect(ret).to.eql([2]);
    });
});
