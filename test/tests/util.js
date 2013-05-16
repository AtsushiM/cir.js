describe('C.utilは', function() {
    var util;

    beforeEach(function() {
        // init
        util = window.C ? C.util: Global.util;
    });
    afterEach(function() {
        // clear
    });

    it('abstraceFunction()は継承先のクラスで実装を強制したいメソッドがある場合に使用する', function(done) {
        expect(typeof util.abstraceFunction).to.be('function');

        try {
            util.abstraceFunction();
        }
        catch (e) {
            done();
        }
    });

    it('pageTop()でスクロールをトップから1pxまで移動する', function() {
        util.pageTop();
        expect(0).to.be(0);
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

        expect(target).to.eql(vars);
    });

    it('replaceAll(targetext, needle, replacetext)はtargettext中のneedleをreplacetextに置換する', function() {
        var text = 'ABCDEAFGHIA';

        text = util.replaceAll(text, 'A', 'Z');

        expect(text).to.be('ZBCDEZFGHIZ');
    });

    it('template(templatetxt, replaceobj)はtemplatetxt中の"<%= key %>", "<%- key %>"をreplaceobjの値で置換する', function() {
        var text = 'before <%= template %> <%= test %> <%- noescape %> after';

        text = util.template(text, {
            'template': 'Cool is Right.',
            'test': '<script>alert("lol");</script>',
            'noescape': '<p>noescape</p>'
        });

        expect(text).to.be('before Cool is Right. &lt;script&gt;alert(&quot;lol&quot;);&lt;/script&gt; <p>noescape</p> after');

        // text = '<% console.log("test") %>';

        // text = util.template(text);
        // expect(text).to.be('');
    });

    it('escape(text)でhtml形式のテキストを表示する上で問題になる文字をエスケープする', function() {
        expect(util.escape('"' + "'&<>")).to.be('&quot;&#039;&amp;&lt;&gt;');
    });

    it('unescape(text)でエスケープされた文字を通常の文字に戻す', function() {
        expect(util.unescape('&quot;&#039;&amp;&lt;&gt;')).to.be('"' + "'&<>");
    });

    it('windowOpen(url, windowname)で新規ウィンドウを開く', function() {
        var test = util.windowOpen('.', 'newwindow');

        test.close();
        expect(1).to.be(1);
    });

    it('typeCast(string)でstringを内容にあった型に変換する', function() {
        var cast = util.typeCast;

        expect(cast('test')).to.be('test');
        expect(cast('test1')).to.be('test1');
        expect(cast('1')).to.be(1);
        expect(cast('9')).to.be(9);
        expect(cast(1)).to.be(1);
        expect(cast(9)).to.be(9);
        expect(cast('true')).to.be(true);
        expect(cast('false')).to.be(false);
        expect(cast(true)).to.be(true);
        expect(cast(false)).to.be(false);
        expect(cast('{"test": "1"}')).to.eql({'test': '1'});
        expect(cast({'test': '1'})).to.eql({'test': '1'});
    });

    it('makeQueryString(object)でクエリーストリング形式のテキストを返す', function() {
        var query = util.makeQueryString({
                test: 'test',
                test1: 'test1',
                test2: 2
            });

        expect(query).to.be('test=test&test1=test1&test2=2');
    });

    it('parseQueryString(string)でクエリーストリング形式のテキストをオブジェクトに変換する', function() {
        var arg = {
                test: 'test',
                test1: 'test1',
                test2: 2
            },
            query = util.makeQueryString(arg),
            remakearg = util.parseQueryString(query);

        expect(arg).to.eql(remakearg);
    });

    it('is(string, vars)でvarsがstringの形式かどうか調べる', function() {
        expect(util.is('Object', {})).to.be(true);
        expect(util.is('Object', 1)).to.be(false);
        expect(util.is('Number', 1)).to.be(true);
        expect(util.is('Number', {})).to.be(false);
        expect(util.is('String', '')).to.be(true);
        expect(util.is('String', 1)).to.be(false);
        expect(util.is('Function', function() {})).to.be(true);
        expect(util.is('Function', 1)).to.be(false);
        expect(util.is('Boolean', true)).to.be(true);
        expect(util.is('Boolean', false)).to.be(true);
        expect(util.is('Boolean', 1)).to.be(false);
    });
    it('isObject(vars)でvarsがObjectかどうか調べる', function() {
        expect(util.isObject({})).to.be(true);
        expect(util.isObject(1)).to.be(false);
    });
    it('isNumber(vars)でvarsがNumberかどうか調べる', function() {
        expect(util.isNumber(1)).to.be(true);
        expect(util.isNumber({})).to.be(false);
    });
    it('isString(vars)でvarsがStringかどうか調べる', function() {
        expect(util.isString('')).to.be(true);
        expect(util.isString(1)).to.be(false);
    });
    it('isFunction(vars)でvarsがFunctionかどうか調べる', function() {
        expect(util.isFunction(function() {})).to.be(true);
        expect(util.isFunction(1)).to.be(false);
    });
    it('isBoolean(vars)でvarsがBooleanかどうか調べる', function() {
        expect(util.isBoolean(true)).to.be(true);
        expect(util.isBoolean(false)).to.be(true);
        expect(util.isBoolean(1)).to.be(false);
    });
    it('isArray(vars)でvarsがArrayかどうか調べる', function() {
        expect(util.isArray([])).to.be(true);
        expect(util.isArray([1,2,3])).to.be(true);
        expect(util.isArray({})).to.be(false);
    });
    it('isTouchable()でブラウザがタッチイベントに対応しているかどうかチェックする', function() {
        expect(util.isTouchable()).not.to.be(undefined);
    });

    it('nullFunction()は何もしないメソッドである', function() {
        expect(util.nullFunction()).to.be(undefined);
    });

    it('eventPrevent(e)はe.preventDefault()を実行する', function(done) {
        var dammy = {
                preventDefault: function() {
                    done();
                }
            };

        util.eventPrevent(dammy);
    });

    it('eventStop(e)はe.stopPropagation()を実行する', function(done) {
        var dammy = {
                stopPropagation: function() {
                    done();
                }
            };

        util.eventStop(dammy);
    });

    it('checkUserAgent(pattern)でユーザーエージェントに対してpatternで正規表現を行う', function() {
        expect(util.checkUserAgent('webkit')).not.to.be(undefined);
    });

    it('toArray(obj)でarrayに似た形式のオブジェクトをarrayに変換する。', function() {
        expect(util.toArray({length: 1, 0: 0})).to.eql([0]);
        expect(util.toArray({length: 1, 0: 0, 1: 1})).to.eql([0]);
        expect(util.toArray({length: 2, 0: 0, 1: 1})).to.eql([0, 1]);
        expect(util.toArray({length: 2, 0: 0})).to.eql([0, undefined]);
        expect(util.toArray({length: 2, 1: 1})).to.eql([undefined, 1]);
        expect(util.toArray({length: 3})).to.eql([undefined, undefined, undefined]);
        expect(util.toArray({length: 2, 0: 0, _: 11})).to.eql([0, undefined]);
    });

    it('copyArray(ary)でaryをシャローコピーする。', function() {
        var ary = [1, 2, 3];

        expect(util.copyArray(ary)).to.eql(ary);
        expect(util.copyArray(ary)).not.to.equal(ary);
    });

    it('hasDeclaredArgument(func)でfuncが宣言済み引数を持つかどうかboolで返す。', function() {
        expect(util.hasDeclaredArgument(function() {})).to.be.false;
        expect(util.hasDeclaredArgument(function(a) {})).to.be.true;
    });

    it('proxy(target, func)でthisをtargetにしたfuncを実行する関数を返す', function() {
        var target = {test: 1},
            func = function() {
                return this.test;
            },
            proxyfunc = util.proxy(target, func);

        expect(proxyfunc()).to.be(1);
    });

    it('(target, func)でthisをtargetにしたfuncを実行する関数を返す', function() {
        var target = {test: 1},
            func = function() {
                return this.test;
            },
            proxyfunc = util.proxy(target, func);

        expect(proxyfunc()).to.be(1);
    });

    it('binarySearch({low: number, high: number, compare: function, end: function})で二分探索で使うインデックスをcompareに渡し、最終的なインデックスをendに渡す', function() {
        var ary = [
            ],
            i = 0,
            len = 100,
            answer;

        for (; i < len; i++) {
            ary[i] = i;
        }

        util.binarySearch({
            low: 0,
            high: 100,
            compare: function(point) {
                if (point < 50) {
                    return true;
                }
            },
            end: function(point) {
                answer = point;
            }
        });

        expect(answer).to.be(49);
    });
});
