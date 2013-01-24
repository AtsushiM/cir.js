/* Test: "../../spec/_src/src/Movie/test.js" */
Global['Movie'] = klass({
    'extend': Base,
    'init': function(config) {
        this['_super']();

        var mine = this,
            autoplay = config['autoplay'],
            loop = config['loop'],
            video,
            e_canplay = 'canplay',
            e_ended = 'ended',
            _parent = config['element'] || doc.body;

        config['preload'] = 'auto';
        config['autoplay'] =
        config['loop'] = FALSE;

        video = Global['Video'](config);
        mine._video = video;

        if (!video) {
            return FALSE;
        }

        if (autoplay) {
            autoplay = function() {
                mine['play']();
            };

            this['contract'](video, e_canplay, autoplay);
        }
        if (loop) {
            this['loop'](TRUE);
        }

        if (config['oncanplay']) {
            this['contract'](video, e_canplay, config['oncanplay']);
        }
        if (config['onended']) {
            this['contract'](video, e_ended, config['onended']);
        }

        append(_parent, video);
    },
    'properties': {
        'dispose': function() {
            remove(this._video);
            this._orgdis();
        },
        'getVideo': function() {
            return this._video;
        },
        'getCurrent': function() {
            return this._video.currentTime;
        },
        'getDuration': function() {
            return this._video.duration;
        },
        'setCurrent': function(num) {
            console.log(this._video);
            this._video.currentTime = num;
        },
        'loop': function(bool) {
            if (this.loopid) {
                this['uncontract'](this.loopid);
                delete this.loopid;
            }

            if (bool) {
                this.loopid = this['contract'](this._video, e_ended, function() {
                    mine['stop']();
                    mine['play']();
                });
            }
        },
        'play': function() {
            this._video.play();
        },
        'pause': function() {
            this._video.pause();
        },
        'stop': function() {
            this['setCurrent'](0);
            this['pause']();
        }
    }
});
