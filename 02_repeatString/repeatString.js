const repeatString = function(string, num) {
    let concatedString = string;

    for(i = 1; i < num; i++) {
        concatedString += string;
    }

    return concatedString
};

repeatString();
// Do not edit below this line
module.exports = repeatString;
