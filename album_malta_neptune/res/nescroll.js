var pathName = document.location.pathname;
pathName = pathName.substring(0, pathName.lastIndexOf("/")) + "/"
if(sessionStorage["scrollPosition_" + pathName]) {
	var folders = $('.ja-fthumbbox').length;
	var images = $('.ja-thumbbox').length;
	if(!folders && !images) {
		$(document).ready(function() {
			restoreScroll();
		});
	}
	else if(folders && !images) {
		$(document).ready(function() {
			$('#ja-fthumbs').justifiedGallery().on('jg.complete', function() {
				restoreScroll();
			});
		});
	}
	else if(!folders && images) {
		$(document).ready(function() {
			$('#ja-thumbs').justifiedGallery().on('jg.complete', function() {
				restoreScroll();
			});
		});
	}
	else {
		$(document).ready(function() {
			$('#ja-fthumbs').justifiedGallery().on('jg.complete', function() {
				$('#ja-thumbs').justifiedGallery().on('jg.complete', function() {
					restoreScroll();
				});
			});
		});
	}
}
function restoreScroll() {
	if(sessionStorage["bannerHeight_" + pathName]) {
		$('#ja-banner').css({'height':sessionStorage.getItem("bannerHeight_" + pathName)});
	}
	$(document).scrollTop(sessionStorage.getItem("scrollPosition_" + pathName));
};