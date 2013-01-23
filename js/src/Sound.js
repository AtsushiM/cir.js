/* Test: "../../spec/_src/src/Sound/test.js" */
Global['Sound'] = klass({
    'extend': Base,
    'init': function(config) {
        this['_super']();

        var mine = this,
            autoplay = config['autoplay'],
            loop = config['loop'],
            audio,
            e_canplay = 'canplay',
            e_ended = 'ended',
            _parent = config['element'] || doc.body;

        config['preload'] = 'auto';
        config['autoplay'] =
        config['loop'] = FALSE;

        audio = new Global['Audio'](config);
        mine._audio = audio;

        if (!audio) {
            return FALSE;
        }

        if (autoplay) {
            autoplay = function() {
                mine['play']();
            };

            this['contract'](audio, e_canplay, autoplay);
        }
        if (loop) {
            loop = function() {
                mine['stop']();
                mine['play']();
            };

            this['contract'](audio, e_ended, loop);
        }

        if (config['oncanplay']) {
            this['contract'](audio, e_canplay, config['oncanplay']);
        }
        if (config['onended']) {
            this['contract'](audio, e_ended, config['onended']);
        }

        append(_parent, audio);
    },
    'properties': {
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
