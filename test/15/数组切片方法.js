var t = [0,1,2,3,4,5,6];

console.log('t = ' + t);

// var m = t.slice(3,4);
var m = t.slice(t.length-4);

console.log('m = ' + m);
console.log(typeof(m)); 


t.splice(3,0,'name');
console.log(t);

t.splice(3,1,"tina");
console.log(t);