var satList;

function initPageData() {
    var xhr = new XMLHttpRequest();

    // Cross site calls not normally allowed in browser. 
    // Modified web.config on mbcarey.com to allow CORS behavior
    xhr.open("GET", 'Data/tleData.txt', true);
    xhr.send(null);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 || xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200 || xhr.status == 0) {
                var satData = xhr.responseText;
                satList = satData.trim().replace("\r", "").split("\n");
                for (i = 0; i < satList.length; i += 3) {
                    // console.log(satList[i]);
                    var node = document.createElement("a");
                    node.href = "javascript:loadCoord(" + i + ")";
                    node.className = i;
                    node.innerHTML = satList[i].trim();
                    var element = document.getElementById("satSelector");
                    element.appendChild(node);
                }

                postDataLoad();
            }
            else {
                // Error
            }
        }
    }
}

function loadCoord(id) {

    localStorage.setItem('satSelector', id);

    var n = Number(id);
    console.log(n);
    if (n >= 0) {
        document.getElementById("TleDataId").value =
            satList[n].trim() + "\r\n" + satList[n + 1].trim() + "\r\n" + satList[n + 2].trim();
    }
}

//Show links dropdown

function showSatLinks() {
    document.getElementById("satSelector").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function postDataLoad() {
    var satSelectorId = localStorage.getItem('satSelector');
    var mapSelectorImg = localStorage.getItem('mapSelector');
    var mapTargetElement = localStorage.getItem('mapTarget');

    console.log("SatId=" + satSelectorId);
    console.log("ImageName=" + mapSelectorImg);
    console.log("Element=" + mapTargetElement);

    if (satSelectorId != null) {
        loadCoord(satSelectorId);
    }

    if (mapSelectorImg != null && mapTargetElement != null) {
        swapImage(mapSelectorImg, mapTargetElement);
    }
}