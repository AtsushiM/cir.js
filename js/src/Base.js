Base = C['Base'] = classExtend(UNDEFINED, {
    _disposecountid: 0,
    'dispose': function(/* varless */ that, i, temp) {
        that = this;

        /* var temp = that._disposestore; */
        temp = that._disposestore;

        for (i in temp) {
            off.apply(NULL, temp[i]);
        }

        for (i in that) {
            temp = that[i];

            if (temp && temp['dispose']) {
                temp['dispose']();
            }
        }

        that.__proto__ = NULL;

        for (i in that) {
            that[i] = NULL;
            delete that[i];
        }
    },
    _contract: this_contract,
    'contract': this_contract,
    _uncontract: this_uncontract,
    'uncontract': this_uncontract
});
