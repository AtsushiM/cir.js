(function() {
    var style = C.element.append(
            C.element.$('head'),
            C.element.create('style', {
                type: 'text/css'
            })
        ),
        sheet = style.sheet;

    /* sheet.insertRule('@-webkit-keyframes anime1 { 100% {width: 200px; height: 50px; background-color: blue;} }'); */
    /* sheet.insertRule('@-moz-keyframes anime1 { 100% {width: 200px; height: 50px; background-color: blue;} }'); */
    /* sheet.insertRule('@-o-keyframes anime1 { 100% {width: 200px; height: 50px; background-color: blue;} }'); */
    /* sheet.insertRule('@-ms-keyframes anime1 { 100% {width: 200px; height: 50px; background-color: blue;} }'); */
    /* sheet.insertRule('@keyframes anime1 { 100% {width: 200px; height: 50px; background-color: blue;} }'); */
    sheet.insertRule('#test { width: 50px; height: 50px; background-color: aqua; -moz-animation: anime1 5000ms ease -2000ms 1 normal forwards;}');
}());
/*


@-webkit-keyframes anime1 {
    100% {width: 200px; height: 50px; background-color: blue;}
}

@-o-keyframes anime1 {
    100% {width: 200px; height: 50px; background-color: blue;}
}

@-ms-keyframes anime1 {
    100% {width: 200px; height: 50px; background-color: blue;}
}

@keyframes anime1 {
    100% {width: 200px; height: 50px; background-color: blue;}
}

#test { width: 50px; height: 50px; background-color: aqua; -moz-animation: anime1 5000ms ease -2000ms 1 normal forwards; -webkit-animation: anime1 5000ms ease -2000ms 1 normal forwards; -o-animation: anime1 5000ms ease -2000ms 1 normal forwards; -ms-animation: anime1 5000ms ease -2000ms 1 normal forwards; animation: anime1 5000ms ease -2000ms 1 normal forwards; }
*/
