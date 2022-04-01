var Day = moment().format("dddd");
var calDate = moment().calendar("lll");
$(".description").text(Day + " " + calDate);
var times = ["9:00", "10:00","11:00","12:00","1:00","2:00","3:00","4:00","5:00"]
   
for (let i = 0; i < times.length; i++) {
   $(".time-block-" + i).text(times [i]);
}

$('.savebutton').on('click',function(){
    var userinput= $(this).siblings('textarea').val();
    var usertime= $(this).siblings('p').text();
    console.log(userinput, usertime);
    localStorage.setItem(usertime,userinput);
   
})

