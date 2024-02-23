var fb = self.fb || {};
fb.fbOptions = {
global: {
	showMagCursor:true,
	footerGap:5,
	pageScroll:false,
	shadowType:'none',
	shadowSize:0,
	outerBorder:0,
	innerBorder:0,
	innerBorderRadius:0,
	boxCornerRadius:3,
	enableImageResize:false,
	enableDragMove:false,
	titleAsCaption:false,
	fetchVideoInfo:false,
	padding:20,
	minBoxWidth:300,
	minHeight:10,
	maxWidth:1920,
	maxHeight:1080,
	overlayOpacity:1.0,
	resizeTime:0.7,
	transitionTime:0.6,
	imageTransition:'crossfade',
	animationTime:0.2,
	startAt:`start`,
	endAt:`start`,
	boxColor:'#195119',
	textColor:'#eefcee',
	arrowColor:'#eefcee',
	overlayColor:'#000000',
	outerBorderColor:'#eeeeee',
	showItemNumber:false,
	showClose:false,
	navType:'overlay',
	navOverlayWidth:45,
	autoFitSpace:15,
	doSlideshow:true,
	slideInterval:5,
	showPlayPause:false,
	startPaused:true,
	afterSlideshow:'loop',
	afterBoxEnd:resetPaused,
	autoPlayVideo:false,
	addVideoThumb:false,
	language:'zz'
},
mobile: {
	padding:2,
	minBoxWidth:140,
	showItemNumber:false,
	strictCentering:false,
	imageTransition:'slide',
	preloadLimit:1,
	autoFitSpace:5,
	enableImageResize:true
},
type: {
	pdf: {
		mobile: {newWindow:true}
	}
}
};
fb.data.strings = ["","","","","","","","Image %1 of %2","Image %1 of %2","Image %1 of %2","","","","","","",""];