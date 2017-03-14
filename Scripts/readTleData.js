
/* Pass in full text of TLE data from text area */
function readTleData(tleData)
{
    var satName = "";
    var line1 = "";
    var line2 = "";

    console.log("Raw TLE: \n" + tleData);

    if( tleData == null )
    {
       throw "TLE input string cannot be null.";
    }
    
    // Remove return character if found and split on linefeed
    var tleLines = tleData.trim().replace("\r","").split("\n");

    console.log("TLE lines: \n" + tleLines);

    // Error: Not enough or to much data
    if(tleLines == null || tleLines.length <= 1 || tleLines.length > 3)
    {
        throw "Invalid or Unexpected TLE data string.";
    }

    // Get Name if 3 lines were provided
    // Get Lines 1 and 2
    if(tleLines.length == 3)
    {
        satName = tleLines[0].trim();
        line1 = tleLines[1].trim();
        line2 = tleLines[2].trim();
    }

    // Get Lines 1 and 2
    if(tleLines.length == 2 )
    {
        line1 = tleLines[0].trim();
        line2 = tleLines[1].trim();
    }

    // SatName is optional
    console.log("SatName: " + satName);
    console.log("Line 1: " + line1);
    console.log("Line 2: " + line2);

    if(line1 == null || line2 == null || line1.length == 0 || line2.length == 0 )
    {
        throw "One or both TLE lines are null or empty.";
    }

    if(line1.length != 69 || line2.length != 69)
    {
        throw "Unexpected Line Length. TLE Data maybe Invalid.";
    }

    tleSatDataObj.setLine1Data = line1;
    tleSatDataObj.setLine2Data = line2;

    console.log(tleSatDataObj.getLine1AsJson);
    console.log(tleSatDataObj.getLine2AsJson);
}