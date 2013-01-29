/* Test: "../../spec/_src/src/Media/test.js" */
Global['Media'] = klassExtendBase(function(config) {
    this['_super']();

    var mine = this,
        autoplay = config['autoplay'],
        loop = config['loop'],
        media,
        ev_canplay = 'canplay',
        _parent = config['element'] || doc.body;

    config['preload'] = 'auto';
    config['autoplay'] =
    config['loop'] = FALSE;

    switch (config['type']) {
        case 'Audio':
            media = Global['Audio'](config);
            break;
        case 'Video':
            media = Global['Video'](config);
            break;
    }
    mine._el = media;

    if (!media) {
        return FALSE;
    }

    if (autoplay) {
        var autoplayid;
        autoplay = function() {
            mine['uncontract'](autoplayid);
            mine['play']();
        };

        autoplayid = this['contract'](media, ev_canplay, autoplay);
    }
    if (loop) {
        this['loop'](TRUE);
    }

    if (config['oncanplay']) {
        this['contract'](media, ev_canplay, config['oncanplay']);
    }
    if (config['onended']) {
        this['contract'](media, ev_ended, config['onended']);
    }

    append(_parent, media);
}, {
    'dispose': function() {
        remove(this._el);
        this._orgdis();
    },
    'getElement': function() {
        return this._el;
    },
    'getCurrent': function() {
        return this._el.currentTime;
    },
    'getDuration': function() {
        return this._el.duration;
    },
    'setCurrent': function(num) {
        this._el.currentTime = num;
    },
    'loop': function(bool) {
        var mine = this;
        if (mine.loopid) {
            mine['uncontract'](mine.loopid);
            delete mine.loopid;
        }

        if (bool) {
            mine.loopid =
            mine['contract'](mine._el, ev_ended, function() {
                mine['stop']();
                mine['play']();
            });
        }
    },
    'play': function() {
        this._el.play();
    },
    'pause': function() {
        this._el.pause();
    },
    'stop': function() {
        this['setCurrent'](0);
        this['pause']();
    }
});
Global['Media']['supportcheck'] = embedSupportCheck;
