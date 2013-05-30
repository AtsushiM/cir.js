describe('C.requireは', function() {
    it('require(requiretxt)でwindow以下からrequiredtxtでの指定が存在するかチェックし、その値を返す', function(done) {
        expect(C.require('C')).to.be.a('object');
        try {
            C.require('C.TestClass');
        }
        catch (e) {
            done();
        }
    });

    it('require(requiretxt, srcpath)で同期的にファイルを読み込み展開する', function(done) {
        expect(C.require('C.TestClass', 'common/TestClass.js')).to.be.a('function');

        try {
            C.require('C.TestClass1', 'common/TestClass.js');
        }
        catch (e) {
            delete C.TestClass;
            done();
        }
    });

    it('require(requiretxt, srcpath, callback)で非同期にファイルを読み込み展開する', function(done) {
        var ret = C.require('C.TestClass2', 'common/TestClass2.js', function() {
            expect(C.TestClass2).to.be.a('function');
            delete C.TestClass2;
            done();
        });

        expect(ret).to.eql(undefined);
    });
});
