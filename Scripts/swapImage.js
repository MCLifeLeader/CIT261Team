function showMapLinks() {
	document.getElementById("mapSelector").classList.toggle("show");
}

function swapImage(selector, target) {
    
    document.getElementById("imageToSwap").style.backgroundImage = "url('"+selector+"')";
    document.getElementById("imageToSwap").style.width = "1000px";

	localStorage.setItem('mapSelector', selector);
	localStorage.setItem('mapTarget', target);

	var image = document.getElementById(target);
	image.src = selector;
};

function line(){
  
  var c = document.getElementById("imageToSwap");
  var ctx = c.getContext("2d");
    ctx.lineWidth = 1;
  var cr = 0;
  var x=0;
  var frequency = 9;
  var y=vertical;
  var vertical = 58;
  var slope = 15;
  var m = 90/180*Math.PI / frequency;
  
    for(var i=0; i<=360; i+=10){
    ctx.moveTo(x,y);
    x = i;
    y = vertical - Math.sin(cr) * slope;
    cr += m;
    ctx.lineTo(x,y);
    ctx.stroke();
  }
//  right();
}

function right(){
  var redbox = document.getElementById("redbox");
  var interval = setInterval(frame, 20);
  var frequency = 300;
  var move = 0;
   var vertical = 58;
  var slope = 50;
  var cr = 0;
  var m = 90/180*Math.PI / frequency;
  function frame(){
    for(i = 0; i <=1; i++){ 
      redbox.style.top = vertical - Math.sin(cr) * slope + "px";
      redbox.style.left = move + "px";
      cr += m;
      move++;
      if(move>1000){
        clearInterval(interval);
        break;
      }
    }
  }
}

