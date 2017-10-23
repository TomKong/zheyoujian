$(document).ready(function(){
	$('#fullpage').fullpage({
		verticalCentered:false,
		navigation:false,
		continuosVertical:true,
		anchors: ['page1', 'page2', 'page3', 'page4','page5'],
		menu:'#menu',
		easing:"easeInQuart",
		scrollingSpeed:400,



		afterLoad: function(anchorLink, index) {


			switch (index) {
				case 1:
					$(".page-1").css({animation:"zoom 1s forwards"});
					break;
				case 2:
					var time=1;
					$('.page-2-img').css({filter:"blur(0)"});
					$('.page-2-text *').each(function(index){
						$('.page-2-text *').eq(index).css({animation:"up "+time+"s forwards"});
						time+=.2;
					});
					break;
				case 3:
					var time=1;
					$('.page-3-img').each(function(index){
						$('.page-3-img').eq(index).css({animation:"down "+time+"s forwards"});
						time+=.4;
					});
					setTimeout(function(){
						$(".page-3-img-title").css({animation:"right 1s forwards"});
					},1000);
					break;
				case 4:
					$(".page-4-list li").css({animation:"up 1s forwards"});
				setTimeout(function() {
					$('.page-4-text').css({
						animation: "up 1s forwards"
					});
				}, 500);
					break;
				case 5:
					$('.page-5').css({
					animation: "right 1s forwards"
				});
				setTimeout(function() {
					$('.info-text').css({
						animation: "right 1s forwards"
					});
				}, 500);
				$('.address').css({
					animation: "up 1s forwards"
				});
					break;	
				default:
					// statements_def
					break;
			}
			
		},
		onLeave: function(index, nextIndex, direction) {
			switch (index) {
				case 1:
					$(".page-1").css({animation:""});
					break;
				case 2:
					$('.page-2-text *').css({animation:""});
					$('.page-2-img').css({filter:"blur(10px)"})
					break;
				case 3:
					$('.page-3-img,.page-3-img-title').css({animation:""});
					break;
				case 4:
					$(".page-4-list li,.page-4-text").css({animation:""});
					break;
				case 5:
					$('.page-5,.info-text,.address').css({animation: ""});
				
					break;
				default:
					// statements_def
					break;
			}
			
		}
	});

	//page-4
	//
	var temp=0;

	
	liWith();
	$(window).resize(function() {
		$(".page-4-list").css({'left':0});
		liWith();
	});

	function liWith() {
		var widowsWith = $(window).width();
		if (widowsWith >= 1148) {
			$(".page-4-list").css({'left':0});
			temp=0;
			$(".page-4-list li").css({width: "370px","margin-right":"2px"});
			$(".on-left").addClass("hidden");
			$(".on-right").addClass("hidden");
		} else {

			$(".page-4-list li").css({width: widowsWith - 40 + "px","margin-right":"20px"});
			$(".on-left").removeClass("hidden");
			$(".on-right").removeClass("hidden");
		}

	}
    //page-4 button
   	//过多li 的时候让button固定位置
   //还要改进
	$(".on-right").click(function(){
		var windowsWith = $(window).width();
		if (temp<=0 && temp>=-windowsWith) {
			temp-=windowsWith-15;
			$(".page-4-list").stop(true).animate({left:temp+"px"},500);
		}
		
	});
	$(".on-left").click(function(){
		var windowsWith = $(window).width();
		if (temp>=-windowsWith*2 && temp<0) {
			temp+=windowsWith-15;
			console.log('到这了');
			$(".page-4-list").stop(true).animate({left:temp+"px"},500);
		}
		
	})
});