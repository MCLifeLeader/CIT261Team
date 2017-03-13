/* Global Objects and Variables */

// TLE Satellite Data Object from TLE Parsed string Data
var tleSatDataObj = {
    satName: "Undefined",
    line1: {
        lineNumber: "",
        satelliteNumber: "",
        classification: "",
        launchYear: "",
        launchNumber: "",
        pieceOfLaunch: "",
        epochYear: "",
        epochDay: "",
        firstTimeDerivative: "",
        secondTimeDerivative: "", // Decimal assumed
        bstarDragTerm: "",
        ephemerisType: "",
        elementSetNumber: "",
        checkSum: "",
    },
    line2: {
        lineNumber: "",
        satelliteNumber: "",
        inclination: "", // Degrees
        rightAscension: "", // Degrees
        eccentricity: "", // Decimal assumed
        argumentOfPerigee: "", // Degrees
        meanAnomaly: "", // Degrees
        meanMotion: "", // Revolutions per Day
        checkSum: "",
    },
    // Demo get accessor
    get getLine1AsJson() {
        return JSON.stringify(this.line1);
    },
    // Demo get accessor
    get getLine2AsJson() {
        return JSON.stringify(this.line2);
    },
    set setLine1Data(stringData) {
        this.line1.lineNumber = stringData[0];
    },
    set setLine2Data(stringData) {
        this.line2.lineNumber = stringData[0];
    }
}
