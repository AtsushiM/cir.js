describe('C.Progressは', function() {
    var progress;

    beforeEach(function() {
        // init
    });
    afterEach(function() {
        // clear
    });

    it('dispose()でインスタンスを解放する', function() {
        progress = new C.Progress({
            waits: 3
        });
        progress.dispose();
        expect(progress).to.eql({});
    });

    it('waitsオプションで指定した数値分、pass(vars)を呼び出せばoncomplete(undefined, args)が実行される', function() {
        var ret = 0;
        progress = new C.Progress({
            waits: 3,
            oncomplete: function(error, args) {
                expect(error).to.be(undefined);
                expect(args).to.eql([
                    1,
                    2,
                    3
                ]);
                ret++;
            },
            onprogress: function(vars) {
            }
        });

        expect(ret).to.be(0);
        progress.pass(1);
        expect(ret).to.be(0);
        progress.pass(2);
        expect(ret).to.be(0);
        progress.pass(3);
        expect(ret).to.be(1);
        progress.pass(4);
        expect(ret).to.be(1);
    });

    it('waitsオプションで指定した配列のlength分、pass(vars)を呼び出せばoncomplete(undefined, args)が実行される', function() {
        var ret = 0;
        progress = new C.Progress({
            waits: [
                function() {},
                function() {},
                function() {}
            ],
            oncomplete: function(error, args) {
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
        progress.pass(1);
        expect(ret).to.be(0);
        progress.pass(2);
        expect(ret).to.be(0);
        progress.pass(3);
        expect(ret).to.be(1);
        progress.pass(4);
        expect(ret).to.be(1);
    });

    it('miss(vars)が呼ばれた場合、強制的にoncompleteが呼ばれ、第一引数にErrorオブジェクトが渡される', function() {
        var ret = 0;
        progress = new C.Progress({
            waits: 3,
            oncomplete: function(error, args) {
                expect(error).not.to.be(undefined);
                expect(args).to.eql([
                    1,
                    2
                ]);
                ret++;
            }
        });

        progress.pass(1);
        expect(ret).to.be(0);
        progress.miss(2);
        expect(ret).to.be(1);
        progress.pass(3);
        expect(ret).to.be(1);
    });

    it('exit(vars)が呼ばれた場合、miss()が実行されていなければoncomplete(undefined, args)が実行される', function() {
        var ret = 0;
        progress = new C.Progress({
            waits: 3,
            oncomplete: function(error, args) {
                ret++;
            }
        });

        progress.miss(1);
        expect(ret).to.be(1);

        progress.exit(2);
        expect(ret).to.be(1);

        ret = 0;
        progress = new C.Progress({
            waits: 3,
            oncomplete: function(error, args) {
                expect(error).to.be(undefined);
                expect(args).to.eql([
                    1,
                    2
                ]);
                ret++;
            }
        });

        progress.pass(1);
        expect(ret).to.be(0);

        progress.exit(2);
        expect(ret).to.be(1);
    });

    it('getProgress(vars)でwaitsオプションの数値とpass()が呼ばれた回数から0~1の範囲で進捗度を返す', function() {
        var ret = 0;
        progress = new C.Progress({
            waits: 3,
            oncomplete: function(error, args) {
                ret++;
            }
        });

        expect(progress.getProgress()).to.be(0);
        progress.pass();
        expect(progress.getProgress()).to.be(1 / 3);
        progress.pass();
        expect(progress.getProgress()).to.be(2 / 3);
        progress.pass();
        expect(progress.getProgress()).to.be(3 / 3);
        progress.pass();
        expect(progress.getProgress()).to.be(1);

        ret = 0;
        progress = new C.Progress({
            waits: 3,
            oncomplete: function(error, args) {
                ret++;
            }
        });

        progress.exit();
        expect(progress.getProgress()).to.be(1);

        ret = 0;
        progress = new C.Progress({
            waits: 3,
            oncomplete: function(error, args) {
                ret++;
            }
        });

        progress.miss();
        expect(progress.getProgress()).to.be(0);
    });
});
