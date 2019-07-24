var str1 = "They are students",
    str2 = 'aeiou',
    res = '';

for (var k=0; k<str1.length; k++) {
    if(str2.indexOf(str1[k]) < 0 ) {
        res += str1[k];
    }
}

console.log(res);

console.log(new Date());

var t = new Date();

console.log(t.toLocaleString());