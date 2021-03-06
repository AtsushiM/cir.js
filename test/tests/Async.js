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
    });

    it('restart([queue])はキューを初期状態、もしくはqueueにしてからstart()する', function() {
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
        async.restart();
        expect(result).to.eql([1, 2]);
    });

    it('stop()はキューを削除し、処理を停止する', function() {
        var result = [];

        async = new C.Async({
            queue: [
                function() {
                    result.push(1);
                    this.stop();
                },
                function() {
                    result.push(2);
                }
            ]
        });

        async.start();

        expect(result).to.eql([1]);
    });

    it('pause()は処理を一時停止し、resume()は処理を再開する', function() {
        var result = [];

        async = new C.Async({
            queue: [
                function() {
                    result.push(1);
                    this.pause();
                },
                function() {
                    result.push(2);
                }
            ]
        });

        async.start();

        expect(result).to.eql([1]);

        async.resume();

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
        expect(async.getQueue()).to.eql([task2, task2, task3, task3]);
    });

    it('start()実行時にstartイベントが発火する', function(done) {
        async = new C.Async({});

        async.on('start', function() {
            done();
        });

        async.start();
    });

    it('restart()実行時にresetイベント、startイベントが発火する', function(done) {
        var result = [];

        async = new C.Async({});

        async.on('reset', function() {
            result.push('reset');
        });

        async.on('start', function() {
            result.push('start');
        });

        async.restart();

        expect(result).to.eql(['reset', 'start']);

        done();
    });

    it('stop()実行時にstopイベントが発火する', function(done) {
        async = new C.Async({});

        async.on('stop', function() {
            done();
        });

        async.stop();
    });

    it('pause()実行時にpauseイベントが発火する', function(done) {
        async = new C.Async({});

        async.on('pause', function() {
            done();
        });

        async.pause();
    });

    it('resume()実行時にresumeイベントが発火する', function(done) {
        async = new C.Async({});

        async.on('resume', function() {
            done();
        });

        async.pause();
        async.resume();
    });

    it('resetQueue()実行時にresetイベントが発火する', function(done) {
        async = new C.Async({});

        async.on('reset', function() {
            done();
        });

        async.resetQueue();
    });

    it('setQueue()実行時にchangeイベントが発火する', function(done) {
        async = new C.Async({});

        async.on('change', function() {
            done();
        });

        async.setQueue([]);
    });

    it('addTask()実行時にchangeイベントが発火する', function(done) {
        async = new C.Async({});

        async.on('change', function() {
            done();
        });

        async.addTask(function() {
        });
    });

    it('removeTask()実行時にchangeイベントが発火する', function(done) {
        var func1 = function() {
            };

        async = new C.Async({
            queue: [
                func1
            ]
        });

        async.on('change', function() {
            done();
        });

        async.removeTask(func1);
    });

    it('タスク実行ごとにprogressイベントが発火する', function(done) {
        var result = [],
            count = 0;

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

        async.on('progress', function() {
            count++;
            result.push('progress:' + count);
        });

        async.start();

        expect(result).to.eql([1, 'progress:1', 2, 'progress:2']);

        done();
    });

    it('キューの処理が全て完了した場合、completeイベントが発火する', function(done) {
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

        async.on('complete', function() {
            expect(result).to.eql([1, 2]);

            done();
        });

        async.start();
    });
});
