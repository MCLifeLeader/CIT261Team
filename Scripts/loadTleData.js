/*

This function pulls the TLE data from www.tle.info
and saves it in local storage under 'tleData'.

*/

function loadTleData() {
	// Modifying a request option to use a proxy to bypass same-origin policy
	$.ajaxPrefilter(function (options) {
		if (options.crossDomain && jQuery.support.cors) {
			var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
			options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
		}
	});
	// Making the request, the proxy returns the file we are looking for
	$.get('http://www.tle.info/data/amateur.txt',
		function (response) {
			// Store the response in local storage
			localStorage.setItem('tleData', response);
			var localTleData = localStorage.getItem('tleData');
		});
}



/* Old code that that doesn't work, just for the record.

-------------------------Using jQuery and a different proxy--------------------------------
var ContentLocationInDOM = "#someNode > .childNode";

$(document).ready(loadTleData);
function loadTleData()
{
	//var QueryURL = "http://anyorigin.com/get?url=www.n2yo.com/satellite/?s=" + objID + "&callback=?";
	QueryURL = "http://anyorigin.com/get?url=www.n2yo.com/satellite/?s=25544&callback=?";
	$.getJSON(QueryURL, function(data){
		if (data && data != null && typeof data == "object" && data.contents && data.contents != null && typeof data.contents == "string")
		{
            if (data.length > 0)
            {
               if (ContentLocationInDOM && ContentLocationInDOM != null && ContentLocationInDOM != "null")
               {
                  $('#queryResultContainer').html($(ContentLocationInDOM, data));
               }
               else
               {
                  $('#queryResultContainer').html(data);
               }
            }
         }
	});
}
//<div id="queryResultContainer"/>


----------Using XMLHttpRequest (no-go because of the Same Origin Policy)-------------------
function loadTleData () {
	
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

//----------------------------------JSONP--------------------------------------------------
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
  
	}

	// get the weather data for Aldeburgh, GB via JSONP
	var url = 'http://www.n2yo.com/satellite/?s=25544';

	requestJSONP(url);
*/