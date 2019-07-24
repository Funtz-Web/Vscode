function max() {
    if(arguments.length<=0) {return NaN;}
    var max = arguments[0];
    for(var i=1; i<arguments.length; i++) {
        if(arguments[i]>max) {
            max = arguments[i];
        }
    }
    return max;
}

var t = max(9, 10, 11, 14, 38, 90);
console.log(t); 

