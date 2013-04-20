C['Twitter'] = classExtendBase({
    'shareURL': function(vars) {
        var name = vars['name'],
            hash = vars['hash'];

        name = name ? ' 「' + name + '」' : EMPTY;
        hash = hash ? ' ' + hash : EMPTY;

        return 'https://twitter.com/intent/tweet?' + makeQueryString({
            'url': vars['redirect_uri'],
            'text': (vars['caption'] || EMPTY) + name + hash
        });
    }
});
