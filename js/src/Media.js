Media = classExtendBase({
    'init': function(config) {
        var that = this,
            autoplay = config['autoplay'],
            loop = config['loop'],
            media,
            ev_canplay = 'canplay',
            autoplayid,
            _parent = config['el'] || doc.body;

        config['preload'] = 'auto';
        config['autoplay'] =
        config['loop'] = FALSE;

        switch (config['type']) {
            case 'Audio':
                media = Audio(config);
                break;
            /* case 'Video': */
            default:
                media = Video(config);
        }
        that._el = media;

        if (media) {
            if (autoplay) {
                autoplay = function() {
                    that._uncontract(autoplayid);
                    that['play']();
                };

                autoplayid = that._contract(media, ev_canplay, autoplay);
            }
            if (loop) {
                that['loop'](TRUE);
            }

            if (config['oncanplay']) {
                that._contract(media, ev_canplay, config['oncanplay']);
            }
            if (config['onended']) {
                that._contract(media, ev_ended, config['onended']);
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
    'loop': function(bool /* varless */, that) {
        /* var that = this; */
        that = this;

        if (that._loopid) {
            that._uncontract(that._loopid);
            delete that._loopid;
        }

        if (bool) {
            that._loopid =
            that._contract(that._el, ev_ended, function() {
                that['stop']();
                that['play']();
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
