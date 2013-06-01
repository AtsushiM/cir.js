/* (function() { */
    var datefactory_convert_D = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datefactory_convert_l = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datefactory_convert_F = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datefactory_convert_M = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datefactory_convert = {
            // d = 01 ~ 31
            'd': function(date) {
                return datefactory_digit2(datefactory_convert['j'](date));
            },
            // j = 1 ~ 31
            'j': function(date) {
                return date.getDate();
            },
            // D = Mon ~ Sun
            'D': function(date) {
                return datefactory_convert_D[date.getDay()];
            },
            // l = Monday ~ Sunday
            'l': function(date) {
                return datefactory_convert_l[date.getDay()];
            },
            // F = Full Month
            'F': function(date) {
                return datefactory_convert_F[date.getMonth()];
            },
            // M = Short Month
            'M': function(date) {
                return datefactory_convert_M[date.getMonth()];
            },
            // m = 01 ~ 12
            'm': function(date) {
                return datefactory_digit2(datefactory_convert['n'](date));
            },
            // n = 1 ~ 12
            'n': function(date) {
                return date.getMonth() + 1;
            },
            // Y = 2013
            'Y': function(date) {
                return date.getFullYear();
            },
            // y = 13
            'y': function(date) {
                return datefactory_lower2(datefactory_convert['Y'](date));
            },
            // a = am || pm
            'a': function(date) {
                return str2LowerCase(datefactory_convert['A'](date));
            },
            // A = AM || PM
            'A': function(date) {
                return datefactory_convert['G'](date) < 12 ? 'AM' : 'PM';
            },
            // g = 1 ~ 12
            'g': function(date) {
                var hour = datefactory_convert['G'](date);

                if (hour == 12 || hour == 0 || hour == 24) {
                    return 12;
                }

                return hour % 12;
            },
            // G = 0 ~ 24
            'G': function(date) {
                return date.getHours();
            },
            // h = 01 ~ 12
            'h': function(date) {
                return datefactory_digit2(datefactory_convert['g'](date));
            },
            // H = 00 ~ 24
            'H': function(date) {
                return datefactory_digit2(datefactory_convert['G'](date));
            },
            // i = 00 ~ 59
            'i': function(date) {
                return datefactory_digit2(datefactory_convert['I'](date));
            },
            // s = 00 ~ 59
            's': function(date) {
                return datefactory_digit2(datefactory_convert['S'](date));
            },
            // I = 0 ~ 59
            'I': function(date) {
                return date.getMinutes();
            },
            // S = 0 ~ 59
            'S': function(date) {
                return date.getSeconds();
            }
        },
        datefactory_regFormat = /%([djDlFMmnYyaAgGhHisIS])/g;

function datefactory_formatReplace(hit, date) {
    return datefactory_convert[hit](date);
};

function datefactory_digit2(num) {
    num = +num;

    if (num < 10) {
        num = '0' + num;
    }

    return EMPTY + num;
}
function datefactory_lower2(num) {
    num = EMPTY + num;

    return num.slice(num.length - 2);
}

C['DateFactory'] = classExtendBase({
    'make': function(anydate) {
        switch (TRUE) {
            case isString(anydate):
                anydate = anydate.split(/[T:\-\+\/\s]/);

                // if (anydate.length == 3) {
                //     anydate.push(0, 0, 0);
                // }

                return new Date(
                    +anydate[0],
                    anydate[1] - 1,
                    +anydate[2],
                    +anydate[3] || 0,
                    +anydate[4] || 0,
                    +anydate[5] || 0
                );
            case isNumber(anydate):
                return new Date(anydate);
            case is('Date', anydate):
                return anydate;
        }
        return new Date();
    },
    'format': function(format, anydate) {
        anydate = this['make'](anydate);

        return format.replace(datefactory_regFormat, function(hit, $1) {
            return datefactory_formatReplace($1, anydate);
        });
    }
});
/* }()); */
