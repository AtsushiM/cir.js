/* Test: "../../spec/_src/src/Sound/test.js" */
Global.Sound = klass({
    extend: Base,
    init: function(config) {
        this._dispose = [];

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
            autoplay = function() {
                mine.play();
            };

            on(audio, e_canplay, autoplay);
            this._dispose.push([audio, e_canplay, autoplay]);
        }
        if (loop) {
            loop = function() {
                mine.stop();
                mine.play();
            };

            on(audio, e_ended, loop);
            this._dispose.push([audio, e_ended, loop]);
        }

        if (config.oncanplay) {
            on(audio, e_canplay, config.oncanplay);
            this._dispose.push([audio, e_canplay, config.oncanplay]);
        }
        if (config.onended) {
            on(audio, e_ended, config.onended);
            this._dispose.push([audio, e_ended, config.onended]);
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
