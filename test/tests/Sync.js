describe('C.Syncは', function() {
    var task;

    beforeEach(function() {
    });
    afterEach(function() {
        if (task.dispose) {
            task.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        task = new C.Sync();
        task.dispose();
        expect(task).to.eql({});
    });

    it('queueオプションに渡された関数を順次実行する。queueに入れた関数に引数が宣言されている場合、第1引数を実行すれば次タスクが実行される', function(done) {
        var progresscount = 0,
            queueresult = [];

        task = new C.Sync({
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
                expect(queueresult).to.eql([1, 2, 3, 4]);
                expect(progresscount).to.be(4);

                done();
            }
        });

        task.start();
    });

    it('queueにSyncインスタンスが渡された場合、インスタンスに設定されたqueueを終了してから次タスクを実行する', function(done) {
        var result = [];

        task = new C.Sync({
            queue: [
                function() {
                    result.push(1);
                },
                new C.Sync({
                    queue: [
                        function() {
                            result.push(2);
                        }
                    ],
                    oncomplete: function() {
                        result.push(3);
                    }
                }),
                function() {
                    result.push(4);
                },
                new C.Sync({
                    queue: [
                        function(done) {
                            setTimeout(function() {
                                result.push(5);
                                done();
                            }, 20);
                        }
                    ]
                })
            ],
            oncomplete: function() {
                expect(result).to.eql([1, 2, 3, 4, 5]);
                done();
            }
        });

        task.start();
    });

    it('start()はqueueの順序通りにタスクを実行する', function() {
        var result = [];

        task = new C.Sync({
            queue: [
                function() {
                    result.push(1);
                },
                function() {
                    result.push(2);
                }
            ]
        });

        task.start();
        expect(result).to.eql([1, 2]);
    });

    it('restart([queue])はキューを初期状態、もしくはqueueにしてからstart()する', function() {
        var result = [];

        task = new C.Sync({
            queue: [
                function() {
                    result.push(1);
                },
                function() {
                    result.push(2);
                }
            ]
        });

        task.start();
        expect(result).to.eql([1, 2]);

        result = [];
        task.restart();
        expect(result).to.eql([1, 2]);
    });

    it('stop()はキューを削除し、処理を停止する', function() {
        var result = [];

        task = new C.Sync({
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

        task.start();

        expect(result).to.eql([1]);
    });

    it('pause()は処理を一時停止し、resume()は処理を再開する', function() {
        var result = [];

        task = new C.Sync({
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

        task.start();

        expect(result).to.eql([1]);

        task.resume();

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

        task = new C.Sync({
            queue: [
                task1,
                task2
            ]
        });

        expect(task.getQueue()).to.eql([task1, task2]);

        task.start();

        task = new C.Sync();
        expect(task.getQueue()).to.eql([]);
    });
    it('resetQueue([queue])はインスタンス生成時、もしくは引数のqueueを初期状態としてqueueのリセットを行う', function() {
        var task1 = function() {};

        task = new C.Sync({
            queue: [
                task1
            ]
        });

        expect(task.getQueue()).to.eql([task1]);
        task.resetQueue();
        expect(task.getQueue()).to.eql([task1]);
        task.resetQueue([]);
        expect(task.getQueue()).to.eql([]);
        task.resetQueue();
        expect(task.getQueue()).to.eql([]);
    });
    it('setQueue(queue)はqueueオプションの設定する', function() {
        var task1 = function(){};

        task = new C.Sync({
            queue: []
        });

        expect(task.getQueue()).to.eql([]);
        task.setQueue([task1]);
        expect(task.getQueue()).to.eql([task1]);
        task.setQueue([]);
        expect(task.getQueue()).to.eql([]);

        task.setQueue([task1]);
        task.resetQueue();
        expect(task.getQueue()).to.eql([]);
    });
    it('addTask(task, [priority])はqueueにtaskを追加する。priorityが設定されない場合はqueueの最後へ追加される。プライオリティは0以上の整数であり、小さいほど優先度があがる', function() {
        var task1 = function() {},
            task2 = function() {},
            task3 = function() {};

        task = new C.Sync();

        task.addTask(task1);
        task.addTask(task2);
        task.addTask(task3);
        expect(task.getQueue()).to.eql([task1, task2, task3]);

        task.addTask(task3, 0);
        expect(task.getQueue()).to.eql([task3, task1, task2, task3]);
        task.addTask(task3, 2);
        expect(task.getQueue()).to.eql([task3, task1, task3, task2, task3]);
        task.addTask(task3, 10);
        expect(task.getQueue()).to.eql([task3, task1, task3, task2, task3, task3]);
    });
    it('removeTask(task)はqueueの探索を行い、taskを発見した場合、削除する', function() {
        var task1 = function() {},
            task2 = function() {},
            task3 = function() {};

        task = new C.Sync({
            queue: [
                task1,
                task2,
                task3,
                task2,
                task3,
                task3
            ]
        });

        task.removeTask(task1);
        expect(task.getQueue()).to.eql([task2, task3, task2, task3, task3]);
        task.removeTask(task3);
        expect(task.getQueue()).to.eql([task2, task2]);
    });
});
