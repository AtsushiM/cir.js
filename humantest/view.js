(function(){
    var view = new C.View({
            el: '#test',
            events: {
                '&': {
                    'click': 'clickroot'
                },
                'a': {
                    'click': 'clicklower'
                }
            },
            clickroot: function() {
                console.log('root');
            },
            clicklower: function() {
                console.log('lower');
            }
        });
}());
