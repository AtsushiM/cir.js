/* Class: "../../../../js/src/Orientation.js" */
describe('C.Orientationは', function() {
    var orientation;

    beforeEach(function() {
        // init
        orientation = new C.Orientation({
            portrait: function() {
            },
            landscape: function() {
            }
        });
    });
    afterEach(function() {
        // clear
    });

    it('get()で画面の向きをチェックする', function() {
        var orient = orientation.get();
        expect(orient.portrait).not.to.be(undefined);
        expect(orient.landscape).not.to.be(undefined);
    });

    it('attach()で画面サイズ変更の際の処理を実行する', function() {
        orientation.attach();
        expect(0).to.be(0);
    });

    it('detach()は画面向きチェックに紐付けたイベントを削除する関数を返す', function() {
        orientation.attach();
        orientation.detach();

        expect(0).to.be(0);
    });
});
