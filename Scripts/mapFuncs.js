/* Map Functions */

function changeMap(id) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
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

function line() {

    var c = document.getElementById("altImageToSwap");
    var ctx = c.getContext("2d");
    ctx.lineWidth = 1;
    var cr = 0;
    var x = 0;
    var frequency = 9;
    var y = vertical;
    var vertical = 58;
    var slope = 15;
    var m = 90 / 180 * Math.PI / frequency;

    for (var i = 0; i <= 360; i += 10) {
        ctx.moveTo(x, y);
        x = i;
        y = vertical - Math.sin(cr) * slope;
        cr += m;
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    //right();
}

// See UpdateSatPosition() in index.html
// function right() {
//     var redbox = document.getElementById("redbox");
//     var interval = setInterval(frame, 20);
//     var frequency = 300;
//     var move = 0;
//     var vertical = 58;
//     var slope = 50;
//     var cr = 0;
//     var m = 90 / 180 * Math.PI / frequency;

//     function frame() {
//         for (i = 0; i <= 1; i++) {
//             redbox.style.top = vertical - Math.sin(cr) * slope + "px";
//             redbox.style.left = move + "px";
//             cr += m;
//             move++;
//             if (move > 1000) {
//                 clearInterval(interval);
//                 break;
//             }
//         }
//     }
// }