var a = 9, 
    b = 0,
    c = { age: 9},
    d;

b = a;
b = 19;

console.log(a);
console.log(b);

d = c;
d.age = 22;

console.log(c.age);
console.log(d.age);