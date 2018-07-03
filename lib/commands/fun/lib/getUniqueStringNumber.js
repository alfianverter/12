"use strict";

const riggedNames = [
    "niklas",
    "nobo",
    "nobodyrocks",
    "missy",
    "choco",
    "chocohex",
    "lilla",
    "squas",
    "squaswin",
    "lood",
    "lewd",
    "loods",
    "lewds"
];

const getCharCodeArr = str => str.split("").map(letter => letter.charCodeAt(0));

const getQuersum = int => {
    let result = int;
    let resultStr = String(result);

    while (resultStr.length > 1) {
        result = resultStr
            .split("")
            .map(Number)
            .reduce((a, b) => a + b);
        resultStr = String(result);
    }

    return result;
};

module.exports = str => {
    if (riggedNames.includes(str)) {
        return 10;
    }

    const charCodeQuersum = getQuersum(
        getCharCodeArr(str)
        .map(getQuersum)
        .reduce((a, b) => a + b)
    ); //Get string unique number range 0-9

    return Math.floor(charCodeQuersum / 10 * 12); //number to int between 0 and 10
};
