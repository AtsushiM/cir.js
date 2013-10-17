describe('C.Routerは', function() {
    var c = window.C ? C : Global,
        route;

    beforeEach(function() {
        // init
        route = new c.Router({
            /* target: document.body.className, */
            /* target: location.pathname, */
            target: location.hash,
            action: {
                '^#hoge$': function() {
                    // write code.
                },
                '^#fuga$': function() {
                    // write code.
                }
            },
            manual: true
        });
    });
    afterEach(function() {
        // clear
        if (route.dispose) {
            route.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        route.dispose();
        expect(route).to.eql({});
    });

    it('targetオプションに対して、actionオプションのキー名で正規表現を行い、当てはまったものを実行する', function() {
        var count = 0;
        route = new c.Router({
            target: 'test',
            action: {
                'test': function() {
                    count += 1;
                },
                'tset': function() {
                    count += 2;
                }
            }
        });

        expect(count).to.be(1);

        count = 0;
        route = new c.Router({
            target: 'test',
            action: {
                'test': function() {
                    count += 1;
                },
                't.*t': function() {
                    count += 2;
                }
            }
        });

        expect(count).to.be(3);
    });

    it('noregexオプションで正規表現を使用せずルーティングする', function() {
        var count = 0;
        route = new c.Router({
            target: 'test',
            noregex: true,
            action: {
                'test': function() {
                    count += 1;
                },
                't.*t': function() {
                    count += 2;
                }
            }
        });

        expect(count).to.be(1);
        route.emit('test');
        expect(count).to.be(2);
        route.emit('t.*t');
        expect(count).to.be(4);
    });

    it('start()でルーティングを実行する', function() {
        var count = 0;

        route = new c.Router({
            target: 'test',
            action: {
                'test': function() {
                    count += 1;
                },
                'tset': function() {
                    count += 2;
                }
            },
            manual: true
        });

        expect(count).to.be(0);
        route.start();
        expect(count).to.be(1);
        route.start();
        expect(count).to.be(2);
    });

    it('emit(action)でactionオプションの対応する関数を実行する', function() {
        var count = 0;

        route = new c.Router({
            target: 'sample',
            action: {
                'test': function() {
                    count += 1;
                }
            }
        });

        expect(count).to.be(0);
        route.emit('test');
        expect(count).to.be(1);
        route.emit('test');
        expect(count).to.be(2);
    });

    it('hashchangeオプションがtrueの場合、window.hashchangeイベントが発火するたびにemit(location.hash)を実行する', function(done) {
        var count = 0;

        /* location.hash = ''; */

        route = new c.Router({
            manual: true,
            hashchange: true,
            action: {
                'test': function() {
                    count++;
                }
            }
        });

        location.hash = 'test1';
        location.hash = 'test2';
        location.hash = 'test3';
        location.hash = 'test4';
        location.hash = 'test5';

        setTimeout(function() {
            expect(count).to.be(5);
            location.hash = '';
            done();
        }, 100);
    });

    it('hashchangeオプションがtrueでありかつtargetオプションが指定されなかった場合、location.hashをtargetオプションに指定する', function(done) {
        var count = 0;

        location.hash = '';

        route = new c.Router({
            hashchange: true,
            action: {
                '': function() {
                    count++;
                }
            }
        });

        setTimeout(function() {
            expect(count).to.be(1);
            done();
        }, 100);
    });
});
