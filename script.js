$(document).ready(function (){
    var saveBtn = $('.saveBtn');
    saveBtn.on("click",function() {
        var value = $(this).siblings('.description').val()
        console.log(value);
        var time = $(this).parent().attr('id')
        console.log(time);
    })
})
$(document).ready(function(){
    //Displays time when loading page using moment and formats to desire output
    var currentTime = moment().format("dddd, MMMM Do");
    var dateOnScreen = $("#currentDay");
    dateOnScreen.append(currentTime);
    
    
    
    var saveBtn = $(".saveBtn");
    
    
    //function call that executes when save button is pressed
    saveBtn.on("click",function(){
        //gets text value of text area
        var textValue = $(this).siblings(".description").val();
        //gets id of time id div
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, textValue);
        //console.log(localStorage.getItem("hour-11"));
        
            var currentKey = time;
            $(this).siblings(".description").text(localStorage.getItem(currentKey));
            // console.log(currentKey);
            // console.log(localStorage.getItem(currentKey));
            
        
        
    });
    
    $(document).ready(function(){
        //created variable to get current time as hour
        var hour = moment().format("HH");
        //This function runs through each .description element
        $(".description").each(function(i,element){
            //saves the id of the parent node or the time id
            var currentKey = element.parentNode.getAttribute("id");
            //gets  the id saved in local storage at this item
            $(this).val(localStorage.getItem(currentKey));
            //slices time id to get the las two digits to compare with current hour
            var hourId = currentKey.slice(5,7);
            //if current hour is the same  as the id add present ccs style
            if(hour === hourId){
                $(this).addClass("present");
            }
            //if current hour is the less  as the id add future ccs style
            else if(hour < hourId){
                $(this).addClass("future");
            }
            //if current hour is the greater  as the id add past ccs style
            else{
                $("textarea").addClass("past");
            }
        });
        
    });
    
    });