/* Test: "../../spec/_src/src/Sound/test.js" */
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

            this.ondispose(video, e_canplay, autoplay);
        }
        if (loop) {
            loop = function() {
                mine['stop']();
                mine['play']();
            };

            this.ondispose(video, e_ended, loop);
        }

        if (config['oncanplay']) {
            this.ondispose(video, e_canplay, config['oncanplay']);
        }
        if (config['onended']) {
            this.ondispose(video, e_ended, config['onended']);
        }

        append(_parent, video);
    },
    'properties': {
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
            this._video.currentTime = num;
        },
        'play': function() {
            this._video.play();
        },
        'pause': function() {
            this._video.pause();
        },
        'stop': function() {
            this['pause']();
            this['setCurrent'](0);
        }
    }
});
