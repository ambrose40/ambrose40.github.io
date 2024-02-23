function goindex() {
	window.location.href=window.location.search.substring(1);
}
function fixTitlebar() {
	if(window.innerHeight < 500 || window.innerWidth < 500) {
		var navH = $('#ja-navleftip').outerHeight(false);
		if(navH > 32) {
			$('#ja-navleftip, #ja-navrightip').css({'height': '32px'});
			$('#ja-navleftip img').css({'height': '32px', 'width': '32px'});
			navH = 32;
		}
		$('#ja-navleftip, #ja-navrightip').css({'width': 'auto'});
		if($('.ja-logo').length) {
			$('.ja-logo').css({'padding-top': (5 + navH).toString() + 'px'});
		}
		else {
			$('.ja-pagetitleip, .ja-pagetitleipTI').css({'padding-top': (5 + navH).toString() + 'px'});
		}
	}
};
function topScroll() {
	$(window).scroll(function(){
		if($(window).scrollTop() > 400) {
			$('#ja-pagetop').fadeIn(700);
		}
		else {
			$('#ja-pagetop').fadeOut(700);
		}
	});
	$('#ja-pagetop').click(function(){
		$('body,html').animate({scrollTop:0},700);
		return false;
	});
};
$(document).ready(fixTitlebar);
$(document).ready(topScroll);
