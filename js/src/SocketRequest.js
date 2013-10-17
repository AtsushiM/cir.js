// SocketReqRes
var SocketReqRes =
C['SocketReqRes'] = classExtendObserver({
    'init': function(config) {
        config = copyObject(config);

        var that = this;

        that._request_id = SocketReqRes._id++;

        that._responseFunc = function(id, vars) {
            if (that._request_id === id) {
                that['stop']();
                emit_complete(that, vars);
            }
        };

        that._ev_res = SocketReqRes['responseEvent'];
        that._ev_req = SocketReqRes['requestEvent'];

        that._socket = config['socket'] || SocketReqRes['socket'] || (SocketReqRes['socket'] = io['connect']());

        delete config['socket'];

        that._socket['on'](that._ev_res, that._responseFunc);

        that['_super']();

        bindOnProp(that, config);

        that._config = config;

        ifManualStart(that, config);
    },
    'start': function() {
        var that = this;

        emit_start(that);
        that._socket['emit'](that._ev_req, that._request_id, that._config);
    },
    'stop': function() {
        var that = this;

        that['emit']('stop');
        that._socket['removeListener'](that._ev_res, that._responseFunc);
    }
});
SocketReqRes._id = 0;
/* SocketReqRes['socket'] = NULL; */
SocketReqRes['responseEvent'] = 'CIRSocket-Response';
SocketReqRes['requestEvent'] = 'CIRSocket-Request';
