//数组去重的第一种方法
var t = [90, 8, 34, 2, 2, 39, 87, 22, 10];
var arr = [];
for(var i=0; i<t.length; i++) {
    if(arr.indexOf(t[i]) == -1) {
        arr.push(t[i]);
    }else{
        continue;
    }
}
console.log(arr);


//数组去重的第二种方法

var t = [90, 8, 34, 2, 2, 39, 87, 22, 10];

var h = {};
for(var k in t) {
    var str = t[k].toString();
    h[str] = t[k];
}
var arr = [];
for(var m in h) {
    arr.push(h[m]);
}

console.log(arr);