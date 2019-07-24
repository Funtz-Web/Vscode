var arr = [90, 8, 34, 2, 39, 87, 22, 10];

//数组内容进行反序--内置方法
// arr.reverse();
// console.log(arr);


// 使用shift和unshift方法
// var newArr = [] , t;
// var j = arr.length;
// for (var i=0; i<j; i++) {
//     t = arr.shift();
//     newArr.unshift(t);
// }

// console.log(newArr);


//使用push和pop方法
// var newArr = [] , t;
// var j = arr.length;
// for (var i=0; i<j; i++) {
//     t = arr.pop();
//     newArr.push(t);
// }

// console.log(newArr);

//使用for循环直接修改
var newArr = new Array(arr.length);
for(var i=0; i<arr.length; i++) {
    newArr[arr.length-i-1] = arr[i];
}
console.log(newArr);

