describe('C.namespaceは', function() {
    it('namespace(keyword)でwindow以下にkeywordで指定された名前空間を作成する', function() {
        var ret = C.namespace('C.testspace');
        expect(ret).to.be.a('object');
        expect(C.testspace).to.equal(ret);

        C.namespace('C.testspace1.test.test.test.test');
        expect(C.testspace1.test.test.test.test).to.be.a('object');

        delete C.testspace;
        delete C.testspace1;
    });

    it('namespace(keyword, setarg)で指定した場所にsetargを設定する', function() {
        C.namespace('C.testspace.test.test.test.test', {test: 1});

        expect(C.testspace.test.test.test.test.test).to.eql(1);

        delete C.testspace;
    });

    it('namespace(keyword, setarg)で指定した場所に予め値が存在していた場合、setargに元からあった値のプロパティを上書きする', function() {
        C.namespace('C.testspace', {test1: 1});
        C.namespace('C.testspace', {test1: 0, test2: 2});

        expect(C.testspace.test1).to.eql(1);
        expect(C.testspace.test2).to.eql(2);

        delete C.testspace;
    });
});
