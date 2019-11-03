/*
    rainDrops solution as a function
 */

function rainDrops(num) {
    var str = "";
    if (num % 3 == 0) {
        str += "Pling";
    }
    if (num % 5 == 0) {
        str += "Plang";
    }
    if (num % 7 == 0) {
        str += "Plong";
    }
    if (num % 3 != 0 && num % 5 != 0 && num % 7 != 0) {
        str += String(num);
    }

    return str;
}

// Samples in an array
var numRainDropsArr = [28, 1755, 34, 9, 21, 15, 35];
for (var i = 0; i < numRainDropsArr.length; i++) {
    console.log(rainDrops(numRainDropsArr[i]));
}