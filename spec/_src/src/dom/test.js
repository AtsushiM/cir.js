/* Class: "../../../../js/src/dom.js" */
describe('domは', function() {
    var dom;

    beforeEach(function() {
        // init
        el = window.C ? C.dom : Global.dom;
    });
    afterEach(function() {
        // clear
        el.show(el.$('body'));
    });

    it('$(selector)で対象のelement一つを返す', function() {
        expect(el.$('body')).toBeDefined();
    });

    it('$$(selector)で対象のelementを配列に入れて返す', function() {
        var scripts = el.$$('script');
        expect(scripts.length).toBeDefined();
    });

    it('$child(selector, element)でelement内のselectorに対応する要素を返す', function() {
        var scripts = el.$$child('script', document.body);
        expect(scripts.length).toBeDefined();
    });

    it('$$child(selector, element)でelement内のselectorに対応する要素を配列に入れて返す', function() {
        var scripts = el.$$child('script', document.body);
        expect(scripts.length).toBeDefined();
    });

    it('$id(id)で対象のidのelementを返す', function() {
        var id = el.$id('jasmineClassList');
        expect(id).toBeDefined();
    });

    it('on(element, eventname, handler)でelementにeventnameでhandlerを登録する', function() {
        el.on(window, 'load', function() {
            expect(1).toEqual(1);
        });
    });

    it('off(element, eventname, handler)でelementにeventnameでhandlerを解除する', function() {
        var func = function() {
                expect(1).toEqual(0);
            };

        el.on(window, 'load', func);
        el.off(window, 'load', func);
    });

    it('create(tagname [, attr])でタグを生成する', function() {
        var $div = el.create('div');

        expect($div.style.display).toEqual('');

        var $div = el.create(
                'div',
                {
                    width: '100%',
                    bgcolor: 'red'
                }
            );

        expect($div.getAttribute('width')).toEqual('100%');
        expect($div.getAttribute('bgcolor')).toEqual('red');
    });

    it('show(element)で対象のelementのstyle.displayを"block"にする', function() {
        var $body = el.$('body');

        el.hide($body);
        el.show($body);
        expect($body.style.display).toEqual('block');
    });

    it('hide(element)で対象のelementのstyle.displayを"none"にする', function() {
        var $body = el.$('body');

        el.hide($body);
        expect($body.style.display).toEqual('none');
    });

    it('opacity(element, value)で対象のelementのstyle.opacityをvalueにする', function() {
        var $body = el.$('body');

        el.opacity($body, 0);
        expect($body.style.opacity).toEqual('0');
        el.opacity($body, 1);
        expect($body.style.opacity).toEqual('1');
    });

    it('hasClass(element, value)で対象のelementのclassNameにvalueが存在するかどうかboolで返す', function() {
        var $body = el.$('body'),
            baseCls = $body.className;

        expect(el.hasClass($body, 'test')).toBeFalsy();
        $body.className = 'test';
        expect(el.hasClass($body, 'test')).toBeTruthy();
        $body.className = 'test test1 test2';
        expect(el.hasClass($body, 'test')).toBeTruthy();
        $body.className = '';
        expect(el.hasClass($body, 'test')).toBeFalsy();

        $body.className = baseCls;
    });

    it('addClass(element, value)で対象のelementのclassNameにvalueを追加する', function() {
        var $body = el.$('body'),
            baseCls = $body.className;

        expect(el.hasClass($body, 'test')).toBeFalsy();
        el.addClass($body, 'test');
        expect(el.hasClass($body, 'test')).toBeTruthy();

        $body.className = baseCls;
    });

    it('removeClass(element, value)で対象のelementのclassNameからvalueを削除する', function() {
        var $body = el.$('body'),
            baseCls = $body.className;

        el.addClass($body, 'test');
        el.removeClass($body, 'test');
        expect(el.hasClass($body, 'test')).toBeFalsy();

        $body.className = baseCls;
    });

    it('toggleClass(element, value)で対象のelementのclassNameからvalueをトグルする', function() {
        var $body = el.$('body'),
            baseCls = $body.className;

        el.toggleClass($body, 'test');
        expect(el.hasClass($body, 'test')).toBeTruthy();
        el.toggleClass($body, 'test');
        expect(el.hasClass($body, 'test')).toBeFalsy();
        el.toggleClass($body, 'test');
        expect(el.hasClass($body, 'test')).toBeTruthy();
        el.toggleClass($body, 'test');
        expect(el.hasClass($body, 'test')).toBeFalsy();

        $body.className = baseCls;
    });

    it('css(element, object)で対象のelementのstyleにobjectを追加する', function() {
        var $body = el.$('body'),
            bodyStyle = $body.style;

        el.css($body, {
            backgroundColor: 'red',
            paddingTop: 10
        });
        expect(bodyStyle.backgroundColor).toEqual('red');
        expect(bodyStyle.paddingTop).toEqual('10px');
    });

    it('computedStyleでエレメントに適用されているStyleオブジェクトを取得する', function() {
        var $body = el.$('body');

        expect(el.computedStyle($body)).toBeDefined();
    });

    it('attr(element, object)でelementのプロパティにobjectの値を設定する', function() {
        var $body = el.$('body');

        el.attr($body, {
            width: '100%'
        });
        expect($body.getAttribute('width')).toEqual('100%');
    });

    it('attr(element, property, value)でelementのpropertyにvalueを設定する', function() {
        var $body = el.$('body');

        el.attr($body, 'width', '10%');
        expect($body.getAttribute('width')).toEqual('10%');
        el.attr($body, 'width', '100%');
        expect($body.getAttribute('width')).toEqual('100%');
    });

    it('attr(element, string)でelementのstring名のプロパティを返す', function() {
        var $body = el.$('body');

        el.attr($body, {
            width: '100%'
        });
        expect(el.attr($body, 'width')).toEqual('100%');
    });

    it('removeAttr(element, string)でelementのstring名のプロパティを削除する', function() {
        var $body = el.$('body');

        el.attr($body, {
            width: '100%'
        });
        el.removeAttr($body, 'width');
        expect(el.attr($body, 'width')).not.toEqual('100%');
    });

    it('append(_parent, element)で_parentにelementをappendChildする', function() {
        var $body = el.$('body'),
            $make = el.create('div');

        $make.className = 'appendTest';

        expect(el.$('.appendTest')).toBeNull();
        el.append($body, $make);
        expect(el.$('.appendTest')).toBeDefined();
        el.remove($make);
    });

    it('parent(element)でelementの親エレメントを取得する', function() {
        var $body = el.$('body'),
            $make = el.create('div');

        $make.className = 'appendTest';

        el.append($body, $make);
        expect(el.parent($make)).toEqual($body);
        el.remove($make);
    });

    it('before(element, addelement)でelementの前にaddelementを追加する', function() {
        var $body = el.$('body'),
            $make1 = el.create('div', {
                'class': 'beforetest'
            }),
            $make2 = el.create('div', {
                'class': 'beforetest'
            });

        el.append($body, $make1);
        el.before($make1, $make2);

        var befores = el.$$('.beforetest');
        expect(befores[0]).toEqual($make2);
        expect(befores[1]).toEqual($make1);

        el.remove($make1);
        el.remove($make2);
    });

    it('after(element, addelement)でelementの前にaddelementを追加する', function() {
        var $body = el.$('body'),
            $make1 = el.create('div', {
                'class': 'aftertest',
                'data-name': 1
            }),
            $make2 = el.create('div', {
                'class': 'aftertest',
                'data-name': 2
            }),
            $make3 = el.create('div', {
                'class': 'aftertest',
                'data-name': 3
            });

        el.append($body, $make1);
        el.append($body, $make3);
        el.after($make1, $make2);

        var afters = el.$$('.aftertest');
        expect(afters[0]).toEqual($make1);
        expect(afters[1]).toEqual($make2);
        expect(afters[2]).toEqual($make3);

        el.remove($make1);
        el.remove($make2);
        el.remove($make3);
    });

    it('remove(element)でelementを削除する', function() {
        var $body = el.$('body'),
            $make = el.create('div');

        $make.className = 'appendTest';

        el.append($body, $make);
        el.remove($make);
        expect(el.$('.appendTest')).toBeNull();
    });

    it('html(element, text)でelement.innerHTMLにtextを設定する', function() {
        var $body = el.$('body'),
            $make = el.create('div');

        expect($make.innerHTML).toEqual('');
        expect(el.html($make)).toEqual('');
        el.html($make, 'test');
        expect($make.innerHTML).toEqual('test');
        expect(el.html($make)).toEqual('test');
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
