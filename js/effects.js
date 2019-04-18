function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


jQuery(function($){
		$.scrollTo(0);
		$(".upbutton").click(function(){$.scrollTo($('body'),500);});
		$("#services").click(function(){$.scrollTo($('.services'),500);});
		$("#projects").click(function(){$.scrollTo($('.projects'),500);});
		$("#about").click(function(){$.scrollTo($('.aboutus'),500);});
		$("#contact").click(function(){$.scrollTo($('.contacter'),500);});
		
});
	$(window).scroll(function()
	{
		if($(this).scrollTop() > 100) $(".upbutton").fadeIn(2000);
		else $(".upbutton").fadeOut(1000);
	});


	var lock1 = true;
	var lock2 = true;
	var lock3 = true;
	var lock4 = true;
	var lock5 = true;
	var lock6 = true;
	
$("#h1").click(function(){
	if(lock1 == true)
	{
	var heartcounter = document.querySelector("#c1").innerHTML;
	var number = parseInt(heartcounter);
	number++;
	$("#c1").html(number);
	$("#h1").css("color","red");
	lock1 = false;
	}
});
$("#h2").click(function(){
	if(lock2 == true)
	{
	var heartcounter = document.querySelector("#c2").innerHTML;
	var number = parseInt(heartcounter);
	number++;
	$("#c2").html(number);
	$("#h2").css("color","red");
	lock2 = false;
	}
});
$("#h3").click(function(){
	if(lock3 == true)
	{
	var heartcounter = document.querySelector("#c3").innerHTML;
	var number = parseInt(heartcounter);
	number++;
	$("#c3").html(number);
	$("#h3").css("color","red");
	lock3 = false;
	}
});
$("#h4").click(function(){
	if(lock4 == true)
	{
	var heartcounter = document.querySelector("#c4").innerHTML;
	var number = parseInt(heartcounter);
	number++;
	$("#c4").html(number);
	$("#h4").css("color","red");
	lock4 = false;
	}
});
$("#h5").click(function(){
	if(lock5 == true)
	{
	var heartcounter = document.querySelector("#c5").innerHTML;
	var number = parseInt(heartcounter);
	number++;
	$("#c5").html(number);
	$("#h5").css("color","red");
	lock5 = false;
	}
});
$("#h6").click(function(){
	if(lock6 == true)
	{
	var heartcounter = document.querySelector("#c6").innerHTML;
	var number = parseInt(heartcounter);
	number++;
	$("#c6").html(number);
	$("#h6").css("color","red");
	lock6 = false;
	}
});
