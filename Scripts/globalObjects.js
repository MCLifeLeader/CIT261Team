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
        revolutionAtEpoch: "", // Revolution number at epoch (revolutions)
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
        var parseData = "";

        this.line1.lineNumber = stringData.substring(0, 1).trim();
        this.line1.satelliteNumber = stringData.substring(2, 7).trim();
        this.line1.classification = stringData.substring(7, 8).trim();
        this.line1.launchYear = stringData.substring(9, 11).trim();
        this.line1.launchNumber = stringData.substring(11, 14).trim();
        this.line1.pieceOfLaunch = stringData.substring(14, 17).trim();
        this.line1.epochYear = stringData.substring(18, 20).trim();
        this.line1.epochDay = stringData.substring(20, 32).trim();
        this.line1.firstTimeDerivative = stringData.substring(33, 43).trim();

        // Second Time Derivative
        parseData = stringData.substring(44, 52).trim();

        if (parseData[0] == "-") {
            parseData = parseData.substring(1, parseData.length).split("-");
            if (parseData[1] != null) {
                this.line1.secondTimeDerivative = -1 * ("." + parseData[0]) * Math.pow(10, parseData[1]);
            }
            else {
                this.line1.secondTimeDerivative = -1 * ("." + parseData[0]) * Math.pow(10, 0);
            }
        }
        else {
            if (parseData.indexOf("-") > 0) {
                parseData = parseData.substring(1, parseData.length).split("-");
                this.line1.secondTimeDerivative = ("." + parseData[0]) * Math.pow(10, parseData[1]);
            }
            else {
                this.line1.secondTimeDerivative = ("." + parseData) * Math.pow(10, 0);
            }
        }

        // BSTAR drag term
        parseData = stringData.substring(53, 61).trim();

        if (parseData[0] == "-") {
            parseData = parseData.substring(1, parseData.length).split("-");
            if (parseData[1] != null) {
                this.line1.bstarDragTerm = -1 * ("." + parseData[0]) * Math.pow(10, parseData[1]);
            }
            else {
                this.line1.bstarDragTerm = -1 * ("." + parseData[0]) * Math.pow(10, 0);
            }
        }
        else {
            if (parseData.indexOf("-") > 0) {
                parseData = parseData.substring(1, parseData.length).split("-");
                this.line1.bstarDragTerm = ("." + parseData[0]) * Math.pow(10, parseData[1]);
            }
            else {
                this.line1.bstarDragTerm = ("." + parseData) * Math.pow(10, 0);
            }
        }

        this.line1.ephemerisType = stringData.substring(62, 63).trim();
        this.line1.elementSetNumber = stringData.substring(64, 68).trim();
        this.line1.checkSum = stringData.substring(68, 69).trim();
    },
    set setLine2Data(stringData) {
        var parseData = "";

        this.line2.lineNumber = stringData.substring(0, 1).trim();
        this.line2.satelliteNumber = stringData.substring(2, 7).trim();
        this.line2.inclination = stringData.substring(8, 16).trim();
        this.line2.rightAscension = stringData.substring(17, 25).trim();

        // Eccentricity
        parseData = stringData.substring(26, 33).trim();

        if (parseData[0] == "-") {
            parseData = parseData.substring(1, parseData.length).split("-");
            if (parseData[1] != null) {
                this.line2.eccentricity = -1 * ("." + parseData[0]) * Math.pow(10, parseData[1]);
            }
            else {
                this.line2.eccentricity = -1 * ("." + parseData[0]) * Math.pow(10, 0);
            }
        }
        else {
            if (parseData.indexOf("-") > 0) {
                parseData = parseData.substring(1, parseData.length).split("-");
                this.line2.eccentricity = ("." + parseData[0]) * Math.pow(10, parseData[1]);
            }
            else {
                this.line2.eccentricity = ("." + parseData) * Math.pow(10, 0);
            }
        }

        this.line2.argumentOfPerigee = stringData.substring(34, 42).trim();
        this.line2.meanAnomaly = stringData.substring(43, 51).trim();
        this.line2.meanMotion = stringData.substring(52, 63).trim();
        this.line2.revolutionAtEpoch = stringData.substring(63, 68).trim();
        this.line2.checkSum = stringData.substring(68, 69).trim();
    }
}
