describe('C.Asyncは', function() {
    var async;

    beforeEach(function() {
        // init
    });
    afterEach(function() {
        // clear
    });

    it('dispose()でインスタンスを解放する', function() {
        async = new C.Async();
        async.dispose();
        expect(async).to.eql({});
    });

    it('queueオプションに渡された関数を非同期で実行する。queueに入れた関数に引数が宣言されている場合、第1引数を実行すれば次タスクが実行される', function(done) {
        var progresscount = 0,
            queueresult = [];

        async = new C.Async({
            queue: [
                function() {
                    queueresult.push(1);
                },
                function() {
                    queueresult.push(2);
                },
                function(_done) {
                    setTimeout(function() {
                        queueresult.push(3);
                        _done();
                    }, 20);
                },
                function() {
                    queueresult.push(4);
                }
            ],
            onprogress: function() {
                progresscount++;
            },
            oncomplete: function() {
                expect(queueresult).to.eql([1, 2, 4, 3]);
                expect(progresscount).to.be(4);

                done();
            }
        });

        async.start();
    });

    it('queueにAsyncインスタンスが渡された場合、インスタンスに設定されたqueueを非同期で実行する', function(done) {
        var result = [];

        async = new C.Async({
            queue: [
                function() {
                    result.push(1);
                },
                new C.Async({
                    queue: [
                        function(done) {
                            setTimeout(function() {
                                result.push(2);
                                done();
                            }, 20);
                        }
                    ]
                }),
                function() {
                    result.push(3);
                },
                new C.Async({
                    queue: [
                        function() {
                            result.push(4);
                        }
                    ],
                    oncomplete: function() {
                        result.push(5);
                    }
                })
            ],
            oncomplete: function() {
                expect(result).to.eql([1, 3, 4, 5, 2]);
                done();
            }
        });

        async.start();
    });

    it('start()はqueueを初期状態に戻してからqueueの順序通りにタスクを実行する', function() {
        var result = [];

        async = new C.Async({
            queue: [
                function() {
                    result.push(1);
                },
                function() {
                    result.push(2);
                }
            ]
        });

        async.start();
        expect(result).to.eql([1, 2]);

        result = [];
        async.start();
        expect(result).to.eql([1, 2]);
    });

    it('getQueue()は現在のqueueを取得する。queueは残っているtaskが入っている配列である', function() {
        var task1 = function() {
                var queue = this.getQueue();

                expect(queue).to.eql([task2]);
            },
            task2 = function() {
                var queue = this.getQueue();

                expect(queue).to.eql([]);
            };

        async = new C.Async({
            queue: [
                task1,
                task2
            ]
        });

        expect(async.getQueue()).to.eql([task1, task2]);

        async.start();

        async = new C.Async();
        expect(async.getQueue()).to.eql([]);
    });

    it('resetQueue([queue])はインスタンス生成時、もしくは引数のqueueを初期状態としてqueueのリセットを行う', function() {
        var task1 = function() {};

        async = new C.Async({
            queue: [
                task1
            ]
        });

        expect(async.getQueue()).to.eql([task1]);
        async.resetQueue();
        expect(async.getQueue()).to.eql([task1]);
        async.resetQueue([]);
        expect(async.getQueue()).to.eql([]);
        async.resetQueue();
        expect(async.getQueue()).to.eql([]);
    });

    it('setQueue(queue)はqueueオプションの設定する', function() {
        var task1 = function(){};

        async = new C.Async({
            queue: []
        });

        expect(async.getQueue()).to.eql([]);
        async.setQueue([task1]);
        expect(async.getQueue()).to.eql([task1]);
        async.setQueue([]);
        expect(async.getQueue()).to.eql([]);

        async.setQueue([task1]);
        async.resetQueue();
        expect(async.getQueue()).to.eql([]);
    });

    it('addTask(task, [priority])はqueueにtaskを追加する。priorityが設定されない場合はqueueの最後へ追加される。プライオリティは0以上の整数であり、小さいほど優先度があがる', function() {
        var task1 = function() {},
            task2 = function() {},
            task3 = function() {};

        async = new C.Async();

        async.addTask(task1);
        async.addTask(task2);
        async.addTask(task3);
        expect(async.getQueue()).to.eql([task1, task2, task3]);

        async.addTask(task3, 0);
        expect(async.getQueue()).to.eql([task3, task1, task2, task3]);
        async.addTask(task3, 2);
        expect(async.getQueue()).to.eql([task3, task1, task3, task2, task3]);
        async.addTask(task3, 10);
        expect(async.getQueue()).to.eql([task3, task1, task3, task2, task3, task3]);
    });

    it('removeTask(task)はqueueの探索を行い、taskを発見した場合、削除する', function() {
        var task1 = function() {},
            task2 = function() {},
            task3 = function() {};

        async = new C.Async({
            queue: [
                task1,
                task2,
                task3,
                task2,
                task3,
                task3
            ]
        });

        async.removeTask(task1);
        expect(async.getQueue()).to.eql([task2, task3, task2, task3, task3]);
        async.removeTask(task3);
        expect(async.getQueue()).to.eql([task2, task2]);
    });
});
