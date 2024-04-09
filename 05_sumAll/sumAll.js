/**
 * @u - initial value
 * @v - final value
 */
const sumAll = function(u, v) {
    let i, partialSum;
    partialSum = 0;

    for(i = u; i <= 4; i++)
        partialSum += i;

    return partialSum
};

// Do not edit below this line
module.exports = sumAll;
