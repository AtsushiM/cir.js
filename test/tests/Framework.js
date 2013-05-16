describe('C.Frameworkは', function() {
    var fw;

    beforeEach(function() {
        // init
    });
    afterEach(function() {
        // clear
    });

    it('dispose()でインスタンスを解放する', function() {
        fw = new C.Framework();
        fw.dispose();
        expect(fw).to.eql({});
    });

    it('Frameworkを実現する', function() {
        var ret;

        fw = new C.Framework({
            init: function() {
                // var i;

                // for (i in this) {
                //     console.log(i);
                // }
            },
            router: {
                action: {
                    'route1': function() {
                        console.log(this);
                        this.exeTask('task1');
                    },
                    'route2': function() {
                        this.exeTask('task2');
                    }
                },
                noregex: true,
                manual: true
            },
            task1: new C.Async({
                queue: [
                    function() {
                        ret = 'task1';
                    }
                ]
            }),
            task2: new C.Sync({
                queue: [
                    function() {
                        ret = 'task2';
                    }
                ]
            })
        });

        fw.addTask('task3', new C.Sync());

        fw.exeTask('task1');
        expect(ret).to.be('task1');

        fw.exeTask('task2');
        expect(ret).to.be('task2');

        fw.route('route1');
        expect(ret).to.be('task1');

        fw.route('route2');
        expect(ret).to.be('task2');
    });
});
