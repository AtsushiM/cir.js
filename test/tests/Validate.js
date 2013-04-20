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
        if (validate.dispose) {
            validate.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        validate.dispose();
        expect(validate).to.eql({});
    });

    it('isObject(key, value)でvalueがObjectの場合true、そうでない場合はconsole.logにエラーを表示する', function() {
        expect(validate.isObject('test', {})).to.be(true);
        expect(validate.isObject('test', 1)).to.be(undefined);
    });

    it('isNumber(key, value)でvalueがNumberの場合true、そうでない場合はconsole.logにエラーを表示する', function() {
        expect(validate.isNumber('test', 1)).to.be(true);
        expect(validate.isNumber('test', {})).to.be(undefined);
    });

    it('isString(key, value)でvalueがStringの場合true、そうでない場合はconsole.logにエラーを表示する', function() {
        expect(validate.isString('test', '')).to.be(true);
        expect(validate.isString('test', 1)).to.be(undefined);
    });

    it('isFunction(key, value)でvalueがFunctionの場合true、そうでない場合はconsole.logにエラーを表示する', function() {
        expect(validate.isFunction('test', function() {})).to.be(true);
        expect(validate.isFunction('test', 1)).to.be(undefined);
    });

    it('isBoolean(key, value)でvalueがBooleanの場合true、そうでない場合はconsole.logにエラーを表示する', function() {
        expect(validate.isBoolean('test', true)).to.be(true);
        expect(validate.isBoolean('test', 1)).to.be(undefined);
    });

    it('isArray(key, value)でvalueがArrayの場合true、そうでない場合はconsole.logにエラーを表示する', function() {
        expect(validate.isArray('test', [])).to.be(true);
        expect(validate.isArray('test', 1)).to.be(undefined);
    });
});
