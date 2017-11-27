// Count the number of array values that are greater than the value of Y
var arrayList = [1, 2, 3, 4, 7, 8, 4, 3, 8, 9, 3];
var y = 7;
var count = 0;
for (var i = 0; i < arrayList.length; i++) {
    if (arrayList[i] > y) {
        count++;
    }
}
console.log("the array values that are greater than the vaue of Y are: " + count);