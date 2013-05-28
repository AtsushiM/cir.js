Media = classExtendBase({
    'init': function(config) {
        var mine = this,
            autoplay = config['autoplay'],
            loop = config['loop'],
            media,
            ev_canplay = 'canplay',
            _parent = config['el'] || doc.body;

        config['preload'] = 'auto';
        config['autoplay'] =
        config['loop'] = FALSE;

        switch (config['type']) {
            case 'Audio':
                media = C['Audio'](config);
                break;
            /* case 'Video': */
            default:
                media = C['Video'](config);
        }
        mine._el = media;

        if (media) {
            if (autoplay) {
                var autoplayid;
                autoplay = function() {
                    mine._uncontract(autoplayid);
                    mine['play']();
                };

                autoplayid = mine._contract(media, ev_canplay, autoplay);
            }
            if (loop) {
                mine['loop'](TRUE);
            }

            if (config['oncanplay']) {
                mine._contract(media, ev_canplay, config['oncanplay']);
            }
            if (config['onended']) {
                mine._contract(media, ev_ended, config['onended']);
            }

            append(_parent, media);
        }
    },
    'dispose': function() {
        remove(this._el);
        this['_super']();
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
    'loop': function(bool /* varless */, mine) {
        /* var mine = this; */
        mine = this;

        if (mine._loopid) {
            mine._uncontract(mine._loopid);
            delete mine._loopid;
        }

        if (bool) {
            mine._loopid =
            mine._contract(mine._el, ev_ended, function() {
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
