var t = 'aabbbcdddddffff';

//利用数组的reverse方法来逆序
// var t1 = t.split("").reverse().join("");
// console.log(t1);

//第二种逆序方法
// var m = "";
// for(var i=t.length-1; i>=0; i--) {
//     m += t.slice(i,i+1);
// }

// console.log(m);

var h = {};

for(var i=0; i<t.length; i++) {
    var charStr = t[i];
    if(charStr in h) {
        h[charStr] += 1;
    }else {
        h[charStr] = 1;
    }
}

var max = 0, maxChar;

for (var k in h) {
    if(h[k] > max) {
        max = h[k];
        maxChar = k;
    }
}

console.log(max + " " + maxChar);
