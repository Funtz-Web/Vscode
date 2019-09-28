var a1 = 19,
    a2 = 20,
    a3 = 'sss',
    b1 = { name: 'laoma' };

a1 = f1(a1, a2);

function f1(a, b) {
    var t = 0,
        m = 10;
    for (var i = 0; i < a; i++) {
        console.log(i);
    }
    function f2() {
        console.log(f2);
    }
    return a + b;
}

console.log(a1);  