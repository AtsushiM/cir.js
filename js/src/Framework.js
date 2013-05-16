C['Framework'] = classExtend(C['Observer'], {
    'init': function(config) {
        config = config || NULLOBJ;

        this['_super']();

        this._config = config;

        if (config['router']) {
            owner(this, config['router']['action']);

            this._router = new C['Route'](config['router']);
        }

        if (!config['manual']) {
            this['exeTask']('init');
        }
    },
    'route': function(action) {
        this._router['fire'](action);
    },
    'addTask': function(taskname, task) {
        this[taskname] = task;
    },
    'removeTask': function(taskname) {
        if (!this[taskname]) {
            return;
        }

        if (this[taskname]['dispose']) {
            this[taskname]['dispose']();
        }

        delete this[taskname];
    },
    'exeTask': function(taskname) {
        var task = this._config[taskname];

        if (!task) {
            return;
        }

        if (isFunction(task)) {
            return task.call(this);
        }

        task['start']();
    }
});
