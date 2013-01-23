/* Test: "../../spec/_src/src/ServerMeta/test.js" */
(function() {
'use strict';

var xhr,
    isLoaded = FALSE;

Global['ServerMeta'] = klass({
    'extend' : Base,
    'init': function(config) {
        config = config || {};

        var callback = config['callback'] || nullFunction;

        if (!xhr) {
            xhr = getHeader(function() {
                isLoaded = TRUE;
                callback(xhr);
            });
        }
        else {
            callback(xhr);
        }
    },
    'properties': {
        'date': function(callback) {
            return getHeader(function(xhr) {
                var time = new Date(xhr.getResponseHeader('Date'));
                callback(time);
            });
        },
        'connection': function() {
            return getRes('Connection');
        },
        'contentLength': function() {
            return getRes('Content-Length');
        },
        'lastModified': function() {
            return getRes('Last-Modified');
        },
        'server': function() {
            return getRes('Server');
        },
        'contentType': function() {
            return getRes('Content-Type');
        },
        'acceptRanges': function() {
            return getRes('Accept-Ranges');
        },
        'keepAlive': function() {
            return getRes('Keep-Alive');
        }
    }
});

function getRes(value) {
    if (isLoaded) {
        return xhr.getResponseHeader(value);
    }
    return FALSE;
}

function getHeader(callback) {
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        callback(xhr);
    };

    xhr.open('HEAD', location.href + '?update' + Date.now() + '=1');
    xhr.send(NULL);

    return xhr;
}
}());
