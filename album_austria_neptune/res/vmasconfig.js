if(window.innerWidth >= 370 && window.innerHeight >= 370) {
	$('.ja-vmas').masonry({
	itemSelector: '.ja-vmas > div',
		columnWidth: 360,
		gutter: 8,
		fitWidth: true
	});
}
else {
	$('.ja-vmas > div').css({'margin': '5px auto', 'width' : 'auto', 'max-width' : '360px'});
}