var a = [1,2,11,3,89, "sldjlkfj",true,undefined];

// 遍历数组第一种方法
// console.log('length = ' + a.length);

// for (var i=0;i<a.length;i++) {
//     console.log(a[i])
// }

// 遍历数组的第二种方式

// for (var i in a) {
//     if (!a.hasOwnProperty(i)) {
//         continue;
//     }
//     console.log(i);
// }


// a.push('nama');
// console.log('length = ' + a.length);
// a.shift();
// console.log('length = ' + a.length);
// a.unshift('llalala');
// console.log('length = ' + a.length);
// console.log(a);

// console.log(a.reverse());

a.sort();

console.log(a);


// a.sort(function(x,y) {return y - x;});



a.sort((x, y) => x - y);

console.log(a);


var arr = a.concat(['ss',true,false,[1,2,3]]);

console.log(a);
// console.log(arr);

var newArr = a.join("");
var myArr = a.toString();
console.log(newArr);
console.log(myArr);