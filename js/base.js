$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['home', 'about_me', 'experience', 'my_project', 'comment_me'],
		menu: '.menu_nav',
		afterLoad: function(anchorLink,index){
			if(index > 1){
				$('.menu_nav').fadeIn(function(){
					$('.menu_nav').animate({bottom:'5px'},1000,'easeOutExpo');
				});
				
				$('.menu_nav_bg').fadeIn(function(){
					$('.menu_nav_bg').animate({bottom:'0px'},1000,'easeOutExpo');
				});
			}else{
				$('.menu_nav').animate({
					bottom:'-80px'
				},800,'easeOutExpo',function(){
					$('.menu_nav').fadeOut(200);
				});
				
				$('.menu_nav_bg').animate({
					bottom:'-60px'
				},800,'easeOutExpo',function(){
					$('.menu_nav_bg').fadeOut(200);
				});
			}
		},
	});
	$("#music_audio").jPlayer('load');
	$("#music_audio").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3: "../../media/Five Hundred Miles - Justin Timberlake&Carey Mulligan&Stark Sands.mp3",
				autoPlay: true
			}).jPlayer("play");
		},
		ended: function () {
		    $(this).jPlayer("play");
		},
		swfPath: "../js/jplayer/jquery.jplayer.swf",
   		supplied: "mp3"
	});
	
	$('.music_control_play').click(function(){
		$('#music_audio').jPlayer('play');
		$(this).css('display','none');
		$('.music_control_pause').css('display','block');
	});
	$('.music_control_pause').click(function(){
		$('#music_audio').jPlayer('pause');
		$(this).css('display','none');
		$('.music_control_play').css('display','block');
	});
});