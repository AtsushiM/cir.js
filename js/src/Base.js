C['Base'] = classExtend(UNDEFINED, {
    _disposecountid: 0,
    'dispose': function(/* varless */ mine) {
        mine = this;

        var i = 0,
            temp = mine._disposestore;

        for (i in temp) {
            off.apply(NULL, temp[i]);
        }

        for (i in mine) {
            temp = mine[i];

            if (temp && temp['dispose']) {
                temp['dispose']();
            }
        }

        mine.__proto__ = NULL;

        for (i in mine) {
            mine[i] = NULL;
            delete mine[i];
        }

        return NULL;
    },
    _contract: this_contract,
    'contract': this_contract,
    _uncontract: this_uncontract,
    'uncontract': this_uncontract
});
