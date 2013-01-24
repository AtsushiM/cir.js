/* Test: "../../spec/_src/src/Movie/test.js" */
Global['Movie'] = klass({
    'extend': Base,
    'init': function(config) {
        this['_super']();

        var mine = this,
            autoplay = config['autoplay'],
            loop = config['loop'],
            video,
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

            this['contract'](video, ev_canplay, autoplay);
        }
        if (loop) {
            this['loop'](TRUE);
        }

        if (config['oncanplay']) {
            this['contract'](video, ev_canplay, config['oncanplay']);
        }
        if (config['onended']) {
            this['contract'](video, ev_ended, config['onended']);
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
            var mine = this;
            if (mine.loopid) {
                mine['uncontract'](mine.loopid);
                delete mine.loopid;
            }

            if (bool) {
                mine.loopid = mine['contract'](mine._video, ev_ended, function() {
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
