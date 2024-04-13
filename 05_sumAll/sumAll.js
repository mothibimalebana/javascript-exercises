/**
 * @u - initial value
 * @v - final value
 */
const sumAll = function(u, v) {
    let i, partialSum;
    partialSum = 0;
    if(u > v) {
        for(i = v; i <= u; i++){
            partialSum += i;
        }
    }
    else if(typeof(u) != "number" || typeof(v) != "number"){
        return 'ERROR'
    }
    else if(u < 0 || v < 0) {
        return 'ERROR'
    }
    else{
    for(i = u; i <= v; i++)
        partialSum += i;
    }
    return partialSum
};

// Do not edit below this line
module.exports = sumAll;
