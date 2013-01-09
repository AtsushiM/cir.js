/* Class: "../../../../js/src/selector.methods.js" */
describe('selector.methodsは', function() {
    if (window.C) {
        Global = C;
    }

    var selector = Global.$('body'),
        el = Global.element;

    beforeEach(function() {
        // init
    });
    afterEach(function() {
        // clear
    });

    it('$(selector).find(selector)でselectorインスタンス内のselectorに該当するelementを内包したSelecotrインスタンスを返す', function() {
        var find = selector.find('script');

        expect(find).toBeDefined();
    });

    it('$(selector).parent()でselectorに該当するエレメントの親エレメントを取得する', function() {
        var $body = Global.$('body');

        expect($body.parent()[0]).toEqual(document.body.parentNode);
    });

    it('$(selector).on(eventname, handler)でGlobal.element.onを実行する', function() {
        var func = function() {};

        spyOn(el, 'on').andCallThrough();
        selector.on('click', func);

        expect(el.on).toHaveBeenCalledWith(selector[0], 'click', func);
    });

    it('$(selector).off(eventname, handler)でGlobal.element.offを実行する', function() {
        var func = function() {};

        spyOn(el, 'off').andCallThrough();
        selector.on('click', func);
        selector.off('click', func);

        expect(el.off).toHaveBeenCalledWith(selector[0], 'click', func);
    });

    it('$(selector).show()でGlobal.element.showを実行する', function() {
        spyOn(el, 'show').andCallThrough();
        selector.show();

        expect(el.show).toHaveBeenCalledWith(selector[0]);
    });

    it('$(selector).hide()でGlobal.element.hideを実行する', function() {
        spyOn(el, 'hide').andCallThrough();
        selector.hide();

        expect(el.hide).toHaveBeenCalledWith(selector[0]);
        selector.show();
    });

    it('$(selector).opacity(value)でGlobal.el.opacityを実行する', function() {
        spyOn(el, 'opacity').andCallThrough();
        selector.opacity(0.5);

        expect(el.opacity).toHaveBeenCalledWith(selector[0], 0.5);
        selector.opacity(1);
    });

    it('$(selector).hasClass(value)でGlobal.element.hasClassを実行する', function() {
        spyOn(el, 'hasClass').andCallThrough();

        expect(selector.hasClass('test')).toBeFalsy();
        expect(el.hasClass).toHaveBeenCalledWith(selector[0], 'test');
    });

    it('$(selector).addClass(value)でGlobal.element.addClassを実行する', function() {
        spyOn(el, 'addClass').andCallThrough();

        selector.addClass('test');
        expect(el.addClass).toHaveBeenCalledWith(selector[0], 'test');
    });

    it('$(selector).removeClass(value)でGlobal.element.removeClassを実行する', function() {
        spyOn(el, 'removeClass').andCallThrough();

        selector.removeClass('test');
        expect(el.removeClass).toHaveBeenCalledWith(selector[0], 'test');
    });

    it('$(selector).toggleClass(value)でGlobal.element.toggleClassを実行する', function() {
        spyOn(el, 'toggleClass').andCallThrough();

        selector.toggleClass('test');
        expect(el.toggleClass).toHaveBeenCalledWith(selector[0], 'test');
        selector.removeClass('test');
    });

    it('$(selector).css(object)でGlobal.element.cssを実行する', function() {
        var styleObj = {
                padding: 10
            };

        spyOn(el, 'css').andCallThrough();

        selector.css(styleObj);
        expect(el.css).toHaveBeenCalledWith(selector[0], styleObj);
        selector.css({
            padding: 0
        });
    });

    it('$(selector).append(value)でGlobal.element.appendを実行する', function() {
        var div = document.createElement('div');

        spyOn(el, 'append').andCallThrough();

        selector.append(div);
        expect(el.append).toHaveBeenCalledWith(selector[0], div);
    });

    it('$(selector).html(value)でGlobal.element.htmlを実行する', function() {
        spyOn(el, 'html').andCallThrough();

        var div = document.createElement('div');

        div.className = 'selectorTestInnerHTML';
        selector.append(div);

        var $div = Global.$('.selectorTestInnerHTML');

        $div.html('test');
        expect(el.html).toHaveBeenCalledWith($div[0], 'test');
    });

    it('$(selector).attr(value)でGlobal.element.attrを実行する', function() {
        spyOn(el, 'attr').andCallThrough();

        selector.attr('width');
        expect(el.attr).toHaveBeenCalledWith(selector[0], 'width');
    });

    it('$(selector).removeAttr(value)でGlobal.element.removeAttrを実行する', function() {
        spyOn(el, 'removeAttr').andCallThrough();

        selector.removeAttr('width');
        expect(el.removeAttr).toHaveBeenCalledWith(selector[0], 'width');
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
