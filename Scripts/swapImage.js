function showMapLinks() {
	document.getElementById("mapSelector").classList.toggle("show");
}

function swapImage(selector, target) {

	localStorage.setItem('mapSelector', selector);
	localStorage.setItem('mapTarget', target);

	var image = document.getElementById(target);
	image.src = selector;
};

