/* Class: "../../../../js/src/selector.methods.js" */
describe('selector.methodsは', function() {
    if (window.HYAPP) {
        Global = HYAPP;
    }

    var selector = Global.selector('body'),
        util = Global.utility;

    beforeEach(function() {
        // init
    });
    afterEach(function() {
        // clear
    });

    it('selector(selector).querySelectorAll(query)でthis[0].querySelectorAll(query)を実行する', function() {
        expect(selector.querySelectorAll('script')).toEqual(document.body.querySelectorAll('script'));
    });

    it('selector(selector).find(selector)でselectorインスタンス内のselectorに該当するelementを内包したSelecotrインスタンスを返す', function() {
        expect(
            Global.selector('script', document.body)
        ).toEqual(
            selector.find('script')
        );
    });

    it('selector(selector).on(eventname, handler)でGlobal.utility.onEventを実行する', function() {
        var func = function() {};

        spyOn(util, 'onEvent').andCallThrough();
        selector.on('click', func);

        expect(util.onEvent).toHaveBeenCalledWith(selector[0], 'click', func);
    });

    it('selector(selector).off(eventname, handler)でGlobal.utility.offEventを実行する', function() {
        var func = function() {};

        spyOn(util, 'offEvent').andCallThrough();
        selector.on('click', func);
        selector.off('click', func);

        expect(util.offEvent).toHaveBeenCalledWith(selector[0], 'click', func);
    });

    it('selector(selector).show()でGlobal.utility.showElementを実行する', function() {
        spyOn(util, 'showElement').andCallThrough();
        selector.show();

        expect(util.showElement).toHaveBeenCalledWith(selector[0]);
    });

    it('selector(selector).hide()でGlobal.utility.hideElementを実行する', function() {
        spyOn(util, 'hideElement').andCallThrough();
        selector.hide();

        expect(util.hideElement).toHaveBeenCalledWith(selector[0]);
        selector.show();
    });

    it('selector(selector).opacity(value)でGlobal.utility.opacityElementを実行する', function() {
        spyOn(util, 'opacityElement').andCallThrough();
        selector.opacity(0.5);

        expect(util.opacityElement).toHaveBeenCalledWith(selector[0], 0.5);
        selector.opacity(1);
    });

    it('selector(selector).hasClass(value)でGlobal.utility.hasClassを実行する', function() {
        spyOn(util, 'hasClass').andCallThrough();

        expect(selector.hasClass('test')).toBeFalsy();
        expect(util.hasClass).toHaveBeenCalledWith(selector[0], 'test');
    });

    it('selector(selector).addClass(value)でGlobal.utility.addClassを実行する', function() {
        spyOn(util, 'addClass').andCallThrough();

        selector.addClass('test');
        expect(util.addClass).toHaveBeenCalledWith(selector[0], 'test');
    });

    it('selector(selector).removeClass(value)でGlobal.utility.removeClassを実行する', function() {
        spyOn(util, 'removeClass').andCallThrough();

        selector.removeClass('test');
        expect(util.removeClass).toHaveBeenCalledWith(selector[0], 'test');
    });

    it('selector(selector).toggleClass(value)でGlobal.utility.toggleClassを実行する', function() {
        spyOn(util, 'toggleClass').andCallThrough();

        selector.toggleClass('test');
        expect(util.toggleClass).toHaveBeenCalledWith(selector[0], 'test');
        selector.removeClass('test');
    });

    it('selector(selector).css(object)でGlobal.utility.styleElementを実行する', function() {
        var styleObj = {
                padding: 10
            };

        spyOn(util, 'styleElement').andCallThrough();

        selector.css(styleObj);
        expect(util.styleElement).toHaveBeenCalledWith(selector[0], styleObj);
        selector.css({
            padding: 0
        });
    });

    it('selector(selector).append(value)でGlobal.utility.appendElementを実行する', function() {
        var div = document.createElement('div');

        spyOn(util, 'appendElement').andCallThrough();

        selector.append(div);
        expect(util.appendElement).toHaveBeenCalledWith(selector[0], div);
    });

    it('selector(selector).html(value)でGlobal.utility.innerHTMLを実行する', function() {
        spyOn(util, 'innerHTML').andCallThrough();

        var div = document.createElement('div');

        div.className = 'selectorTestInnerHTML';
        selector.append(div);

        var $div = Global.selector('.selectorTestInnerHTML');

        $div.html('test');
        expect(util.innerHTML).toHaveBeenCalledWith($div[0], 'test');
    });

    it('selector(selector).attr(value)でGlobal.utility.attrElementを実行する', function() {
        spyOn(util, 'attrElement').andCallThrough();

        selector.attr('width');
        expect(util.attrElement).toHaveBeenCalledWith(selector[0], 'width');
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
