var satList;
function getCoord()
{
	var xhr = new XMLHttpRequest();
	
    // Cross site calls not normally allowed in browser. 
	// Modified web.config on mbcarey.com to allow CORS behavior
    xhr.open("GET", 'Data/tleData.txt', true);
	xhr.send(null);

	xhr.onreadystatechange = function () 
    {
	   if(xhr.readyState === 4 || xhr.readyState === XMLHttpRequest.DONE)
        {
            if(xhr.status === 200 || xhr.status == 0)
            {
				var satData = xhr.responseText;
                satList = satData.trim().replace("\r","").split("\n");
                for (i = 0; i < satList.length; i += 3)
                    {
//                        console.log(satList[i]);
//                        var node = document.createElement("option");
//                        node.value = i;
//                        node.innerHTML = satList[i];
//                        var element = document.getElementById("satSelector");
//                        element.appendChild(node);
                        
                        console.log(satList[i]);
                        var node = document.createElement("a");
                        node.href = "javascript:loadCoord("+i+")";
                        node.className = i;
//                        console.log("loadCoord("+ i +")";
                        node.innerHTML = satList[i];
                        var element = document.getElementById("satSelector");
                        element.appendChild(node);
                        
                        
                    }
            }
			else 
            {
						// Error
			}
        }
    }
}

function loadCoord(id)
{
    var n = Number(id);
    console.log(n);
    if(n >= 0)
        {
            document.getElementById("TleDataId").value = 
                satList[n] + "\r\n" + satList[n+1] + "\r\n" + satList[n+2];
        }
}
