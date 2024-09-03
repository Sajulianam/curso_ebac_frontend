$(document).ready(function() {
    $('#taskForm').submit(function(event) {
        event.preventDefault();
        
        const newTask = $('#taskInput').val();
        if (newTask !== '') {
            $('<li></li>').text(newTask).appendTo('#taskList');
            $('#taskInput').val('');
        }
    });

    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});