var today = moment().format('dddd, MM Do YYYY');
console.log(today);

var currentDay =document.getElementById('currentDay');

currentDay.innerHTML=today;

var timeBlock = $('.time-block')//[0].innerText;
console.log(timeBlock[0].id)

for(i=0;i<10;i++){
    var parsedInt=parseInt(timeBlock[i].innerText)
}

$(document).ready(function(){
    $('.saveBtn').on('click',function(){
        var text=$(this).siblings('.description').val();
        var time=$(this).parent().attr('id');
        localStorage.setItem(time,text);
    })
function isTime(){
    var now=moment().hour();
    console.log($('.time-block').each)
    $('.time-block').each(function(){
        var elTime = parseInt($(this).attr("id").split("am")[0]);
        console.log(elTime)
        console.log(now)
        if (elTime < now) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (elTime===now) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }

    })
}

console.log(localStorage.getItem('8am'));

document.getElementById('desc8').innerText = localStorage.getItem('8am');
document.getElementById('desc9').innerText = localStorage.getItem('9am');
document.getElementById('desc10').innerText = localStorage.getItem('10am');
document.getElementById('desc11').innerText = localStorage.getItem('11am');
document.getElementById('desc12').innerText = localStorage.getItem('12pm');
document.getElementById('desc1').innerText = localStorage.getItem('1pm');
document.getElementById('desc2').innerText = localStorage.getItem('2pm');
document.getElementById('desc3').innerText = localStorage.getItem('3pm');
document.getElementById('desc4').innerText = localStorage.getItem('4pm');
document.getElementById('desc5').innerText = localStorage.getItem('5pm');




isTime();
})



