$(document).ready(function() {

    $('form').on('submit', function() {

        var item = $('form input');
        var todo = {
            item: item.val()
        };

        $.ajax({
            type: 'POST',
            url: '/todo',
            data: todo,
            datatype: 'json',
            success: function(data) {
                console.log('reloaded');
                //do something with the data via front-end framework
                location.reload();
            }
        });

        return false;

    });

    $('li').on('click', function() {
        console.log('delete called');
        var item = $(this).text().replace(/ /g, "-");
        $.ajax({
            type: 'DELETE',
            url: '/todo/' + item,
            success: function(data) {
                //do something with the data via front-end framework
                console.log("delete exec reload");
                location.reload();
            }
        });
    });

});