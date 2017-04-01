function showMapLinks() {
    document.getElementById("mapSelector").classList.toggle("show");
}

function swapImage(selector, target) {

    document.getElementById("altImageToSwap").style.backgroundImage = "url('" + selector + "')";
    document.getElementById("altImageToSwap").style.width = "1000px";

    localStorage.setItem('mapSelector', selector);
    localStorage.setItem('mapTarget', target);

    var image = document.getElementById(target);
    image.src = selector;
};