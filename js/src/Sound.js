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

            autoplayid = this['contract'](audio, e_canplay, autoplay);
        }
        if (loop) {
            this['loop'](TRUE);
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
            if (this.loopid) {
                this['uncontract'](this.loopid);
                delete this.loopid;
            }

            if (bool) {
                this.loopid = this['contract'](this._audio, e_ended, function() {
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
