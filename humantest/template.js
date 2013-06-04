// template
function template(templatetxt, replaceobj) {
    var matcher = /<%-([\s\S]+?)%>|<%=([\s\S]+?)%>|<%([\s\S]+?)%>|$/g,
        escapes = {
            "'": "'",
            '\\': '\\',
            '\r': 'r',
            '\n': 'n',
            '\t': 't',
            '\u2028': 'u2028',
            '\u2029': 'u2029'
        },
        index,
        func = "__r+=";

    templatetxt.replace(matcher, function(match, escaper, interpolate, evaluate, offset) {
        func += templatetxt.slice(index, offset)
        .replace(/\\|'|\r|\n|\t|\u2028|\u2029/g, function(match) { return '\\' + escapes[match]; });

        if (escaper) {
            func += "((__t=" + escaper + ")==null?'':C.util.escape(__t))+";
        }
        if (interpolate) {
            func += "((__t=" + interpolate + ")==null?'':__t)+";
        }
        if (evaluate) {
            func += "'';" + evaluate + ";__r+=";
        }
        index = offset + match.length;
        return match;
    });

    func += "'';";

    func = 'with(obj){' + func + '}\n';

    func = "var __t,__r='';" +
        /* "print=function(){__r+=Array.prototype.join.call(arguments,'');};\n" + */
        func + "return __r;";

    func = new Function('obj', 'C', func);

    return func(replaceobj, C);
}

console.log(template('<%- test %><% if( test ) { %><%= C.util.replaceAll("12345", "123", "456") %><% } %><%= test %>', {
    test: 'abc'
}));
