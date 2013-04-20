describe('WindowLoadは', function() {
    var c = window.C ? C : Global,
        dammy = {
            before: {
                onloadret: false,
                onload: function() {
                    dammy.before.onloadret = true;
                }
            },
            after: {
                onloadret: false,
                onload: function() {
                    dammy.after.onloadret = true;
                }
            }
        },
        loading_before = new c.WindowLoad({
            onload: dammy.before.onload
        });

    it('ページ読み込み時にローディング処理を実行する', function() {
        setTimeout(function() {
            expect(dammy.before.onloadret).to.be(true);
        }, 100);
    });

    it('dispose()でインスタンスを解放する', function() {
        loading_before.dispose();
        expect(loading_before).to.eql({});
    });
});
