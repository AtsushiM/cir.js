describe('C.DateFactoryは', function() {
    var date;

    beforeEach(function() {
        // init
        date = new C.DateFactory();
    });
    afterEach(function() {
        // clear
        if (date.dispose) {
            date.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        date.dispose();
        expect(date).to.eql({});
    });

    it('make([datetext || msec || dateobj])でDateインスタンスを作成する', function() {
        expect(date.make(1368109146000).getTime()).to.be(1368109146000);
        expect(date.make('2013/05/09 23:19:06').getTime()).to.be(1368109146000);
        expect(date.make('2013/05/09T23:19:06+09:00Z').getTime()).to.be(1368109146000);
        expect(date.make('2013-05-09').getTime()).to.be(1368025200000);
        expect(date.make(new Date(1368109146000)).getTime()).to.be(1368109146000);
        expect(date.make().getTime).to.be.a('function');
    });

    it('format(formattext, [datetext || msec || dateobj])でformattextに沿った日付テキストを返す。formattextはPHPのdate_formatから主要なものを踏襲している', function() {
        var one = date.make('2013/01/02 03:04:05'),
            two = date.make('2013/10/11 13:34:56');

        expect(date.format('%d', one)).to.be('02');
        expect(date.format('%d', two)).to.be('11');

        expect(date.format('%j', one)).to.be('2');
        expect(date.format('%j', two)).to.be('11');

        expect(date.format('%m', one)).to.be('01');
        expect(date.format('%m', two)).to.be('10');

        expect(date.format('%n', one)).to.be('1');
        expect(date.format('%n', two)).to.be('10');

        expect(date.format('%y', one)).to.be('13');
        expect(date.format('%Y', two)).to.be('2013');

        expect(date.format('%a', one)).to.be('am');
        expect(date.format('%a', two)).to.be('pm');
        expect(date.format('%a', date.make('2013/01/01 11:59:59'))).to.be('am');
        expect(date.format('%a', date.make('2013/01/01 12:00:00'))).to.be('pm');

        expect(date.format('%A', one)).to.be('AM');
        expect(date.format('%A', two)).to.be('PM');
        expect(date.format('%A', '2013/01/01 11:59:59')).to.be('AM');
        expect(date.format('%A', '2013/01/01 12:00:00')).to.be('PM');

        expect(date.format('%g', one)).to.be('3');
        expect(date.format('%g', two)).to.be('1');
        expect(date.format('%g', '2013/01/01 11:11:11')).to.be('11');
        expect(date.format('%g', '2013/01/01 12:11:11')).to.be('12');
        expect(date.format('%g', '2013/01/01 00:00:00')).to.be('12');
        expect(date.format('%g', '2013/01/01 24:00:00')).to.be('12');

        expect(date.format('%G', one)).to.be('3');
        expect(date.format('%G', two)).to.be('13');

        expect(date.format('%H', one)).to.be('03');
        expect(date.format('%H', two)).to.be('13');

        expect(date.format('%h', one)).to.be('03');
        expect(date.format('%h', two)).to.be('01');
        expect(date.format('%h', '2013/01/01 11:11:11')).to.be('11');
        expect(date.format('%h', '2013/01/01 12:11:11')).to.be('12');
        expect(date.format('%h', '2013/01/01 00:00:00')).to.be('12');
        expect(date.format('%h', '2013/01/01 24:00:00')).to.be('12');

        expect(date.format('%i', one)).to.be('04');
        expect(date.format('%i', two)).to.be('34');

        expect(date.format('%s', one)).to.be('05');
        expect(date.format('%s', two)).to.be('56');

        expect(date.format('%I', one)).to.be('4');
        expect(date.format('%I', two)).to.be('34');

        expect(date.format('%S', one)).to.be('5');
        expect(date.format('%S', two)).to.be('56');

        expect(date.format('%D', '2013/01/01')).to.be('Tue');
        expect(date.format('%D', '2013/01/02')).to.be('Wed');
        expect(date.format('%D', '2013/01/03')).to.be('Thu');
        expect(date.format('%D', '2013/01/04')).to.be('Fri');
        expect(date.format('%D', '2013/01/05')).to.be('Sat');
        expect(date.format('%D', '2013/01/06')).to.be('Sun');
        expect(date.format('%D', '2013/01/07')).to.be('Mon');
        expect(date.format('%D', '2013/01/08')).to.be('Tue');

        expect(date.format('%l', '2013/01/01')).to.be('Tuesday');
        expect(date.format('%l', '2013/01/02')).to.be('Wednesday');
        expect(date.format('%l', '2013/01/03')).to.be('Thursday');
        expect(date.format('%l', '2013/01/04')).to.be('Friday');
        expect(date.format('%l', '2013/01/05')).to.be('Saturday');
        expect(date.format('%l', '2013/01/06')).to.be('Sunday');
        expect(date.format('%l', '2013/01/07')).to.be('Monday');
        expect(date.format('%l', '2013/01/08')).to.be('Tuesday');

        expect(date.format('%M', '2013/01/01')).to.be('Jan');
        expect(date.format('%M', '2013/02/01')).to.be('Feb');
        expect(date.format('%M', '2013/03/01')).to.be('Mar');
        expect(date.format('%M', '2013/04/01')).to.be('Apr');
        expect(date.format('%M', '2013/05/01')).to.be('May');
        expect(date.format('%M', '2013/06/01')).to.be('June');
        expect(date.format('%M', '2013/07/01')).to.be('July');
        expect(date.format('%M', '2013/08/01')).to.be('Aug');
        expect(date.format('%M', '2013/09/01')).to.be('Sep');
        expect(date.format('%M', '2013/10/01')).to.be('Oct');
        expect(date.format('%M', '2013/11/01')).to.be('Nov');
        expect(date.format('%M', '2013/12/01')).to.be('Dec');

        expect(date.format('%F', '2013/01/01')).to.be('January');
        expect(date.format('%F', '2013/02/01')).to.be('February');
        expect(date.format('%F', '2013/03/01')).to.be('March');
        expect(date.format('%F', '2013/04/01')).to.be('April');
        expect(date.format('%F', '2013/05/01')).to.be('May');
        expect(date.format('%F', '2013/06/01')).to.be('June');
        expect(date.format('%F', '2013/07/01')).to.be('July');
        expect(date.format('%F', '2013/08/01')).to.be('August');
        expect(date.format('%F', '2013/09/01')).to.be('September');
        expect(date.format('%F', '2013/10/01')).to.be('October');
        expect(date.format('%F', '2013/11/01')).to.be('November');
        expect(date.format('%F', '2013/12/01')).to.be('December');

        expect(date.format('%d.%j.%D.%l.%F.%M.%m.%n.%Y.%y.%a.%A.%g.%G.%h.%H.%i.%s.%I.%S', '2013/01/02 03:04:05')).to.be('02.2.Wed.Wednesday.January.Jan.01.1.2013.13.am.AM.3.3.03.03.04.05.4.5');
        expect(date.format('%d.%j.%D.%l.%F.%M.%m.%n.%Y.%y.%a.%A.%g.%G.%h.%H.%i.%s.%I.%S', '2013/10/11 13:34:56')).to.be('11.11.Fri.Friday.October.Oct.10.10.2013.13.pm.PM.1.13.01.13.34.56.34.56');

        expect(date.format('%Y')).to.be.a('string');
        expect(date.format('%Y').length).to.be(4);
    });
});
