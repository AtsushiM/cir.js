describe('C.selector.methodsは', function() {
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

        expect(find).not.to.be(undefined);
    });

    it('$(selector).parent()でselectorに該当するエレメントの親エレメントを取得する', function() {
        var $body = Global.$('body');

        expect($body.parent()[0]).to.be(document.body.parentNode);
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
        expect(count).to.be(1);
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
        expect(count).to.be(0);
    });

    it('$(selector).delegate(clsname, eventname, handler)でC.dom.delegateを実行する', function() {
        var count = 0,
            func = function() {
                count++;
            },
            wraphandle;

        wraphandle = selector.delegate('progress', 'click', func);

        document.body.click();

        expect(count).to.be(0);

        document.querySelector('.progress').click();
        expect(count).to.be(1);
        document.querySelector('.progress').click();
        expect(count).to.be(2);

        selector.undelegate('progress', 'click', func);
    });

    it('$(selector).undelegate(clsname, eventname [, handler])でdelegateで登録したイベントを削除する', function() {
        var count = 0,
            func = function() {
                count++;
            },
            wraphandle;

        wraphandle = selector.delegate('progress', 'click', func);
        selector.undelegate('progress', 'click', func);

        document.body.click();

        expect(count).to.be(0);

        document.querySelector('.progress').click();
        expect(count).to.be(0);
        document.querySelector('.progress').click();
        expect(count).to.be(0);

        wraphandle = selector.delegate('progress', 'click', func);
        selector.undelegate('progress', 'click');
        document.querySelector('.progress').click();
        expect(count).to.be(0);
    });

    it('$(selector).show()でC.dom.showを実行する', function() {
        selector.show();

        expect(document.body.style.display).to.be('block');
    });

    it('$(selector).hide()でC.dom.hideを実行する', function() {
        selector.hide();
        expect(document.body.style.display).to.be('none');
        selector.show();
    });

    it('$(selector).hasClass(value)でC.dom.hasClassを実行する', function() {
        document.body.className = 'test';
        expect(selector.hasClass('test')).to.be(true);
        document.body.className = '';
        expect(selector.hasClass('test')).to.be(false);
    });

    it('$(selector).addClass(value)でC.dom.addClassを実行する', function() {
        selector.addClass('test');
        expect(selector.hasClass('test')).to.be(true);
        document.body.className = '';
    });

    it('$(selector).removeClass(value)でC.dom.removeClassを実行する', function() {
        selector.addClass('test');
        selector.removeClass('test');
        expect(selector.hasClass('test')).to.be(false);
    });

    it('$(selector).toggleClass(value)でC.dom.toggleClassを実行する', function() {
        selector.toggleClass('test');
        expect(selector.hasClass('test')).to.be(true);
        selector.removeClass('test');
        expect(selector.hasClass('test')).to.be(false);
    });

    it('$(selector).css(object)でC.dom.cssを実行する', function() {
        selector.css({
            padding: 10
        });
        expect(document.body.style.padding).to.be('10px');
        selector.css({
            padding: 0
        });
    });

    it('$(selector).append(element)でC.dom.appendを実行する', function() {
        var div = document.createElement('div');

        div.className = 'appendTest';

        selector.append(div);
        expect(document.querySelector('.appendTest')).not.to.be(undefined);
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
        expect(befores[0]).to.be($make2);
        expect(befores[1]).to.be($make1);

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
        expect(afters[0]).to.be($make1);
        expect(afters[1]).to.be($make2);
        expect(afters[2]).to.be($make3);

        C.dom.remove($make1);
        C.dom.remove($make2);
        C.dom.remove($make3);
    });

    it('$(selector).insertBefore(element)でC.dom.insertBeforeを実行する', function() {
        var $make1 = el.create('div', {
                'class': 'insertbeforetest',
                'id': 'insertbeforetest1'
            }),
            $make2 = el.create('div', {
                'class': 'insertbeforetest',
                'id': 'insertbeforetest2'
            }),
            $make3 = el.create('div', {
                'class': 'insertbeforetest',
                'id': 'insertbeforetest3'
            });

        selector.append($make1);
        selector.append($make3);
        C.$('#insertbeforetest1').insertBefore($make2);

        expect(C.dom.$child('.insertbeforetest', $make1)).to.be($make2);

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

        expect(document.querySelector('.appendTest')).to.be(null);
    });

    it('$(selector).html(value)でC.dom.htmlを実行する', function() {
        var div = document.createElement('div');

        div.className = 'selectorTestInnerHTML';

        var $div = Global.$(div);

        $div.html('test');
        expect($div.html()).to.be('test');
    });

    it('$(selector).val(value)でC.dom.valを実行する', function() {
        var input = document.createElement('input', {
            value: ''
        });

        input.className = 'selectorTestValue';

        var $input = Global.$(input);

        $input.val('test');
        expect($input.val()).to.be('test');
    });

    it('$(selector).attr(value)でC.dom.attrを実行する', function() {
        expect(selector.attr('style')).not.to.be(undefined);
    });

    it('$(selector).removeAttr(value)でC.dom.removeAttrを実行する', function() {
        selector.addClass('test');
        selector.removeAttr('class');
        expect(document.body.className).to.be('');
    });
});
