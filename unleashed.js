function start1(){
	$('.srodekruletki').hide(1);
	var x = window.innerHeight - 120;
	var xx = $('.buton').width() - 101;
	$('.czesci1').css({"height" : x+"px"});
	$('.czesci2').css({"height" : x+"px"});
	$('.czesci3').css({"height" : x+"px"});
	$('.tekstbutona').css({"width" : xx+"px"});
}

$(window).resize(function() {
  	var x = window.innerHeight - 120;
  	var xx = $('.buton').width() - 101;
	$('.czesci1').css({"height" : x+"px"});
	$('.czesci2').css({"height" : x+"px"});
	$('.czesci3').css({"height" : x+"px"});
	$('.tekstbutona').css({"width" : xx+"px"});
});

$(function(){
	$('.portfel').click(function(){
		$('.portfel').animate({height: "65%", width: "65%"},26).animate({height: "70%", width: "70%"},26);
	});
});

setInterval(function(){
	$('.szczalka').animate({height: "27px", width: "27px"},1000).animate({height: "25px", width: "25px"},1000);
},2000);

$(function(){
	$('#szczalka').on('click',function(){

		if (!$(this).hasClass("expanded")){
			$('#ruletka').animate({ height: $('.czesci1').height()+"px"},1000);
			$("#szczalka").rotate({bind:{
	  			click: function(){
	   			 	$('.szczalka').rotate({
		      			angle: 180,
		      			animateTo: 0
	      			});
	    		}
	  		}
			});
			$('.srodekruletki').slideDown(200);
			$('#staty').slideUp(1000);
			$('.portfel').hide(1000);
	      	$(this).addClass("expanded");
	    } else {
	   		$('#ruletka').animate({ height: "25px"},1000);
			$("#szczalka").rotate({bind:{
	  			click: function(){
	   			 	$('.szczalka').rotate({
		      			angle: 0,
		      			animateTo:180
	      			});
	    		}
	  		}
			});
	   		$('.srodekruletki').slideUp(1000);
	   		$('#staty').slideDown(1000);
	   		$('.portfel').show(1000);
	    	$(this).removeClass("expanded");
	   }
	});
});