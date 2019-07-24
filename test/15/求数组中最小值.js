var t = [90, 8, 34, 2, 39, 87, 22, 10];

var min = t[0], minIndex = 0;

for(var i=0; i<t.length; i++) {
    if (t[i]<min) {
        min = t[i];
        minIndex = i;
    }
}

console.log(min);
console.log(minIndex);

