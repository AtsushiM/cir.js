/* Class: "../../../../js/src/selector.methods.js" */
describe('selector.methodsは', function() {
    if (window.C) {
        Global = C;
    }

    var selector = Global.$('body'),
        el = C.dom;

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

    it('$(selector).on(eventname, handler)でC.dom.onを実行する', function() {
        var count = 0,
            func = function() {
                count++;
            };

        /* spyOn(el, 'on').andCallThrough(); */
        selector.on('click', func);
        document.body.click();

        /* expect(el.on).toHaveBeenCalledWith(selector[0], 'click', func); */
        expect(count).toEqual(1);
        selector.off('click', func);
    });

    it('$(selector).off(eventname, handler)でC.dom.offを実行する', function() {
        var count = 0,
            func = function() {
                count++;
            };

        /* spyOn(el, 'on').andCallThrough(); */
        selector.on('click', func);
        selector.off('click', func);
        document.body.click();

        /* expect(el.on).toHaveBeenCalledWith(selector[0], 'click', func); */
        expect(count).toEqual(0);
    });

    it('$(selector).show()でC.dom.showを実行する', function() {
        selector.show();

        expect(document.body.style.display).toEqual('block');
    });

    it('$(selector).hide()でC.dom.hideを実行する', function() {
        selector.hide();
        expect(document.body.style.display).toEqual('none');
        selector.show();
    });

    it('$(selector).hasClass(value)でC.dom.hasClassを実行する', function() {
        document.body.className = 'test';
        expect(selector.hasClass('test')).toBeTruthy();
        document.body.className = '';
        expect(selector.hasClass('test')).toBeFalsy();
    });

    it('$(selector).addClass(value)でC.dom.addClassを実行する', function() {
        selector.addClass('test');
        expect(selector.hasClass('test')).toBeTruthy();
        document.body.className = '';
    });

    it('$(selector).removeClass(value)でC.dom.removeClassを実行する', function() {
        selector.addClass('test');
        selector.removeClass('test');
        expect(selector.hasClass('test')).toBeFalsy();
    });

    it('$(selector).toggleClass(value)でC.dom.toggleClassを実行する', function() {
        selector.toggleClass('test');
        expect(selector.hasClass('test')).toBeTruthy();
        selector.removeClass('test');
        expect(selector.hasClass('test')).toBeFalsy();
    });

    it('$(selector).css(object)でC.dom.cssを実行する', function() {
        selector.css({
            padding: 10
        });
        expect(document.body.style.padding).toEqual('10px');
        selector.css({
            padding: 0
        });
    });

    it('$(selector).append(element)でC.dom.appendを実行する', function() {
        var div = document.createElement('div');

        div.className = 'appendTest';

        selector.append(div);
        expect(document.querySelector('.appendTest')).toBeDefined();
    });

    it('$(selector).before(element)でC.dom.beforeを実行する', function() {
        var $make1 = el.create('div', {
                'class': 'beforetest',
                'id': 'before1'
            }),
            $make2 = el.create('div', {
                'class': 'beforetest'
            });

        selector.append($make1);
        C.$('#before1').before($make2);

        var befores = C.dom.$$('.beforetest');
        expect(befores[0]).toEqual($make2);
        expect(befores[1]).toEqual($make1);

        el.remove($make1);
        el.remove($make2);
    });

    it('$(selector).after(element)でC.dom.afterを実行する', function() {
        var $make1 = el.create('div', {
                'class': 'aftertest',
                'id': 'after1'
            }),
            $make2 = el.create('div', {
                'class': 'aftertest',
                'id': 'after2'
            }),
            $make3 = el.create('div', {
                'class': 'aftertest',
                'id': 'after3'
            });

        selector.append($make1);
        selector.append($make3);
        C.$('#after1').after($make2);

        var afters = C.dom.$$('.aftertest');
        expect(afters[0]).toEqual($make1);
        expect(afters[1]).toEqual($make2);
        expect(afters[2]).toEqual($make3);

        C.dom.remove($make1);
        C.dom.remove($make2);
        C.dom.remove($make3);
    });

    it('$(selector).remove(element)でC.dom.removeを実行する', function() {
        var div = document.createElement('div');

        div.className = 'appendTest';

        selector.append(div);

        selector = Global.$('.appendTest');
        selector.remove();

        expect(document.querySelector('.appendTest')).toBeNull();
    });

    it('$(selector).html(value)でC.dom.htmlを実行する', function() {
        var div = document.createElement('div');

        div.className = 'selectorTestInnerHTML';

        var $div = Global.$(div);

        $div.html('test');
        expect($div.html()).toEqual('test');
    });

    it('$(selector).attr(value)でC.dom.attrを実行する', function() {
        expect(selector.attr('style')).toBeDefined();
    });

    it('$(selector).removeAttr(value)でC.dom.removeAttrを実行する', function() {
        selector.addClass('test');
        selector.removeAttr('class');
        expect(document.body.className).toEqual('');
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
