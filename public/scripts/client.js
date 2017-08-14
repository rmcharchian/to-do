console.log('client.js has been loaded');

$(document).ready(function(){
    console.log('jQuery has been loaded');
    getTasks();
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
            displayTasks(response);
        }
    })
}

function displayTasks(tasksArray) {
    $('#taskContainer').empty();
    for (var i = 0; i < tasksArray.length; i++) {
        var task = tasksArray[i];
        var $taskDiv = $('<div></div>');
        $taskDiv.data('id', task.id);
        $taskDiv.append('div class="complete">' + task.complete + '</div>');
        var $taskDivInput = $('input class="">');
        $taskDivInput.val(task.complete);
        $taskDiv.append($taskDivInput);

        $('#taskContainer').prepend(
            '<div class = "tasks">' + task.task + '</div>'
        );
        
    }
}

