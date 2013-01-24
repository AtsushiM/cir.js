/* Test: "../../spec/_src/src/Sound/test.js" */
Global['Sound'] = klass({
    'extend': Base,
    'init': function(config) {
        this['_super']();

        var mine = this,
            autoplay = config['autoplay'],
            loop = config['loop'],
            audio,
            ev_canplay = 'canplay',
            _parent = config['element'] || doc.body;

        config['preload'] = 'auto';
        config['autoplay'] =
        config['loop'] = FALSE;

        audio = Global['Audio'](config);
        mine._audio = audio;

        if (!audio) {
            return FALSE;
        }

        if (autoplay) {
            var autoplayid;
            autoplay = function() {
                mine['uncontract'](autoplayid);
                mine['play']();
            };

            autoplayid = this['contract'](audio, ev_canplay, autoplay);
        }
        if (loop) {
            this['loop'](TRUE);
        }

        if (config['oncanplay']) {
            this['contract'](audio, ev_canplay, config['oncanplay']);
        }
        if (config['onended']) {
            this['contract'](audio, ev_ended, config['onended']);
        }

        append(_parent, audio);
    },
    'properties': {
        'dispose': function() {
            remove(this._audio);
            this._orgdis();
        },
        'getAudio': function() {
            return this._audio;
        },
        'getCurrent': function() {
            return this._audio.currentTime;
        },
        'getDuration': function() {
            return this._audio.duration;
        },
        'setCurrent': function(num) {
            this._audio.currentTime = num;
        },
        'loop': function(bool) {
            var mine = this;
            if (mine.loopid) {
                mine['uncontract'](mine.loopid);
                delete mine.loopid;
            }

            if (bool) {
                mine.loopid =
                mine['contract'](mine._audio, ev_ended, function() {
                    mine['stop']();
                    mine['play']();
                });
            }
        },
        'autoplay': function(bool) {
        },
        'play': function() {
            this._audio.play();
        },
        'pause': function() {
            this._audio.pause();
        },
        'stop': function() {
            this['setCurrent'](0);
            this['pause']();
        }
    }
});
