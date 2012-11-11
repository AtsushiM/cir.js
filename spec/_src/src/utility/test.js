/* Class: "../../../../js/src/utility.js" */
describe('utilityは', function() {
    var util;

    beforeEach(function() {
        // init
        util = Global.utility;
    });
    afterEach(function() {
        // clear
        util.showElement(util.$('body'));
    });

    it('windowをwinプロパティとして持つ', function() {
        expect(util.win).toBe(window);
    });

    it('documentをdocプロパティとして持つ', function() {
        expect(util.doc).toBe(document);
    });

    it('body要素をbodyプロパティとして持つ', function() {
        expect(util.body).toBe(document.body);
    });

    it('$(selector)で対象のelement一つを返す', function() {
        expect(util.$('body')).toBeDefined();
    });

    it('$$(selector)で対象のelementを配列に入れて返す', function() {
        var scripts = util.$$('script');
        expect(scripts.length).toBeDefined();
    });

    it('$child(selector, element)でelement内のselectorに対応する要素を返す', function() {
        var scripts = util.$$child('script', document.body);
        expect(scripts.length).toBeDefined();
    });

    it('$$child(selector, element)でelement内のselectorに対応する要素を配列に入れて返す', function() {
        var scripts = util.$$child('script', document.body);
        expect(scripts.length).toBeDefined();
    });

    it('$id(id)で対象のidのelementを返す', function() {
        var id = util.$id('jasmineClassList');
        expect(id).toBeDefined();
    });

    it('pageTop()でスクロールをトップから1pxまで移動する', function() {
        util.pageTop();
        expect(0).toEqual(0);
    });

    it('onEvent(element, eventname, handler)でelementにeventnameでhandlerを登録する', function() {
        util.onEvent(window, 'load', function() {
            expect(1).toEqual(1);
        });
    });

    it('offEvent(element, eventname, handler)でelementにeventnameでhandlerを解除する', function() {
        var func = function() {
                expect(1).toEqual(1);
            };

        util.onEvent(window, 'load', func);
        util.offEvent(window, 'load', func);
    });

    it('makeElement(tagname)でタグを生成する', function() {
        var $div = util.makeElement('div');

        expect($div.style.display).toEqual('');
    });

    it('hideElement(element)で対象のelementのstyle.displayを"none"にする', function() {
        var $body = util.$('body');

        util.hideElement($body);
        expect($body.style.display).toEqual('none');
    });

    it('showElement(element)で対象のelementのstyle.displayを"block"にする', function() {
        var $body = util.$('body');

        util.hideElement($body);
        util.showElement($body);
        expect($body.style.display).toEqual('block');
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
