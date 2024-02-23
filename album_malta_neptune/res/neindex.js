document.onkeydown = function(event) {
	if(event.keyCode == 32) {
		if(!metaShowing && typeof fb.getInstance() !== 'undefined') {
			toggleplay();
		}
	}
};
function monitorClips() {
	ac=document.getElementsByClassName('ja-ac')
	Array.from(ac).forEach(function(ac) {
		ac.addEventListener('play',function() {
			paused=false;
			toggleplay();
		});
	});
}
function startClip(target) {
	if(typeof paused !== 'undefined' && !paused) {
		toggleplay();
		$(target).trigger('play');
  		$(target).on('ended',function(){
			toggleplay();
		});
	}
	else {
		$(target).trigger('play');
  		$(target).on('ended',function(){
			jQuery.noop();
		});
	}
}
function stopClip(target) {
	$(target).trigger('pause');
	$(target).prop('currentTime',0);
}
function fixTitlebar() {
	var iconCount = $('#ja-navleft img').length + $('#ja-navright img').length;
	if((window.innerHeight < 500 || window.innerWidth < 500) && iconCount > 0) {
		var navH = $('#ja-navleft').outerHeight(false);
		if(navH > 32) {
			$('#ja-navleft, #ja-navright').css({'height': '32px'});
			$('#ja-navleft img, #ja-navright img').css({'height': '32px', 'width': '32px'});
			navH = 32;
		}
		$('#ja-navleft, #ja-navright').css({'width': 'auto'});
		if($('.ja-logo').length) {
			$('.ja-logo').css({'padding-top': (5 + navH).toString() + 'px'});
		}
		else {
			$('.ja-pagetitle, .ja-pagetitleTI').css({'padding-top': (5 + navH).toString() + 'px'});
		}
	}
	if(typeof initH !== 'undefined') {
		if(window.innerHeight * initH / 100 < window.innerHeight * tbPad / 100 + $('#ja-titledim').innerHeight()) {
			$('#ja-titledim').css({'bottom': 'auto'});
		}
	}
};
function checkFloats() {
	isfFloat = $('#ja-fthumbs > div > div:first-of-type').css('float') == 'left' || $('#ja-fthumbs > div > div:first-of-type').css('float') == 'right';
	if(isfFloat && $(window).width() < $('#ja-fthumbs')[0].scrollWidth) {
		$('#ja-fthumbs > div').css({'width': 'auto', 'background': 'none'});
		$('#ja-fthumbs > div > div:first-of-type').css({'float': 'none', 'margin': '0px auto'});
		$('.ja-fthumbcaption').css({'text-align': 'center', 'padding': '5px 5px 10px'});
		isfFloat = false;
	}
	isFloat = $('#ja-thumbs > div > div:first-of-type').css('float') == 'left' || $('#ja-thumbs > div > div:first-of-type').css('float') == 'right';	
	if(isFloat && $(window).width() < $('#ja-thumbs')[0].scrollWidth) {
		$('#ja-thumbs > div').css({'width': 'auto', 'background': 'none'});
		$('#ja-thumbs > div > div:first-of-type').css({'float': 'none', 'margin': '0px auto'});
		$('.ja-thumbcaption').css({'text-align': 'center', 'padding': '5px 5px 10px'});
		isFloat = false;
	}
};
function checkCaptions() {
	var maxfHeight = 0;
	if($('.ja-fthumbcaption').length && $('.ja-fthumbcaption').css('position') != 'absolute') {
		$('.ja-fthumbcaption').each(function(){
			maxfHeight = $(this).height() > maxfHeight ? $(this).height() : maxfHeight;
		});
		if(maxfHeight > 0) {
			$('.ja-fthumbcaption').css({'min-height': maxfHeight.toString() + 'px'});
			if(!isfFloat) {
				$('#ja-fthumbs > div').css({'margin-bottom': '0px'});
			}
		}
		else {
			$('.ja-fthumbcaption').css({'display': 'none'});
		}
	}
	var maxHeight = 0;
	if($('.ja-thumbcaption').length && $('.ja-thumbcaption').css('position') != 'absolute') {
		$('.ja-thumbcaption').each(function(){
			maxHeight = $(this).height() > maxHeight ? $(this).height() : maxHeight;
		});
		if(maxHeight > 0) {
			$('.ja-thumbcaption').css({'min-height': maxHeight.toString() + 'px'});
			if(!isFloat) {
				$('#ja-thumbs > div').css({'margin-bottom': '0px'});
			}
		}
		else {
			$('.ja-thumbcaption').css({'display': 'none'});
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
function fullscreenDetect() {
	if (typeof screenfull !== 'undefined') {
		screenfull.on('change', () => {
			var fscurrent = $('#ja-fstoggle').attr('src');
			if(screenfull.isFullscreen) {
				$('#ja-fstoggle').attr('src', fscurrent.replace('full', 'exitfull'));
			}
			else {
				$('#ja-fstoggle').attr('src', fscurrent.replace('exitfull', 'full'));
			}
		});
	}
};
function retainPos() {
	var pathName = document.location.pathname;
	pathName = pathName.substring(0, pathName.lastIndexOf("/")) + "/"
	window.onbeforeunload = function () {
		var scrollPosition = $(document).scrollTop();
		sessionStorage.setItem("scrollPosition_" + pathName, scrollPosition.toString());
		if($('#ja-banner').is('[data-parallax]')) {
			sessionStorage.setItem("bannerHeight_" + pathName, $('#ja-banner').css('height'));
		}
	}
};
function toggleplay() {
	if(paused) {
		resetPlaying();
	}
	else {
		resetPaused();
	}
	fb.pause(!paused);
	paused = !paused;
};
function resetPlaying() {
	$('.ja-play').css({'display':'none'});
	$('.ja-pause').css({'display':'inline'});
};
function resetPaused() {
	$('.ja-play').css({'display':'inline'});
	$('.ja-pause').css({'display':'none'});
};
function metaPause() {
	metaShowing=true;
	fb.pause();
	paused = true;
	resetPaused();
}
function metaClose() {
	metaShowing=false;
}
function audioFade() {
	if($('#ja-musicdiv').length) {
		$('#ja-musicdiv').fadeIn(700);
		setTimeout(function(){$('#ja-musicdiv').fadeOut(700)},5000);	
	}
};
function init() {
	fixTitlebar();
	checkFloats();
	checkCaptions();
	topScroll();
	fullscreenDetect();
	retainPos();
	monitorClips();
	audioFade();
	metaShowing=false;
};
$(document).ready(init);
