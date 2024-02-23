var urlLat = location.search.match(new RegExp("lat" + "=(.*?)($|\&)", "i"))[1];
var urlLong = location.search.match(new RegExp("long" + "=(.*?)($|\&)", "i"))[1];
var urlType = location.search.match(new RegExp("type" + "=(.*?)($|\&)", "i"))[1];
var urlZoom = 1 * location.search.match(new RegExp("zoom" + "=(.*?)($|\&)", "i"))[1];
switch (urlType) {
	case "hybrid":
		var thisType = google.maps.MapTypeId.HYBRID;
	break;
	case "roadmap":
		var thisType = google.maps.MapTypeId.ROADMAP;
	break;
	case "satellite":
		var thisType = google.maps.MapTypeId.SATELLITE;
	break;
	case "terrain":
		var thisType = google.maps.MapTypeId.TERRAIN;
	break;
}
function initializeMap() {
	var myLatlng = new google.maps.LatLng(urlLat,urlLong);
	var mapOptions = {
		zoom: urlZoom,
		center: myLatlng,
		streetViewControl: allowStreetView,
		mapTypeId: thisType
	}
	var map = new google.maps.Map(document.getElementById('ja-mapcanvas'), mapOptions);
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: markertip 
	});
}
window.addEventListener('load', (event) => { initializeMap(); });
function correctWidth() {
	var winH = window.innerHeight;
	var targetH = mapH + mapOtherH + mapMargin;
	if(targetH > winH) {
		newH = mapH - (targetH - winH);
		newW = Math.max(200, Math.floor(mapAR * newH)) + mapOtherW;
		$('#ja-mapcontainer').css({'max-width': newW.toString() + 'px'});
	}
	else {
		$('#ja-mapcontainer').css({'max-width': ''});
	}
	newTargetH = $('#ja-mapcontainer').outerHeight(true) + mapMargin;
	if(winH > newTargetH) {
		newTop = Math.floor((winH - (newTargetH - mapMargin)) / 2);
		$('#ja-mapcontainer').css({'top': newTop.toString() + 'px'});
	}
};
var mapAR = mapW / mapH;
$(document).ready(correctWidth);
$(window).resize(correctWidth);
