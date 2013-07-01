var template_matcher = /<%-(.+?)%>|<%=(.+?)%>|<%(.+?)%>|$/g,
    template_replacereg = /\\|'|\r|\n|\t/g,
    template_escapes = {
        "'": "'",
        '\\': '\\',
        '\r': 'r',
        '\n': 'n',
        '\t': 't'
    };

system_temp = C['template'] = function(templatetxt, replaceobj /* varless */, i, func) {
    /* var func = "__r+="; */
    func = "__r+=";

    templatetxt.replace(template_matcher, function(match, escaper, interpolate, evaluate, offset) {
        func += "'" + templatetxt.slice(i, offset)
        .replace(template_replacereg, function(match) { return '\\' + template_escapes[match]; }) + "'+";

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

    // console.log("var __t,__r='';" +
    //     'with(a){' + func + "''" + '}' + "return __r");

    return new Function('a', "var __t,__r='';" +
        'with(a){' + func + "''" + '}' + "return __r")(replaceobj || {});
};
system_temp['fetch'] = function(id, replaceobj) {
    return C['template'](html($id(id)), replaceobj);
};
