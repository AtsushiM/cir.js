describe('C.Tweenerは', function() {
    var c = window.C ? C : Global,
        tweener,
        element = document.createElement('div');

    beforeEach(function() {
        // init
    });
    afterEach(function() {
        // clear
        element.removeAttribute('style');
        if (tweener.dispose) {
            tweener.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function(done) {
        tweener = new c.Tweener(
            element.style,
            {
                width: {
                    from: 0,
                    to: 100
                },
                height: {
                    from: 0,
                    to: 100,
                    prefix: '',
                    suffix: 'px'
                }
            },
            {
                duration: 500,
                ease: c.ease.outExpo,
                oncomplete: function() {
                }
            }
        );

        setTimeout(function() {
            tweener.dispose();
            expect(tweener).to.eql({
                _super: undefined
            });
            done();
        }, 1000);
    });

    it('new Tweener(targetObj, property, option)でアニメーションする', function(done) {
        var comp = false;

        tweener = new c.Tweener(
            element.style,
            {
                width: {
                    from: 0,
                    to: 100
                },
                height: {
                    from: 0,
                    to: 100,
                    prefix: '',
                    suffix: 'px'
                }
            },
            {
                ease: c.ease.outExpo,
                oncomplete: function() {
                    comp = true;
                }
            }
        );

        setTimeout(function() {
            expect(comp).to.be(false);
            expect(element.style.width).not.to.be(undefined);
            expect(element.style.height).not.to.be(undefined);
        }, C.Tweener.duration / 2);

        setTimeout(function() {
            expect(comp).to.be(true);
            expect(element.style.width).to.be('100px');
            expect(element.style.height).to.be('100px');

            done();
        }, C.Tweener.duration + 50);
    });

    it('stop()でアニメーションを停止する', function(done) {
        var comp = false;

        tweener = new c.Tweener(
            element.style,
            {
                width: {
                    from: 0,
                    to: 100
                },
                height: {
                    from: 0,
                    to: 100,
                    prefix: '',
                    suffix: 'px'
                }
            },
            {
                ease: null,
                oncomplete: function() {
                    comp = true;
                }
            }
        );

        setTimeout(function() {
            expect(comp).to.be(false);
            tweener.stop();
            expect(comp).to.be(false);
        }, C.Tweener.duration / 2);

        setTimeout(function() {
            expect(comp).to.be(false);

            done();
        }, C.Tweener.duration);
    });

    it('C.Tweener.durationでデフォルトのアニメーション実行時間を設定する', function() {
        expect(C.Tweener.duration).not.to.be(undefined);
    });

    it('start()でstartイベントを発火する', function(done) {
        tweener = new c.Tweener(element.style,
            {
                width: {
                    from: 0,
                    to: 100
                },
                height: {
                    from: 0,
                    to: 100,
                    prefix: '',
                    suffix: 'px'
                }
            },
            {
                manual: true,
                oncomplete: function() {
                    comp = true;
                }
            }
        );

        tweener.on('start', function() {
            tweener.stop();
            done();
        });

        tweener.start();
    });

    it('stop()でstopイベントを発火する', function(done) {
        tweener = new c.Tweener(element.style,
            {
                width: {
                    from: 0,
                    to: 100
                },
                height: {
                    from: 0,
                    to: 100,
                    prefix: '',
                    suffix: 'px'
                }
            },
            {
                oncomplete: function() {
                    comp = true;
                }
            }
        );

        tweener.one('stop', function() {
            done();
        });

        tweener.stop();
    });

    it('アニメーション終了時にcompleteイベントを発火する', function(done) {
        tweener = new c.Tweener(element.style,
            {
                width: {
                    from: 0,
                    to: 100
                },
                height: {
                    from: 0,
                    to: 100,
                    prefix: '',
                    suffix: 'px'
                }
            },
            {
                oncomplete: function() {
                    done();
                }
            }
        );

        tweener.on('complete', function() {
        });
    });
});
