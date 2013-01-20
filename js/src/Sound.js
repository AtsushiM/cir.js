/* Test: "../../spec/_src/src/Sound/test.js" */
Global.Sound = klass({
    extend: Base,
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
        mine._audio = audio;

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
    },
    properties: {
        getAudio: function() {
            return this._audio;
        },
        getCurrent: function() {
            return this._audio.currentTime;
        },
        getDuration: function() {
            return this._audio.duration;
        },
        setCurrent: function(num) {
            this._audio.currentTime = num;
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
