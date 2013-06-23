describe('C.Anvasは', function() {
    var c = window.C ? C : Global,
        brush,
        body = document.body,
        canvas = document.createElement('canvas');


    beforeEach(function() {
        // init
        body.appendChild(canvas);
        brush = new c.Anvas({
            canvas: canvas,
            width: 300,
            height: 100
        });
    });
    afterEach(function() {
        body.removeChild(canvas);
        // clear
        if (brush.dispose) {
            brush.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        brush.dispose();
        expect(brush).to.eql({});
    });

    it('setSize({width, height})でサイズを変更する', function() {
        expect(canvas.width).to.be(300);
        expect(canvas.height).to.be(100);

        brush.setSize({
            width: 150,
            height: 150
        });

        expect(canvas.width).to.be(150);
        expect(canvas.height).to.be(150);
    });

    it('pigment({src, width, height, onload})でsrcオプションで指定した画像を表示するcanvas要素を含んだオブジェクトを作成する', function() {
        var pigment = brush.pigment({
                src: '/test/common/r.png',
                width: 100,
                height: 100,
                onload: function(canvas, img) {
                    expect(canvas.getContext).not.to.be(undefined);
                    expect(img.alt).to.be('');
                }
            });
        expect(pigment.image.nodeName).to.be('CANVAS');
        expect(pigment.x).to.be(0);
        expect(pigment.y).to.be(0);
        expect(pigment.src).to.be('/test/common/r.png');
        expect(pigment.width).to.be(100);
        expect(pigment.height).to.be(100);
        expect(pigment.onload).to.be.a('function');
    });

    it('pigments({name: {src, width, height, onload}})でsrcオプションで指定した画像を表示するcanvas要素を含むオブジェクトを作成する', function(done) {
        var pigments = brush.pigments({
                r: {
                    src: '/test/common/r.png',
                    width: 100,
                    height: 100,
                    onload: function(canvas, img) {
                        expect(canvas.getContext).not.to.be(undefined);
                        expect(img.alt).to.be('');
                    }
                },
                g: {
                    src: '/test/common/g.png',
                    width: 100,
                    height: 100,
                    onload: function(canvas, img) {
                        expect(canvas.getContext).not.to.be(undefined);
                        expect(img.alt).to.be('');
                    }
                },
                b: {
                    src: '/test/common/b.png',
                    width: 100,
                    height: 100,
                    onload: function(canvas, img) {
                        expect(canvas.getContext).not.to.be(undefined);
                        expect(img.alt).to.be('');
                    }
                }
            }, function(r) {
                expect(pigments).to.be(r);

                done();
            });

        expect(pigments.r.image.nodeName).to.be('CANVAS');
        expect(pigments.g.image.nodeName).to.be('CANVAS');
        expect(pigments.b.image.nodeName).to.be('CANVAS');
        expect(pigments.r.x).to.be(0);
        expect(pigments.g.x).to.be(0);
        expect(pigments.b.x).to.be(0);
        expect(pigments.r.y).to.be(0);
        expect(pigments.g.y).to.be(0);
        expect(pigments.b.y).to.be(0);
    });

    it('render([{image, x, y}])でcanvasに描画する', function(done) {
        var args = {
                r: {
                    src: '/test/common/r.png',
                    width: 100,
                    height: 100,
                    onload: function(canvas, img) {
                        expect(canvas.getContext).not.to.be(undefined);
                        expect(img.alt).to.be('');
                    }
                },
                g: {
                    src: '/test/common/g.png',
                    width: 200,
                    height: 100,
                    onload: function(canvas, img) {
                        expect(canvas.getContext).not.to.be(undefined);
                        expect(img.alt).to.be('');
                    }
                },
                b: {
                    src: '/test/common/b.png',
                    width: 300,
                    height: 100,
                    onload: function(canvas, img) {
                        expect(canvas.getContext).not.to.be(undefined);
                        expect(img.alt).to.be('');
                    }
                },
                a: {
                    test: 'test',
                    render: function(ctx, instance) {
                        expect(ctx.drawImage).to.be.a('function');
                        expect(instance).to.be(brush);
                        expect(this.test).to.be('test');
                    },
                    onload: function(canvas) {
                        expect(canvas.getContext).not.to.be(undefined);
                    }
                }
            },
            pigments = brush.pigments(args, function() {
                brush.render([
                    pigments.r,
                    pigments.g,
                    pigments.b,
                    pigments.a
                ]);

                done();
            });
    });
});
