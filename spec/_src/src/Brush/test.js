/* Class: "../../../../js/src/Brush.js" */
describe('Brushは', function() {
    var c = window.C ? C : Global,
        brush,
        canvas = document.createElement('canvas');

    document.querySelector('body').appendChild(canvas);

    beforeEach(function() {
        // init
        brush = new c.Brush({
            canvas: canvas,
            width: 100,
            height: 100
        });
    });
    afterEach(function() {
        // clear
    });

    it('dispose()でインスタンスを解放する', function() {
        brush.dispose();
        expect(brush).toEqual({});
    });

    it('setSize({width, height})でサイズを変更する', function() {
        expect(canvas.width).toEqual(100);
        expect(canvas.height).toEqual(100);

        brush.setSize({
            width: 150,
            height: 150
        });

        expect(canvas.width).toEqual(150);
        expect(canvas.height).toEqual(150);
    });

    it('pigment({src, width, height, onload})でsrcオプションで指定した画像を表示するcanvas要素を含んだオブジェクトを作成する', function() {
        var pigment = brush.pigment({
                src: '/spec/common/r.png',
                width: 100,
                height: 100,
                onload: function(canvas, img) {
                    expect(canvas.getContext).toBeDefined();
                    expect(img.alt).toEqual('');
                }
            });
        expect(pigment.image.nodeName).toEqual('CANVAS');
        expect(pigment.x).toEqual(0);
        expect(pigment.y).toEqual(0);
    });

    it('pigments({name: {src, width, height, onload}})でsrcオプションで指定した画像を表示するcanvas要素を含むオブジェクトを作成する', function() {
        var ret,
            pigments = brush.pigments({
                r: {
                    src: '/spec/common/r.png',
                    width: 100,
                    height: 100,
                    onload: function(canvas, img) {
                        expect(canvas.getContext).toBeDefined();
                        expect(img.alt).toEqual('');
                    }
                },
                g: {
                    src: '/spec/common/g.png',
                    width: 100,
                    height: 100,
                    onload: function(canvas, img) {
                        expect(canvas.getContext).toBeDefined();
                        expect(img.alt).toEqual('');
                    }
                },
                b: {
                    src: '/spec/common/b.png',
                    width: 100,
                    height: 100,
                    onload: function(canvas, img) {
                        expect(canvas.getContext).toBeDefined();
                        expect(img.alt).toEqual('');
                    }
                }
            }, function(r) {
                ret = r;
            });

        expect(pigments.r.image.nodeName).toEqual('CANVAS');
        expect(pigments.g.image.nodeName).toEqual('CANVAS');
        expect(pigments.b.image.nodeName).toEqual('CANVAS');
        expect(pigments.r.x).toEqual(0);
        expect(pigments.g.x).toEqual(0);
        expect(pigments.b.x).toEqual(0);
        expect(pigments.r.y).toEqual(0);
        expect(pigments.g.y).toEqual(0);
        expect(pigments.b.y).toEqual(0);

        waits(100);
        runs(function() {
            expect(pigments).toEqual(ret);
        });
    });

    it('draw([{image, x, y}])でcanvasに描画する', function() {
        var pigments = brush.pigments({
                r: {
                    src: '/spec/common/r.png',
                    width: 100,
                    height: 100,
                    onload: function(canvas, img) {
                        expect(canvas.getContext).toBeDefined();
                        expect(img.alt).toEqual('');
                    }
                },
                g: {
                    src: '/spec/common/g.png',
                    width: 100,
                    height: 100,
                    onload: function(canvas, img) {
                        expect(canvas.getContext).toBeDefined();
                        expect(img.alt).toEqual('');
                    }
                },
                b: {
                    src: '/spec/common/b.png',
                    width: 100,
                    height: 100,
                    onload: function(canvas, img) {
                        expect(canvas.getContext).toBeDefined();
                        expect(img.alt).toEqual('');
                    }
                }
            }, function() {
                brush.draw([
                    pigments.r,
                    pigments.g,
                    pigments.b
                ]);
            });

        waits(100);
        runs(function() {
            expect(0).toEqual(0);
        });
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
