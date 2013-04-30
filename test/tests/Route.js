describe('C.Routeは', function() {
    var c = window.C ? C : Global,
        route;

    beforeEach(function() {
        // init
        route = new c.Route({
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
        route = new c.Route({
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
        route = new c.Route({
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
        route = new c.Route({
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
        route.fire('test');
        expect(count).to.be(2);
        route.fire('t.*t');
        expect(count).to.be(4);
    });

    it('start()でルーティングを実行する', function() {
        var count = 0;

        route = new c.Route({
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

    it('fire(action)でactionオプションの対応する関数を実行する', function() {
        var count = 0;

        route = new c.Route({
            target: 'sample',
            action: {
                'test': function() {
                    count += 1;
                }
            }
        });

        expect(count).to.be(0);
        route.fire('test');
        expect(count).to.be(1);
        route.fire('test');
        expect(count).to.be(2);
    });
});
