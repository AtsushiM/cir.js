/* Class: "../../../../js/src/Validate.js" */
describe('Validateは', function() {
    var c = window.C ? C : Global,
        validate;

    beforeEach(function() {
        // init
        validate = new c.Validate({
            level: ''
            // default: 'warn' | 'console', 'warn', 'error', 'off'
        });
    });
    afterEach(function() {
        // clear
    });

    it('isObject(key, value)でvalueがObjectの場合true、そうでない場合はconsole.logにエラーを表示する', function() {
        expect(validate.isObject('test', {})).toBeTruthy();
        expect(validate.isObject('test', 1)).not.toBeDefined();
    });

    it('isNumber(key, value)でvalueがNumberの場合true、そうでない場合はconsole.logにエラーを表示する', function() {
        expect(validate.isNumber('test', 1)).toBeTruthy();
        expect(validate.isNumber('test', {})).not.toBeDefined();
    });

    it('isString(key, value)でvalueがStringの場合true、そうでない場合はconsole.logにエラーを表示する', function() {
        expect(validate.isString('test', '')).toBeTruthy();
        expect(validate.isString('test', 1)).not.toBeDefined();
    });

    it('isFunction(key, value)でvalueがFunctionの場合true、そうでない場合はconsole.logにエラーを表示する', function() {
        expect(validate.isFunction('test', function() {})).toBeTruthy();
        expect(validate.isFunction('test', 1)).not.toBeDefined();
    });

    it('isBoolean(key, value)でvalueがBooleanの場合true、そうでない場合はconsole.logにエラーを表示する', function() {
        expect(validate.isBoolean('test', true)).toBeTruthy();
        expect(validate.isBoolean('test', 1)).not.toBeDefined();
    });

    it('isArray(key, value)でvalueがArrayの場合true、そうでない場合はconsole.logにエラーを表示する', function() {
        expect(validate.isArray('test', [])).toBeTruthy();
        expect(validate.isArray('test', 1)).not.toBeDefined();
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
