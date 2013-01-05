/* Class: "../../../../js/src/XML.js" */
describe('XMLは', function() {
    var c = window.C ? C : Global,
        xml,
        data = '<?xml version="1.0" encoding="UTF-8"?><testdata><data>aaaa</data><data>bbbb</data></testdata>';

    beforeEach(function() {
        // init
        xml = new c.XML({
            data: data
        });
    });
    afterEach(function() {
        // clear
    });

    it('getData()でXMLのテキストデータを取得する', function() {
        expect(xml.getData()).toEqual(data);
    });

    it('setData()でXMLのテキストデータを設定する', function() {
        xml.setData('dammy');

        expect(xml.getData()).not.toEqual(data);
    });

    it('$(selector)でXMLからelement形式でデータを取得する', function() {
        var data = xml.$('data');

        expect(data.innerHTML).toEqual('aaaa');
    });

    it('$$(selector)でXMLからelement形式でデータを配列で取得する', function() {
        var data = xml.$$('data');

        expect(data[0].innerHTML).toEqual('aaaa');
        expect(data[1].innerHTML).toEqual('bbbb');
    });
});
/*
describe('XXXは', function() {
    it('XXX', function() {
        //spyOn
        //呼び出しに対してargumentsを返却
        spyOn(obj, 'method').andReturn(arguments);
        //呼び出しに対して例外を発生させる
        spyOn(obj, 'method').andThrow(exception);
        //呼び出しに対して代わりの関数を実行させる
        spyOn(obj, 'method').andCallFake(function);
        //呼び出しに対してそのまま本来のメソッドを呼び出す
        spyOn(obj, 'method').andCallThrough(function);

        // spy後
        // 呼び出しが行われたか
        expect(obj, method).toHaveBeenCalled();
        // 呼び出しがargumentsを伴って呼び出されたか
        expect(obj, method).toHaveBeenCalledWith(arguments);

        //呼び出し回数
        obj.method.callCount;
        //直近の読み出し時の引数
        obj.mostRecentCall.args
        // i番目の呼び出し時
        obj.argsForCall[i]

        runs(function() {
            //処理
        });
        // １秒待ち
        waits(1000);
        runs(function() {
            //処理
        });

        //aがbと同じである
        expect(a).toEqual(b);
        //aがbと同じでない
        expect(a).not.toEqual(b);

        //aがbと同じオブジェクトである
        expect(a).toBe(b);
        //aがbと同じオブジェクトでない
        expect(a).not.toBe(b);

        //aがundefinedでない
        expect(a).toBeDefined();
        //aがundefinedである
        expect(a).not.toBeDefined();

        //aがnullである
        expect(a).toBeNull();
        //aがnullでない
        expect(a).not.toBeNull();

        //aがtrueである
        expect(a).toBeTruthy();
        //aがfalseである
        expect(a).toBeFalsy();

        //aにbが含まれている
        expect(a).toBeContain(b);
        //aにbが含まれてない
        expect(a).not.toBeContain(b);

        //aがbより小さい
        expect(a).toBeLessThan(b);
        //aがbより大きい
        expect(a).toBeGreaterThan(b);

        //a（function）が例外をスロー
        expect(a).toThrow(e);
        //a（function）が例外をスローしない
        expect(a).not.toThrow(e);
    });
});
*/
