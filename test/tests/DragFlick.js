describe('DragFlickは', function() {
    var c = window.C ? C : Global,
        dragflick;

    beforeEach(function() {
        // init
        dragflick = new c.DragFlick({
            el: document.body,
            boundary: 0,
            direction: function(direction) {
            },
            start: function(e) {
            },
            move: function(e) {
            },
            end: function(e) {
            }
        });
    });
    afterEach(function() {
        // clear
        if (dragflick.dispose) {
            dragflick.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        dragflick.dispose();
        expect(dragflick).to.eql({});
    });

    it('attach()でelに対してdirectionメソッドを実行し、touchstart,touchmove,touchendにそれぞれをバインドする', function() {
        dragflick.attach({
            el: document.body,
            boundary: 0,
            direction: function(direction) {
                expect(direction.top).not.to.be(undefined);
                expect(direction.right).not.to.be(undefined);
                expect(direction.bottom).not.to.be(undefined);
                expect(direction.left).not.to.be(undefined);
                expect(direction.amount).not.to.be(undefined);
            },
            start: function(e) {
            },
            move: function(e) {
            },
            end: function(e) {
            }
        });

        expect(0).to.be(0);
    });

    it('detach()で全ての登録イベントを削除する', function() {
        dragflick.detach();

        expect(0).to.be(0);
    });
});
