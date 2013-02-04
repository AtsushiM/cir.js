(function() {
    var Model = C.klass({
        extend: C.Base,
        init: function(config) {
            var i
                store = config.store,
                on = config.on;

            this._store = new C.DataStore();
            this._observer = new C.Observer();

            for (i in store) {
                this._store.set(i, store[i]);
            }
            for (i in on) {
                this._observer.on(i, on[i]);
            }
        },
        properties: {
            dispose: function() {
                this._store.dispose();
                this._observer.dispose();
                this._orgdis();
            },
            set: function(key, val) {
                this._prev = this._store.get();
                this._store.set(key, val);

                this._observer.fire(ev['CHANGE'], this._store.get());
                this._observer.fire(ev['CHANGE'] + ':' + key, val);
            },
            getPrev: function() {
                return this._prev;
            },
            get: function(key) {
                return this._store.get(key);
            },
            // remove: function(key) {
            //     return store.remove(key);
            // },
            // reset: function() {
            //     return store.reset();
            // },
            on: function(key, func) {
                this._observer.on(key, func);
            },
            off: function(key, func) {
                return this._observer.off(key, func);
            },
            fire: function(key, vars) {
                return this._observer.fire(key, vars);
            }
        }
    });
}());
