describe('Asyncは', function() {
    var async;

    beforeEach(function() {
        // init
    });
    afterEach(function() {
        // clear
    });

    it('waitsオプションで指定した数値分、pass(vars)を呼び出せばcallback(undefined, args)が実行される', function() {
        var ret = 0;
        async = new C.Async({
            waits: 3,
            callback: function(error, args) {
                expect(error).to.be(undefined);
                expect(args).to.eql([
                    1,
                    2,
                    3
                ]);
                ret++;
            },
            onprogress: function(vars) {
                console.log(vars);
            }
        });

        expect(ret).to.be(0);
        async.pass(1);
        expect(ret).to.be(0);
        async.pass(2);
        expect(ret).to.be(0);
        async.pass(3);
        expect(ret).to.be(1);
        async.pass(4);
        expect(ret).to.be(1);
    });

    it('waitsオプションで指定した配列のlength分、pass(vars)を呼び出せばcallback(undefined, args)が実行される', function() {
        var ret = 0;
        async = new C.Async({
            waits: [
                function() {},
                function() {},
                function() {}
            ],
            callback: function(error, args) {
                expect(error).to.be(undefined);
                expect(args).to.eql([
                    1,
                    2,
                    3
                ]);
                ret++;
            }
        });

        expect(ret).to.be(0);
        async.pass(1);
        expect(ret).to.be(0);
        async.pass(2);
        expect(ret).to.be(0);
        async.pass(3);
        expect(ret).to.be(1);
        async.pass(4);
        expect(ret).to.be(1);
    });

    it('miss(vars)が呼ばれた場合、強制的にcallbackが呼ばれ、第一引数にErrorオブジェクトが渡される', function() {
        var ret = 0;
        async = new C.Async({
            waits: 3,
            callback: function(error, args) {
                expect(error).not.to.be(undefined);
                expect(args).to.eql([
                    1,
                    2
                ]);
                ret++;
            }
        });

        async.pass(1);
        expect(ret).to.be(0);
        async.miss(2);
        expect(ret).to.be(1);
        async.pass(3);
        expect(ret).to.be(1);
    });

    it('exit(vars)が呼ばれた場合、miss()が実行されていなければcallback(undefined, args)が実行される', function() {
        var ret = 0;
        async = new C.Async({
            waits: 3,
            callback: function(error, args) {
                ret++;
            }
        });

        async.miss(1);
        expect(ret).to.be(1);

        async.exit(2);
        expect(ret).to.be(1);

        ret = 0;
        async = new C.Async({
            waits: 3,
            callback: function(error, args) {
                expect(error).to.be(undefined);
                expect(args).to.eql([
                    1,
                    2
                ]);
                ret++;
            }
        });

        async.pass(1);
        expect(ret).to.be(0);

        async.exit(2);
        expect(ret).to.be(1);
    });

    it('getProgress(vars)でwaitsオプションの数値とpass()が呼ばれた回数から0~1の範囲で進捗度を返す', function() {
        var ret = 0;
        async = new C.Async({
            waits: 3,
            callback: function(error, args) {
                ret++;
            }
        });

        expect(async.getProgress()).to.be(0);
        async.pass();
        expect(async.getProgress()).to.be(1 / 3);
        async.pass();
        expect(async.getProgress()).to.be(2 / 3);
        async.pass();
        expect(async.getProgress()).to.be(3 / 3);
        async.pass();
        expect(async.getProgress()).to.be(1);

        ret = 0;
        async = new C.Async({
            waits: 3,
            callback: function(error, args) {
                ret++;
            }
        });

        async.exit();
        expect(async.getProgress()).to.be(1);

        ret = 0;
        async = new C.Async({
            waits: 3,
            callback: function(error, args) {
                ret++;
            }
        });

        async.miss();
        expect(async.getProgress()).to.be(0);
    });
});
