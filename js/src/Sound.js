/* Test: "%JASMINE_TEST_PATH%" */
Global.Sound = klass({
    init: function(config) {
        var mine = this,
            autoplay = config.autoplay,
            loop = config.loop,
            audio,
            e_canplay = 'canplay',
            e_ended = 'ended';

        config.preload = 'auto';
        config.controls =
        config.autoplay =
        config.loop = false;

        audio = new Global.Audio(config);

        if (!audio) {
            return false;
        }

        if (autoplay) {
            on(audio, e_canplay, function() {
                mine.play();
            });
        }
        if (loop) {
            on(audio, e_ended, function() {
                mine.stop();
                mine.play();
            });
        }

        if (config.oncanplay) {
            on(audio, e_canplay, config.oncanplay);
        }
        if (config.onended) {
            on(audio, e_ended, config.onended);
        }

        append(doc.body, audio);

        mine._audio = audio;
    },
    properties: {
        getAudio: function() {
            return this._audio;
        },
        getCurrent: function() {
            return this._audio.currentTime;
        },
        setCurrent: function(num) {
            this._audio.currentTime = num;
        },
        getDuration: function() {
            return this._audio.duration;
        },
        play: function() {
            this._audio.play();
        },
        pause: function() {
            this._audio.pause();
        },
        stop: function() {
            this.pause();
            this.setCurrent(0);
        }
    }
});
