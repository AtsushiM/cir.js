/* (function() { */
// var servermeta_xhr,
//     servermeta_isLoaded = FALSE;

C['ServerMeta'] = classExtendBase({
    'init': function(config/* varless */, callback) {
        config = config || NULLOBJ;

        /* var callback = config['callback'] || nullFunction; */
        callback = config['callback'] || nullFunction;

        if (servermeta_xhr) {
            callback(servermeta_xhr);
        }
        else {
            servermeta_xhr = servermeta_getHeader(function() {
                servermeta_isLoaded = TRUE;
                callback(servermeta_xhr);
            });
        }
    },
    'date': function(callback) {
        return servermeta_getHeader(function(xhr) {
            callback(xhr.getResponseHeader('Date'));
        });
    },
    'connection': function() {
        return servermeta_getRes('Connection');
    },
    'contentLength': function() {
        return servermeta_getRes('Content-Length');
    },
    'lastModified': function() {
        return servermeta_getRes('Last-Modified');
    },
    'server': function() {
        return servermeta_getRes('Server');
    },
    'contentType': function() {
        return servermeta_getRes('Content-Type');
    },
    'acceptRanges': function() {
        return servermeta_getRes('Accept-Ranges');
    },
    'keepAlive': function() {
        return servermeta_getRes('Keep-Alive');
    }
});

function servermeta_getRes(value) {
    if (servermeta_isLoaded) {
        return servermeta_xhr.getResponseHeader(value);
    }
    return FALSE;
}

function servermeta_getHeader(callback) {
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        callback(xhr);
    };

    xhr.open('HEAD', location.href + '?update' + dateNow() + '=1');
    xhr.send(NULL);

    return xhr;
}
/* }()); */
