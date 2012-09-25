/* Class: "../../../../js/src/NumberImage.js" */
describe('NumberImageは', function() {
    var numimg,
        args = {
            type: 'white'
        };

    beforeEach(function() {
        // init
        numimg = new Global.NumberImage(args);
    });
    afterEach(function() {
        // clear
    });

    function expectedMakeAction(i) {
        return '<span class="num_' + args.type + i + '">&nbsp;</span>';
    }

    it('make(x)で数値xのimgタグを返す', function() {
        // 0 ~ 9
        for (var i = 0, len = 10; i < len; i++) {
            expect(numimg.make(i)).toEqual(expectedMakeAction(i));
        }

        // 10 ~ 19
        for (var i = 10, len = 20; i < len; i++) {
            var j =  ('' + i).split('');
            expect(numimg.make(i)).toEqual(
                expectedMakeAction(j[0]) +
                expectedMakeAction(j[1])
            );
        }

        // 000
        expect(numimg.make('000')).toEqual(
            expectedMakeAction(0) +
            expectedMakeAction(0) +
            expectedMakeAction(0)
        );
        // 9999
        expect(numimg.make('9999')).toEqual(
            expectedMakeAction(9) +
            expectedMakeAction(9) +
            expectedMakeAction(9) +
            expectedMakeAction(9)
        );
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
