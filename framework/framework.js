(function() {
    var Surveillance = C.klass({
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
                var before = this._store.get(key),
                    ret = this._store.set(key, val);

                if (val !== before) {
                    this._observer.fire(key, {
                        key: key,
                        before: before,
                        after: val
                    });
                }

                return ret;
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

    var surve = new Surveillance({
            store: {
                test1: 0,
                test2: 1
            },
            on: {
                test1: function(e) {
                    console.log(e);
                },
                test2: function(e) {
                    console.log(e);
                }
            }
        });

    // surve.on('ontest', function(e) {
    //     console.log(e);
    // });
    surve.set('test1', 1);
    surve.set('test1', 1);
    surve.set('test2', 2);
}());
