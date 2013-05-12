describe('C.Taskは', function() {
    var task;

    beforeEach(function() {
    });
    afterEach(function() {
        if (task.dispose) {
            task.dispose();
        }
    });

    it('dispose()でインスタンスを解放する', function() {
        task = new C.Task();
        task.dispose();
        expect(task).to.eql({});
    });

    it('queueオプションに渡された関数を順次実行する。queueに入れた関数に引数が宣言されている場合、第1引数を実行すれば次タスクが実行される', function(done) {
        var progresscount = 0,
            queueresult = [];

        task = new C.Task({
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

    it('queueにTaskインスタンスが渡された場合、インスタンスに設定されたqueueを終了してから次タスクを実行する', function(done) {
        var result = [];

        task = new C.Task({
            queue: [
                function() {
                    result.push(1);
                },
                new C.Task({
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
                new C.Task({
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
});
