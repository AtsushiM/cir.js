var observer = new C.Observer(),
    i = 0,
    len = 10000;

for (; i < len; i++) {
    observer.on('test' + i, function() {
        console.log(i);
    });
}

C.$('input').on(C.event.click, function() {
    observer.dispose();
});
