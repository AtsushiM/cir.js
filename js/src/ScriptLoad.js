C['ScriptLoad'] = classExtend(ElementLoad, {
    _tagname: 'script',
    _loadloop: function(el) {
        append(doc.body, el);
    }
});
