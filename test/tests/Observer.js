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
            count += 3;
        });

        observer.emit('test');
        expect(count).to.be(2);

        observer.emit('test1');
        expect(count).to.be(5);
    });

    it('one()で一度のみ発火するイベントを登録する', function() {
        var count = 0,
            args = {
                one: function() {
                    count++;
                }
            };

        observer.one('one', args.one);
        observer.emit('one');
        observer.emit('one');

        expect(count).to.be(1);

        observer.one('one', args.one);
        observer.off('one', args.one);
        observer.emit('one');

        expect(count).to.be(1);
    });

    it('off()でイベントを削除する', function() {
        var count = 0,
            dammy1 = function() {
                count++;
            };

        observer.on('test', dammy1);
        observer.off('test');

        observer.emit('test');

        expect(count).to.be(0);
    });

    it('emit()でイベントを発火する', function() {
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

        observer.emit('test1');

        expect(ret1).to.be(1);
        expect(ret2).to.be(0);

        observer.emit('test2');

        expect(ret1).to.be(1);
        expect(ret2).to.be(1);

        observer.on('test1', dammy2);

        observer.emit('test1');

        expect(ret1).to.be(2);
        expect(ret2).to.be(2);

        observer.emit('test2');

        expect(ret1).to.be(2);
        expect(ret2).to.be(3);

        observer.on('test3', function(arg1, arg2, arg3, ev) {
            console.log(arguments);
            expect(ev).to.be.a('object');
            expect(arg1).to.be(1);
            expect(arg2).to.be(2);
            expect(arg3).to.be(3);
        });

        observer.emit('test3', 1, 2, 3);
    });

    it('bubble()はemitのエイリアスである', function() {
        expect(observer.emit).to.be(observer.bubble);
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

        child2.emit('test', 123);

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

        child2.emit('test', 123);

        expect(ret).to.eql([2, 1]);

        child1.removeChild();
        child2.emit('test', 123);

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

    it('on(event, func)で登録したfuncの引数の最後に追加して渡される値はeventオブジェクトである。', function() {
        var ret = [],
            child1 = new C.Observer,
            child2 = new C.Observer;

        observer.addChild(child1);
        child1.addChild(child2);

        observer.on('test', function(num) {
            expect(num).to.be(123);
            ret.push(0);
        });
        observer.on('test', function(num, ev) {
            ev.preventDefault();
            ret.push(1);
        });
        child1.on('test', function(num) {
            expect(num).to.be(123);
            ret.push(2);
        });
        child2.on('test', function(num, ev) {
            ev.stopPropagation();

            expect(num).to.be(123);
            ret.push(3);
        });
        child2.on('test', function(num, ev) {
            ev.stopPropagation();

            expect(num).to.be(123);
            ret.push(4);
        });

        child2.emit('test', 123);
        expect(ret).to.eql([4, 3]);

        ret = [];

        observer.capture('test', 123);
        expect(ret).to.eql([1, 2, 4, 3]);
    });
});
