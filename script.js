$(document).ready(function (){
    var saveBtn = $('.saveBtn');
    saveBtn.on("click",function() {
        var value = $(this).siblings('.description').val()
        console.log(value);
        var time = $(this).parent().attr('id')
        console.log(time);
    })
})