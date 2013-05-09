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
            tweener.stop();
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
                onComplete: function() {
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
                onComplete: function() {
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
                onComplete: function() {
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
});
