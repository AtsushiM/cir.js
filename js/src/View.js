/* Test: "../../spec/_src/src/View/test.js" */
C['View'] = klassExtendBase(function(config /* varless */, mine, i) {
    mine = this;

    /* var i; */

    if (!config) {
        config = owner(mine, mine, {});
    }
    else {
        config = owner(mine, config);
    }

    mine['el'] = C['$'](config['el'] || mine['el'] || create('div'));

    mine['attach']();
    if (config['init']) {
        mine['init']();
    }
}, {
    'disposeInternal': function() {
        this._e('off');
    },
    _e: function(methodname /* varless */, mine, i, j, $el, events) {
        mine = this;

        // var i,
        //     j,
        //     $el,
            events = mine['events'];

        for (i in events) {
            if (i == 'me') {
                $el = mine['el'];
            }
            else {
                $el = mine['el'].find(i);
            }

            for (j in events[i]) {
                $el[methodname](j, mine[events[i][j]]);
            }
        }
    },
    'attach': function() {
        this._e('on');
    },
    'detach': function() {
        this._e('off');
    }
});
