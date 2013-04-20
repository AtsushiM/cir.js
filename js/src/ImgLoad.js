C['ImgLoad'] = classExtendBase({
    'init': function(config /* varless */, mine) {
        mine = this;

        mine._srcs = config['srcs'];
        mine._loadedsrcs = [];
        mine._contractid = [];
        mine._async = new Async({
            'waits': mine._srcs,
            'onprogress': config['onprogress'],
            'callback': function() {
                var i = mine._contractid.length;

                for (; i--;) {
                    mine['uncontract'](mine._contractid[i]);
                }
                mine._contractid = [];

                (config['onload'] || nullFunction)(mine._loadedsrcs);
            }
        });

        if (!config['manual']) {
            mine['start']();
        }
    },
    'start': function() {
        var mine = this,
            img,
            i = mine._srcs.length;

        if (mine._started) {
            return;
        }

        mine._started = TRUE;

        for (; i--;) {
            img = create('img');
            img.src = mine._srcs[i];

            mine._contractid.push(mine['contract'](img, ev['LOAD'], countup));
            mine._loadedsrcs.push(img);
        }

        function countup() {
            mine._async['pass']();
        }
    }
});
