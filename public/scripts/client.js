console.log('client.js has been loaded');

$(document).ready(function(){
    console.log('jQuery has been loaded');
    $('#newTaskButton').on('click', function (){
        console.log('newTaskButton has been clicked');
        var taskInput = $('#task').val();
        var inputObject = {
            task: taskInput
        };
        $.ajax({
            method: 'POST',
            url: '/task',
            data: inputObject,
            success: function(response){
                console.log('response');
                getTasks();        
            }
        })
    })
});

function getTasks () {
    $.ajax({
        method: 'GET',
        url: '/task',
        success: function(response){
            console.log(response);
        }
    })
}

function displayTasks(tasksArray) {
    $('#tasksContainer').empty();
    for (var i = 0; i < tasksArray.length; i++) {
        var task = tasksArray[i];
        var $taskTR = $('<tr></tr>');
        $taskTR.data('id', task.id);
        $('#taskContainer').prepend($taskTR);
        
    }
}