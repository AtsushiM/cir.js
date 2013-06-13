(function() {
    C.$('#test-mouseover').on('mouseover', hit);
    C.$('#test-mouseout').on('mouseout', hit);
    C.$('#test-mousedown').on('mousedown', hit);
    C.$('#test-mouseup').on('mouseup', hit);
    C.$('#test-mousemove').on('mousemove', hit);

    function hit() {
        C.$(this).addClass('hit');
    }
}());
