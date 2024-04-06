const repeatString = function(string, num) {
    let concatedString = string;

    if(num == 0) 
        concatedString = "";
    else if(num > 0)
    {
        for(i = 1; i < num; i++) {
        concatedString += string;
        }
    }
    else
    {
        return "ERROR"
    }
    return concatedString;
};

repeatString();
// Do not edit below this line
module.exports = repeatString;
