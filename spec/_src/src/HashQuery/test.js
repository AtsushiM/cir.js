/* Class: "../../../../js/src/HashQuery.js" */
describe('HashQueryは', function() {
    var c = window.C ? C : Global,
        hashquery,
        orgHash = location.hash;

    beforeEach(function() {
        hashquery = new c.HashQuery();
        location.hash = orgHash;
    });
    afterEach(function() {
        location.hash = orgHash;
    });

    it('dispose()でインスタンスを解放する', function() {
        hashquery.dispose();
        expect(hashquery).toEqual({});
    });

    it('makeHash({mode: string, contents: {key: val}})でデータをlocation.hash用に変換した文字列を返す', function() {
        var argvars = {
                test1: true,
                test2: false,
                test3: 'aaaaa',
                test4: 999,
                test5: {
                    test: 'test'
                }
            };

        var hash = hashquery.makeHash({
                mode: 'test',
                vars: argvars
            }).split('?'),
            mode = hash[0],
            vars = hash[1],
            encDoubleCort = encodeURI('"');

        expect(mode).toEqual('#test');
        expect(vars.match('test1=true')).toBeTruthy();
        expect(vars.match('test2=false')).toBeTruthy();
        expect(vars.match('test3=' + encDoubleCort + 'aaaaa' + encDoubleCort)).toBeTruthy();
        expect(vars.match('test4=999')).toBeTruthy();
        /* expect(vars.match('fire=')).toBeTruthy(); */
    });

    it('setHash({mode: string, contents: {key: val}})でデータをlocation.hashに設定する', function() {
        var argvars = {
                mode: 'test',
                vars: {
                    test1: true,
                    test2: false,
                    test3: 'aaaaa',
                    test4: 999,
                    test5: {
                        test: 'test'
                    }
                },
                once: true
            },
            maketext = hashquery.makeHash(argvars);

        hashquery.setHash(argvars);
        var sethash = location.hash;

        expect(maketext).toEqual(sethash);
    });

    it('parseHash(hashvar)でハッシュ変数形式のテキストを所定のオブジェクト形式に変更する', function() {
        var vars = {
                test1: true
            },
            config = {
                mode: 'test'
            };

        var hash = hashquery.makeHash(config);
        expect(hashquery.parseHash(hash)).toEqual({
            mode: 'test' //,
            // vars: {
            //     fire: 0
            // }
        });

        config.vars = vars;

        hash = hashquery.makeHash(config);
        expect(hashquery.parseHash(hash)).toEqual({
            mode: 'test',
            vars: {
                test1: true //,
                /* fire: 1 */
            }
        });

        vars.test2 = false;
        vars.test3 = 'aaaaa';
        vars.test4 = 999.9;
        vars.test5 = {
            test: 'test'
        };
        config.vars = vars;

        hash = hashquery.makeHash(config);
        expect(hashquery.parseHash(hash)).toEqual({
            mode: 'test',
            vars: {
                test1: true,
                test2: false,
                test3: 'aaaaa',
                test4: 999.9,
                test5: {
                    test: 'test'
                } //,
                /* fire: 2 */
            }
        });
    });

    it('getHash()でlocation.hashからデータを取得する', function() {
        var vars = {
                test1: true
            },
            config = {
                mode: 'test'
            };

        hashquery.setHash(config);
        expect(hashquery.getHash()).toEqual({
            mode: 'test'//,
            // vars: {
            //     fire: 0
            // }
        });
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
