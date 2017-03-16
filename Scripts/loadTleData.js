/* Work in progress (Sergei)

Attempting to write a function that loads TLE data from n2yo.com onto our website.
For now, it just returns the data for the ISS as a string.

Additional functionality for the future:
- pass the ID of the object we're tracking 
	(Make them match the urls on n2yo.com?: 
	 http://www.n2yo.com/satellite/?s=25544 - ISS
	 http://www.n2yo.com/satellite/?s=42053 - DRAGON CRS-10 (Space X) etc.)
- load the data into a JSON file?
*/

function loadTleData () {
	/* 
	var request = new XMLHttpRequest();
	request.open('GET', 'http://www.n2yo.com/satellite/?s=25544', true);
	request.responseType = 'document';
	request.send();
	request.onload = function(e) {  
		var n2yoDoc = e.target.responseXML;
		// n2yo.com stores tle data in a <div id="tle">
		var tle = n2yoDoc.getElementById('tle').innerHTML;
		alert(tle);
	}
	//return tle;
	*/
// Figured out that cross-domain XMLHttpRequest doesn't work no matter what.
// Experimenting with JSONP. Reworking an example found online.
	function requestJSONP(url) {
	// create script with passed in URL
		var script = document.createElement('script');
		script.src = url;
  
	// after the script is loaded (and executed), remove it
		script.onload = function () {
			this.remove();
		};
  
	// insert script tag into the DOM (append to <head>)
	var head = document.getElementsByTagName('head')[0];
		head.insertBefore(script);
	}

	function processData(data) {
	// do something with data
  
	// for example, print out the temperature
		var channel = data.query.results.channel;
		document.querySelector('.weather').innerHTML = 
			'The temperature in ' + 
			channel.location.city + ', ' +
			channel.location.country + ' is ' +
			channel.item.condition.temp + '&deg; ' + 
			channel.units.temperature;
	}

	// get the weather data for Aldeburgh, GB via JSONP
	var url = 'http://www.n2yo.com/satellite/?s=25544';

	requestJSONP(url);
}