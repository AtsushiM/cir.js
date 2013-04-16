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
        if (hashquery.dispose) {
            hashquery.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        hashquery.dispose();
        expect(hashquery).to.eql({});
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

        expect(mode).to.be('#test');
        console.log(vars.match('test1=true'));
        expect(vars.match('test1=true')).not.to.be(undefined);
        expect(vars.match('test2=false')).not.to.be(undefined);
        expect(vars.match('test3=' + encDoubleCort + 'aaaaa' + encDoubleCort)).not.to.be(undefined);
        expect(vars.match('test4=999')).not.to.be(undefined);
        /* expect(vars.match('fire=')).to.be(true); */
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

        expect(maketext).to.be(sethash);
    });

    it('parseHash(hashvar)でハッシュ変数形式のテキストを所定のオブジェクト形式に変更する', function() {
        var vars = {
                test1: true
            },
            config = {
                mode: 'test'
            };

        var hash = hashquery.makeHash(config);
        expect(hashquery.parseHash(hash)).to.eql({
            mode: 'test',
            vars: undefined
        });

        config.vars = vars;

        hash = hashquery.makeHash(config);
        expect(hashquery.parseHash(hash)).to.eql({
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
        expect(hashquery.parseHash(hash)).to.eql({
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
        expect(hashquery.getHash()).to.eql({
            mode: 'test',
            vars: undefined
        });
    });
});
