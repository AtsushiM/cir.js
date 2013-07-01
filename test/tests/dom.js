describe('C.domは', function() {
    var dom;

    beforeEach(function() {
        // init
        dom = window.C ? C.dom : Global.dom;
    });
    afterEach(function() {
        // clear
        dom.show(dom.$('body'));
    });

    it('windowをwinプロパティとして持つ', function() {
        expect(dom.win).to.be(window);
    });

    it('documentをdocプロパティとして持つ', function() {
        expect(dom.doc).to.be(document);
    });

    it('$(selector)で対象のelement一つを返す', function() {
        expect(dom.$('body')).not.to.be(undefined);
    });

    it('$$(selector)で対象のelementを配列に入れて返す', function() {
        var scripts = dom.$$('script');
        expect(scripts.length).not.to.be(undefined);
    });

    it('$child(selector, element)でelement内のselectorに対応する要素を返す', function() {
        var scripts = dom.$$child('script', document.body);
        expect(scripts.length).not.to.be(undefined);
    });

    it('$$child(selector, element)でelement内のselectorに対応する要素を配列に入れて返す', function() {
        var scripts = dom.$$child('script', document.body);
        expect(scripts.length).not.to.be(undefined);
    });

    it('$id(id)で対象のidのelementを返す', function() {
        var id = dom.$id('jasmineClassList');
        expect(id).not.to.be(undefined);
    });

    it('on(element, eventname, handler)でelementにeventnameでhandlerを登録する', function() {
        dom.on(window, 'load', function() {
            expect(1).to.be(1);
        });
    });

    it('off(element, eventname, handler)でelementにeventnameでhandlerを解除する', function() {
        var func = function() {
                expect(1).to.be(0);
            };

        dom.on(window, 'load', func);
        dom.off(window, 'load', func);
    });

    it('delegate(element, selector, eventname, handler)でイベントをデリゲートする', function(done) {
        var delegatefunc = dom.delegate(document, 'body', 'click', function() {

            dom.off(document, 'click', delegatefunc);
            done();
        });

        document.body.click();
    });

    it('create(tagname [, attr])でタグを生成する', function() {
        var $div = dom.create('div');

        expect($div.style.display).to.be('');

        var $div = dom.create(
                'div',
                {
                    width: '100%',
                    bgcolor: 'red'
                }
            );

        expect($div.getAttribute('width')).to.be('100%');
        expect($div.getAttribute('bgcolor')).to.be('red');
    });

    it('show(element)で対象のelementのstyle.displayを"block"にする', function() {
        var $body = dom.$('body');

        dom.hide($body);
        dom.show($body);
        expect($body.style.display).to.be('block');
    });

    it('hide(element)で対象のelementのstyle.displayを"none"にする', function() {
        var $body = dom.$('body');

        dom.hide($body);
        expect($body.style.display).to.be('none');
    });

    it('hasClass(element, value)で対象のelementのclassNameにvalueが存在するかどうかboolで返す', function() {
        var $body = dom.$('body'),
            baseCls = $body.className;

        expect(dom.hasClass($body, 'test')).to.be(false);
        $body.className = 'test';
        expect(dom.hasClass($body, 'test')).to.be(true);
        $body.className = 'test test1 test2';
        expect(dom.hasClass($body, 'test')).to.be(true);
        $body.className = '';
        expect(dom.hasClass($body, 'test')).to.be(false);

        $body.className = baseCls;
    });

    it('addClass(element, value)で対象のelementのclassNameにvalueを追加する', function() {
        var $body = dom.$('body'),
            baseCls = $body.className;

        expect(dom.hasClass($body, 'test')).to.be(false);
        dom.addClass($body, 'test');
        expect(dom.hasClass($body, 'test')).to.be(true);

        $body.className = baseCls;
    });

    it('removeClass(element, value)で対象のelementのclassNameからvalueを削除する', function() {
        var $body = dom.$('body'),
            baseCls = $body.className;

        dom.addClass($body, 'test');
        dom.removeClass($body, 'test');
        expect(dom.hasClass($body, 'test')).to.be(false);

        $body.className = baseCls;
    });

    it('toggleClass(element, value)で対象のelementのclassNameからvalueをトグルする', function() {
        var $body = dom.$('body'),
            baseCls = $body.className;

        dom.toggleClass($body, 'test');
        expect(dom.hasClass($body, 'test')).to.be(true);
        dom.toggleClass($body, 'test');
        expect(dom.hasClass($body, 'test')).to.be(false);
        dom.toggleClass($body, 'test');
        expect(dom.hasClass($body, 'test')).to.be(true);
        dom.toggleClass($body, 'test');
        expect(dom.hasClass($body, 'test')).to.be(false);

        $body.className = baseCls;
    });

    it('css(element, object)で対象のelementのstyleにobjectを追加する', function() {
        var $body = dom.$('body'),
            bodyStyle = $body.style;

        dom.css($body, {
            backgroundColor: 'red',
            paddingTop: 10
        });
        expect(bodyStyle.backgroundColor).to.be('red');
        expect(bodyStyle.paddingTop).to.be('10px');

        dom.removeAttr($body, 'style');
    });

    it('computedStyleでエレメントに適用されているStyleオブジェクトを取得する', function() {
        var $body = dom.$('body');

        expect(dom.computedStyle($body)).not.to.be(undefined);
    });

    it('attr(element, object)でelementのプロパティにobjectの値を設定する', function() {
        var $body = dom.$('body');

        dom.attr($body, {
            width: '100%'
        });
        expect($body.getAttribute('width')).to.be('100%');
    });

    it('attr(element, property, value)でelementのpropertyにvalueを設定する', function() {
        var $body = dom.$('body');

        dom.attr($body, 'width', '10%');
        expect($body.getAttribute('width')).to.be('10%');
        dom.attr($body, 'width', '100%');
        expect($body.getAttribute('width')).to.be('100%');
    });

    it('attr(element, string)でelementのstring名のプロパティを返す', function() {
        var $body = dom.$('body');

        dom.attr($body, {
            width: '100%'
        });
        expect(dom.attr($body, 'width')).to.be('100%');
    });

    it('removeAttr(element, string)でelementのstring名のプロパティを削除する', function() {
        var $body = dom.$('body');

        dom.attr($body, {
            width: '100%'
        });
        dom.removeAttr($body, 'width');
        expect(dom.attr($body, 'width')).not.to.be('100%');
    });

    it('append(_parent, element)で_parentにelementをappendChildする', function() {
        var $body = dom.$('body'),
            $make = dom.create('div');

        $make.className = 'appendTest';

        expect(dom.$('.appendTest')).to.be(null);
        dom.append($body, $make);
        expect(dom.$('.appendTest')).not.to.be(undefined);
        dom.remove($make);
    });

    it('insertBefore(_parent, element)で_parentの一番前にelementを追加する', function() {
        var $body = dom.$('body'),
            $make = dom.create('div');

        $make.className = 'insertBeforeTest';

        expect(dom.$('.insertBeforeTest')).to.be(null);
        dom.insertBefore($body, $make);
        expect(dom.$('.insertBeforeTest')).not.to.be(undefined);
        dom.remove($make);
    });

    it('parent(element)でelementの親エレメントを取得する', function() {
        var $body = dom.$('body'),
            $make = dom.create('div');

        $make.className = 'appendTest';

        dom.append($body, $make);
        expect(dom.parent($make)).to.be($body);
        dom.remove($make);
    });

    it('before(element, addelement)でelementの前にaddelementを追加する', function() {
        var $body = dom.$('body'),
            $make1 = dom.create('div', {
                'class': 'beforetest'
            }),
            $make2 = dom.create('div', {
                'class': 'beforetest'
            });

        dom.append($body, $make1);
        dom.before($make1, $make2);

        var befores = dom.$$('.beforetest');
        expect(befores[0]).to.be($make2);
        expect(befores[1]).to.be($make1);

        dom.remove($make1);
        dom.remove($make2);
    });

    it('after(element, addelement)でelementの前にaddelementを追加する', function() {
        var $body = dom.$('body'),
            $make1 = dom.create('div', {
                'class': 'aftertest',
                'data-name': 1
            }),
            $make2 = dom.create('div', {
                'class': 'aftertest',
                'data-name': 2
            }),
            $make3 = dom.create('div', {
                'class': 'aftertest',
                'data-name': 3
            });

        dom.append($body, $make1);
        dom.append($body, $make3);
        dom.after($make1, $make2);

        var afters = dom.$$('.aftertest');
        expect(afters[0]).to.be($make1);
        expect(afters[1]).to.be($make2);
        expect(afters[2]).to.be($make3);

        dom.remove($make1);
        dom.remove($make2);
        dom.remove($make3);
    });

    it('remove(element)でelementを削除する', function() {
        var $body = dom.$('body'),
            $make = dom.create('div');

        $make.className = 'appendTest';

        dom.append($body, $make);
        dom.remove($make);
        expect(dom.$('.appendTest')).to.be(null);
    });

    it('html(element, text)でelement.innerHTMLにtextを設定する', function() {
        var $body = dom.$('body'),
            $make = dom.create('div');

        expect($make.innerHTML).to.be('');
        expect(dom.html($make)).to.be('');
        dom.html($make, 'test');
        expect($make.innerHTML).to.be('test');
        expect(dom.html($make)).to.be('test');
    });

    it('reflow(el)でelをリフローする', function() {
        dom.reflow();
        dom.reflow(document.body);
        expect(1).to.be(1);
    });

    it('toElement(tagtext)で"<p>AB</p>"などのストリング型のタグをHTML要素を返す', function() {
        var els = dom.toElement('<p>A</p><p>B</p><div class="test"><span>C</span></div>');

        expect(els.innerHTML).to.be('A');
        expect(els.tagName).to.be('P');
    });

    it('toElements(tagtext)で"<p>AB</p><p>C</p>"などのストリング型のタグをHTML要素に変換し、配列に入れて返す', function() {
        var els = dom.toElements('<p>A</p><p>B</p><div class="test"><span>C</span></div>');

        expect(els).to.be.a('array');
        expect(els[0].innerHTML).to.be('A');
        expect(els[1].innerHTML).to.be('B');
        expect(els[2].innerHTML).to.be('<span>C</span>');
        expect(els[2].className).to.be('test');
    });
});
