var template_matcher = /<%-(.+?)%>|<%=(.+?)%>|<%(.+?)%>|$/g,
    template_replacereg = /\\|'|\r|\n|\t/g,
    template_escapes = {
        "'": "'",
        '\\': '\\',
        '\r': 'r',
        '\n': 'n',
        '\t': 't'
    };
C['template'] = function(templatetxt, replaceobj) {
    var i,
        func = "__r+=";

    templatetxt.replace(template_matcher, function(match, escaper, interpolate, evaluate, offset) {
        func += "'" + templatetxt.slice(i, offset)
        .replace(template_replacereg, function(match) { return '\\' + template_escapes[match]; }) + "' + ";

        if (escaper) {
            func += "((__t=" + escaper + ")==null?'':C.util.escape(__t))+";
        }
        else if (interpolate) {
            func += "((__t=" + interpolate + ")==null?'':__t)+";
        }
        else if (evaluate) {
            func += "'';" + evaluate + ";__r+=";
        }
        i= offset + match.length;
        return match;
    });

    return new Function('a', 'C', "var __t,__r='';" +
        'with(a){' + func + "'';" + '}' + "return __r;")(replaceobj || {}, C);
};
C['template']['fetch'] = function(id, replaceobj) {
    return C['template']($id(id).innerHTML, replaceobj);
};
