describe('Modelは', function() {
    var c = window.C ? C : Global,
        model;

    beforeEach(function() {
        // init
        model = new c.Model({
            defaults: {
                test: 1,
                test2: 'test'
            },
            validate: {
                test: function(key, vars) {
                    if (C.util.isNumber(vars)) {
                        return true;
                    }
                    return false;
                }
            },
            on: {
                'change': function(vars) {
                },
                'change:test': function(vars) {
                },
                'remove': function(vars) {
                },
                'remove:test2': function(vars) {
                },
                'reset': function(vars) {
                }
            }
        });
    });
    afterEach(function() {
        // clear
        if (model.dispose) {
            model = model.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        model.dispose();
        expect(model).to.eql({});
    });

    it('set(key, val)で値を設定し、changeイベントを発火する', function() {
        var ret = 0;

        model.on('change:settest', function() {
            ret = 1;
        });
        model.set('settest', 1);

        expect(ret).to.be(1);
        expect(model.get('settest')).to.be(1);
    });

    it('set(obj)で値を設定し、changeイベントを発火する', function() {
        var ret = 0;

        model.on('change:settest1', function() {
            ret += 1;
        });
        model.on('change:settest2', function() {
            ret += 2;
        });

        model.set({
            settest1: 1,
            settest2: 2
        });
        expect(ret).to.be(3);
        expect(model.get('settest1')).to.be(1);
        expect(model.get('settest2')).to.be(2);
    });

    it('prev(key)で一つ前の状態の値を返す', function() {
        model.set('settest', 1);
        expect(model.prev().settest).to.be(undefined);
        expect(model.prev('settest')).to.be(undefined);
    });

    it('get(key)で値を返す', function() {
        expect(model.get('test')).to.be(1);
    });

    it('remove(key)で値を削除し、removeイベントを発火する', function() {
        var ret = 0;

        model.on('remove:test', function() {
            ret = 1;
        });
        model.remove('test');
        expect(ret).to.be(1);
        expect(model.get('test')).to.be(undefined);
    });

    it('reset()で値を全て削除する', function() {
        var ret = 0;

        model.on('reset', function() {
            ret = 1;
        });
        model.reset();

        expect(ret).to.be(1);
    });

    it('on(key, func)でイベントを登録する', function() {
        var ret = 0;

        model.on('change', function() {
            ret = 1;
        });

        model.fire('change');
        expect(ret).to.be(1);
    });

    it('off(key, func)でイベントを削除する', function() {
        var ret = 0,
            func = function() {
                ret = 1;
            };

        var bindfunc = model.on('change', func);
        model.off('change', bindfunc);

        model.fire('change');
        expect(ret).to.be(0);
    });

    it('fire(key, value)でイベントを発火する', function() {
        var ret = 0,
            func = function() {
                ret = 1;
            };

        model.on('change', func);

        model.fire('change');
        expect(ret).to.be(1);
    });
});
