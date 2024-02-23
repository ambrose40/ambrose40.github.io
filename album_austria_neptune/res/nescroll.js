var pathName = document.location.pathname;
pathName = pathName.substring(0, pathName.lastIndexOf("/")) + "/"
if(sessionStorage["scrollPosition_" + pathName]) {
	var folders = $('.ja-fthumbbox').length;
	var images = $('.ja-thumbbox').length;
	if(!folders && !images) {
		$(document).ready(function() {
			$(document).scrollTop(sessionStorage.getItem("scrollPosition_" + pathName));
		});
	}
	else if(folders && !images) {
		$(document).ready(function() {
			$('#ja-fthumbs').justifiedGallery().on('jg.complete', function() {
				$(document).scrollTop(sessionStorage.getItem("scrollPosition_" + pathName));
			});
		});
	}
	else if(!folders && images) {
		$(document).ready(function() {
			$('#ja-thumbs').justifiedGallery().on('jg.complete', function() {
				$(document).scrollTop(sessionStorage.getItem("scrollPosition_" + pathName));
			});
		});
	}
	else {
		$(document).ready(function() {
			$('#ja-fthumbs').justifiedGallery().on('jg.complete', function() {
				$('#ja-thumbs').justifiedGallery().on('jg.complete', function() {
					$(document).scrollTop(sessionStorage.getItem("scrollPosition_" + pathName));
				});
			});
		});
	}
}