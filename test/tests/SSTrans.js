describe('C.SSTransは', function() {
    var c = window.C ? C : Global,
        transition,
        div;

    beforeEach(function() {
        // init
        div = c.dom.create('div', {
            style: 'opacity: 1;'
        });
        c.dom.append(document.body, div);
        console.log(div);
    });
    afterEach(function() {
        // clear
        div.removeAttribute('style');
        c.dom.remove(div);
        if (transition.dispose) {
            transition.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        transition = new c.SSTrans(div, {
            opacity: '0'
        }, {
            oncomplete: function() {
                count = 1;
            }
        });
        transition.dispose();
        expect(transition).to.eql({
            _super: undefined
        });
    });

    it('CSS Trasitionでアニメーションする', function(done) {
        transition = new c.SSTrans(div, {
            opacity: '0'
        }, {
            oncomplete: function() {
                done();
            }
        });
    });

    it('start()でアニメーションを開始する', function(done) {
        transition = new c.SSTrans(div, {
            opacity: '0'
        }, {
            manual: true,
            oncomplete: function() {
                done();
            }
        });

        transition.start();
    });

    it('stop()でアニメーションを停止する', function(done) {
        var count = 0;

        transition = new c.SSTrans(div, {
            opacity: '0'
        }, {
            oncomplete: function() {
                count = 1;
            }
        });

        transition.stop();
        setTimeout(function() {
            expect(count).to.be(0);
            done();
        }, c.SSTrans.duration + 200);
    });

    it('start()でstartイベントを発火する', function(done) {
        transition = new c.SSTrans(div, {
            opacity: '0'
        }, {
            manual: true
        });

        transition.on('start', function() {
            done();
        });
        transition.start();
    });

    it('stop()でstopイベントを発火する', function(done) {
        transition = new c.SSTrans(div, {
            manual: true,
            opacity: '0'
        });

        transition.one('stop', function() {
            done();
        });
        transition.stop();
    });

    it('アニメーション終了時にcompleteイベントを発火する', function(done) {
        transition = new c.SSTrans(div, {
            manual: true,
            opacity: '0'
        });

        transition.on('complete', function() {
            done();
        });
    });

});
