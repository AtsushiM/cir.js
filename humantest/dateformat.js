// dateformat
function dateformat(format, dateobj) {
    dateobj = dateobj || new Date();

    var convert_D = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        convert_l = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        convert_F = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        convert_M = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        convert = {
            // d = 01 ~ 31
            d: function() {
                return digit2(date_date);
            },
            // j = 1 ~ 31
            j: function() {
                return date_date;
            },
            // D = Mon ~ Sun
            D: function() {
                return convert_D[date_day];
            },
            // l = Monday ~ Sunday
            l: function() {
                return convert_l[date_day];
            },
            // F = Full Month
            F: function() {
                return convert_F[date_month];
            },
            // M = Short Month
            M: function() {
                return convert_M[date_month];
            },
            // m = 01 ~ 12
            m: function() {
                return digit2(date_month);
            },
            // n = 1 ~ 12
            n: function() {
                return date_month;
            },
            // Y = 2013
            Y: function() {
                return date_year;
            },
            // y = 13
            y: function() {
                return lower2(date_year);
            },
            // a = am || pm
            a: function() {
                return date_ampm.toLowerCase();
            },
            // A = AM || PM
            A: function() {
                return date_ampm;
            },
            // g = 1 ~ 12
            g: function() {
                var onetwo = 12;

                if (date_hours == onetwo || date_hours == 0) {
                    return onetwo;
                }

                return date_hours % onetwo;
            },
            // G = 0 ~ 24
            G: function() {
                return date_hours;
            },
            // h = 01 ~ 12
            h: function() {
                return digit2(convert.g());
            },
            // H = 00 ~ 24
            H: function() {
                return digit2(date_hours);
            },
            // i = 00 ~ 59
            i: function() {
                return digit2(date_min);
            },
            // s = 00 ~ 59
            s: function() {
                return digit2(date_sec);
            },
            // I = 0 ~ 59
            I: function() {
                return date_min;
            },
            // S = 0 ~ 59
            S: function() {
                return date_sec;
            }
        };
        date_year = dateobj.getFullYear(),
        date_date = dateobj.getDate(),
        date_day = dateobj.getDay(),
        date_month = dateobj.getMonth(),
        date_hours = dateobj.getHours(),
        date_min = dateobj.getMinutes(),
        date_sec = dateobj.getSeconds(),
        date_ampm = date_hours < 12 ? 'AM' : 'PM';

    format = format.replace(/%([djDlFMmnYyaAgGhHisIS])/g, function(hit, $1) {
        return convert[$1]();
    });

    console.log(format);
}

dateformat('%d/%j/%D/%l/%F/%m/%M/%n/%Y/%y.%a.%A.%g.%G.%h.%H.%i.%s.%I.%S');

function digit2(num) {
    num = Math.floor(+num);

    if (num < 10) {
        num = '0' + num;
    }

    return '' + num;
}
function lower2(num) {
    num = '' + num;

    var len = num.length;

    num = num.slice(num.length - 2);

    return num;
}
