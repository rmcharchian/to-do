console.log('client.js has been loaded');

$(document).ready(function(){
    console.log('jQuery has been loaded');
    $('#newTaskButton').on('click', function (){
        console.log('newTaskButton has been clicked');
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