var timer;
var i = 0;
$(function() {	
	$(".ig").eq(0).fadeIn(1000).show().siblings().fadeOut(1000).hide();

	showtime();

	$(".tab").click(function() {
		clearInterval(timer);
		i = $(this).index();
		show();		
		showtime();
	});	
	


});

function show() {
	$(".ig").eq(i).fadeIn(1000).show().siblings().fadeOut(1000).hide();
	$(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
}

function showtime() {
	timer = setInterval(function() {
		i++;
		if (i == 5) {
			i = 0;
		}
		show();
	}, 6000);
}
