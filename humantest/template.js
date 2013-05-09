// template
function template(templatetxt, replaceobj) {
    var render,
        matcher = /<%-([\s\S]+?)%>|<%=([\s\S]+?)%>|<%([\s\S]+?)%>|$/g,
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
        source = "__p+='";

    templatetxt.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
        source += templatetxt.slice(index, offset)
        .replace(/\\|'|\r|\n|\t|\u2028|\u2029/g, function(match) { return '\\' + escapes[match]; });

        if (escape) {
            source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
        }
        if (interpolate) {
            source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
        }
        if (evaluate) {
            source += "';\n" + evaluate + "\n__p+='";
        }
        index = offset + match.length;
        return match;
    });

    source += "';\n";

    source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
        "print=function(){__p+=__j.call(arguments,'');};\n" +
        source + "return __p;\n";

    try {
        render = new Function('obj', 'C', source);
    } catch (e) {
        e.source = source;
        throw e;
    }

    return render(replaceobj, {});
}

console.log(template('<% if( test ) { %>12345<% } %>', {
    test: 1
}));

console.log(_.template('<% if( test ) { %>12345<% } %>', {
    test: 1
}));
