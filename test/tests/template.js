// template
describe('C.templateは', function() {
    it('template(templatetxt, replaceobj)でtemplatetxt中の"<%= key %>", "<%- key %>", "<% /* jscode */ %>"をreplaceobjの値で置換する', function() {
        var text = 'before <%- abc %> <%= def %> <% if(ghi) { %><%= ghi %><% } %> after';

        text = C.template(text, {
            abc: 'Cool',
            def: 'is',
            ghi: 'Right.'
        });

        expect(text).to.be('before Cool is Right. after');

        // text = '<% console.log("test") %>';

        // text = util.template(text);
        // expect(text).to.be('');
    });
});
