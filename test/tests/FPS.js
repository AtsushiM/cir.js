describe('C.FPSは', function() {
    var c = window.C ? C : Global,
        fps,
        dammy,
        criterion = 10;

    beforeEach(function() {
    });
    afterEach(function() {
        // clear
        if (fps && fps.stop) {
            fps.stop();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        fps = new c.FPS({
            enterframe: function() {
            }
        });
        fps.dispose();
        expect(fps).to.eql({
            _super: undefined
        });
    });

    it('getCriterion()で目標FPSを取得する', function() {
        fps = new c.FPS({
            criterion: criterion,
            enterframe: function() {
            }
        });
        expect(fps.getCriterion()).to.be(criterion);
    });

    it('getSurver()で現在FPSを取得する', function() {
        fps = new c.FPS({
            criterion: criterion,
            enterframe: function() {
            }
        });
        expect(fps.getSurver()).to.be(fps.getCriterion());
    });

    it('getFrameTime()で1フレームあたりのミリ秒数を取得する', function() {
        fps = new c.FPS({
            criterion: criterion,
            enterframe: function() {
            }
        });
        expect(fps.getFrameTime()).to.be(1000 / criterion);
    });

    it('enter()で毎フレーム実行するメソッドを実行する', function() {
        var _criterion,
            _surver;

        dammy = {
            enterframe: function(fps) {
                _criterion = fps.criterion;
                _surver = fps.surver;
            }
        };

        fps = new c.FPS({
            criterion: criterion,
            enterframe: dammy.enterframe
        });

        fps.enter();

        expect(_criterion).to.be(criterion);
        expect(_surver).not.to.be(undefined);
    });

    it('start()でフレームごとの実行を開始する', function(done) {
        var _criterion,
            _surver;

        dammy = {
            enterframe: function(fps) {
                _criterion = fps.criterion;
                _surver = fps.surver;
            }
        };

        fps = new c.FPS({
            criterion: criterion,
            enterframe: dammy.enterframe
        });

        fps.start();

        setTimeout(function() {
            expect(_criterion > 5).to.be(true);
            expect(_criterion < 11).to.be(true);

            done();

        }, Math.ceil(fps.getFrameTime() * 10));
    });

    it('stop()でフレームごとの実行を停止する', function(done) {
        var _criterion,
            _surver;

        dammy = {
            enterframe: function(fps) {
                _criterion = fps.criterion;
                _surver = fps.surver;
            }
        };

        fps = new c.FPS({
            criterion: criterion,
            enterframe: dammy.enterframe
        });

        fps.stop();

        setTimeout(function() {
            expect(_criterion).to.be(undefined);
            expect(_surver).to.be(undefined);

            done();
        }, Math.ceil(fps.getFrameTime() * 5));
    });
});
