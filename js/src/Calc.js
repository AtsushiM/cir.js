C['Calc'] = classExtendBase({
    'init': function(config) {
        config = config || NULLOBJ;

        var fewdigit = config['fewdigit'] || 8,
            digit = '1';

        for (; fewdigit--; ) {
            digit += '0';
        }

        this._fewdigit = +digit;
    },
    _removefew: function(num) {
        return num * this._fewdigit;
    },
    _addfew: function(num) {
        return num / this._fewdigit;
    },
    /* add:  */
    'addition': function(num1, num2) {
        return this._addfew(this._removefew(num1) + this._removefew(num2));
    },
    /* sub:  */
    'subtraction': function(num1, num2) {
        return this._addfew(this._removefew(num1) - this._removefew(num2));
    },
    /* mul:  */
    'multiplication': function(num1, num2) {
        return this._addfew(this._addfew(this._removefew(num1) * this._removefew(num2)));
    },
    /* div:  */
    'division': function(num1, num2) {
        return this._removefew(num1) / this._removefew(num2);
    }
});
C['calc'] = new C['Calc']();
