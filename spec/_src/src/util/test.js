/* Class: "../../../../js/src/util.js" */
describe('utilは', function() {
    var util;

    beforeEach(function() {
        // init
        util = window.C ? C.util: Global.util;
    });
    afterEach(function() {
        // clear
    });

    it('windowをwinプロパティとして持つ', function() {
        expect(util.win).toBe(window);
    });

    it('documentをdocプロパティとして持つ', function() {
        expect(util.doc).toBe(document);
    });

    it('pageTop()でスクロールをトップから1pxまで移動する', function() {
        util.pageTop();
        expect(0).toEqual(0);
    });

    it('override(targetObj, varObj)でtargetObjにvarObjのプロパティを上書きする', function() {
        var target = {},
            vars = {
                test1: 1,
                test2: 'aaa',
                test3: {
                    test: 'Test'
                },
                test4: function() {
                    return true;
                }
            };

        target = util.override(target, vars);

        expect(target).toEqual(vars);
    });

    it('replaceAll(targetext, needle, replacetext)はtargettext中のneedleをreplacetextに置換する', function() {
        var text = 'ABCDEAFGHIA';

        text = util.replaceAll(text, 'A', 'Z');

        expect(text).toEqual('ZBCDEZFGHIZ');
    });

    it('windowOpen(url, windowname)で新規ウィンドウを開く', function() {
        var test = util.windowOpen('.', 'newwindow');

        test.close();
        expect(1).toEqual(1);
    });

    it('typeCast(string)でstringを内容にあった型に変換する', function() {
        var cast = util.typeCast;

        expect(cast('test')).toEqual('test');
        expect(cast('test1')).toEqual('test1');
        expect(cast('1')).toEqual(1);
        expect(cast('9')).toEqual(9);
        expect(cast(1)).toEqual(1);
        expect(cast(9)).toEqual(9);
        expect(cast('true')).toEqual(true);
        expect(cast('false')).toEqual(false);
        expect(cast(true)).toEqual(true);
        expect(cast(false)).toEqual(false);
        expect(cast('{"test": "1"}')).toEqual({'test': '1'});
        expect(cast({'test': '1'})).toEqual({'test': '1'});
    });

    it('makeQueryString(object)でクエリーストリング形式のテキストを返す', function() {
        var query = util.makeQueryString({
                test: 'test',
                test1: 'test1',
                test2: 2
            });

        expect(query).toEqual('test=test&test1=test1&test2=2');
    });

    it('parseQueryString(string)でクエリーストリング形式のテキストをオブジェクトに変換する', function() {
        var arg = {
                test: 'test',
                test1: 'test1',
                test2: 2
            },
            query = util.makeQueryString(arg),
            remakearg = util.parseQueryString(query);

        expect(arg).toEqual(remakearg);
    });

    it('is(string, vars)でvarsがstringの形式かどうか調べる', function() {
        expect(util.is('Object', {})).toBeTruthy();
        expect(util.is('Object', 1)).toBeFalsy();
        expect(util.is('Number', 1)).toBeTruthy();
        expect(util.is('Number', {})).toBeFalsy();
        expect(util.is('String', '')).toBeTruthy();
        expect(util.is('String', 1)).toBeFalsy();
        expect(util.is('Function', function() {})).toBeTruthy();
        expect(util.is('Function', 1)).toBeFalsy();
        expect(util.is('Boolean', true)).toBeTruthy();
        expect(util.is('Boolean', false)).toBeTruthy();
        expect(util.is('Boolean', 1)).toBeFalsy();
    });
    it('isObject(vars)でvarsがObjectかどうか調べる', function() {
        expect(util.isObject({})).toBeTruthy();
        expect(util.isObject(1)).toBeFalsy();
    });
    it('isNumber(vars)でvarsがNumberかどうか調べる', function() {
        expect(util.isNumber(1)).toBeTruthy();
        expect(util.isNumber({})).toBeFalsy();
    });
    it('isString(vars)でvarsがStringかどうか調べる', function() {
        expect(util.isString('')).toBeTruthy();
        expect(util.isString(1)).toBeFalsy();
    });
    it('isFunction(vars)でvarsがFunctionかどうか調べる', function() {
        expect(util.isFunction(function() {})).toBeTruthy();
        expect(util.isFunction(1)).toBeFalsy();
    });
    it('isBoolean(vars)でvarsがBooleanかどうか調べる', function() {
        expect(util.isBoolean(true)).toBeTruthy();
        expect(util.isBoolean(false)).toBeTruthy();
        expect(util.isBoolean(1)).toBeFalsy();
    });
    it('isArray(vars)でvarsがArrayかどうか調べる', function() {
        expect(util.isArray([])).toBeTruthy();
        expect(util.isArray([1,2,3])).toBeTruthy();
        expect(util.isArray({})).toBeFalsy();
    });

    it('nullFunction()はnullを返す', function() {
        expect(util.nullFunction()).toEqual(null);
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
