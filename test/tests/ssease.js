describe('sseaseは', function() {
    var c = window.C ? C : Global,
        ease;

    beforeEach(function() {
        // init
        ease = c.ssease;
    });
    afterEach(function() {
        // clear
    });

    it('linearプロパティを持つ', function() {
        expect(ease.linear).not.to.be(undefined);
    });

    it('inCubicプロパティを持つ', function() {
        expect(ease.inCubic).not.to.be(undefined);
    });
    it('outCubicプロパティを持つ', function() {
        expect(ease.outCubic).not.to.be(undefined);
    });
    it('inOutCubicプロパティを持つ', function() {
        expect(ease.inOutCubic).not.to.be(undefined);
    });

    it('inQuartプロパティを持つ', function() {
        expect(ease.inQuart).not.to.be(undefined);
    });
    it('outQuartプロパティを持つ', function() {
        expect(ease.outQuart).not.to.be(undefined);
    });
    it('inOutQuartプロパティを持つ', function() {
        expect(ease.inOutQuart).not.to.be(undefined);
    });

    it('inQuintプロパティを持つ', function() {
        expect(ease.inQuint).not.to.be(undefined);
    });
    it('outQuintプロパティを持つ', function() {
        expect(ease.outQuint).not.to.be(undefined);
    });
    it('inOutQuintプロパティを持つ', function() {
        expect(ease.inOutQuint).not.to.be(undefined);
    });

    it('inSineプロパティを持つ', function() {
        expect(ease.inSine).not.to.be(undefined);
    });
    it('outSineプロパティを持つ', function() {
        expect(ease.outSine).not.to.be(undefined);
    });
    it('inOutSineプロパティを持つ', function() {
        expect(ease.inOutSine).not.to.be(undefined);
    });

    it('inExpoプロパティを持つ', function() {
        expect(ease.inExpo).not.to.be(undefined);
    });
    it('outExpoプロパティを持つ', function() {
        expect(ease.outExpo).not.to.be(undefined);
    });
    it('inOutExpoプロパティを持つ', function() {
        expect(ease.inOutExpo).not.to.be(undefined);
    });

    it('inCircプロパティを持つ', function() {
        expect(ease.inCirc).not.to.be(undefined);
    });
    it('outCircプロパティを持つ', function() {
        expect(ease.outCirc).not.to.be(undefined);
    });
    it('inOutCircプロパティを持つ', function() {
        expect(ease.inOutCirc).not.to.be(undefined);
    });

    it('inQuadプロパティを持つ', function() {
        expect(ease.inQuad).not.to.be(undefined);
    });
    it('outQuadプロパティを持つ', function() {
        expect(ease.outQuad).not.to.be(undefined);
    });
    it('inOutQuadプロパティを持つ', function() {
        expect(ease.inOutQuad).not.to.be(undefined);
    });

    it('inBackプロパティを持つ', function() {
        expect(ease.inBack).not.to.be(undefined);
    });
    it('outBackプロパティを持つ', function() {
        expect(ease.outBack).not.to.be(undefined);
    });
    it('inOutBackプロパティを持つ', function() {
        expect(ease.inOutBack).not.to.be(undefined);
    });
});
