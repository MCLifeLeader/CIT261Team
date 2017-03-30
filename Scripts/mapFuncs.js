/* Map Functions */

function changeMap(id) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var uriImg = '<img src="images/"+id+".png" alt="mapImage">'
            // document.getElementById("map").innerHTML = uriImg;
            var parent = document.getElementById("map");
            var child = document.getElementById(id);
            // parent.removeChild(child);
            parent.appendChild(child);
            document.getElementById(id).innerHTML = uriImg;
        }
    }
    request.open("GET", 'images/' + id + ".png", true);
    request.send();
}