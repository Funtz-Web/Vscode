function React() {
    if(arguments.length == 1) {
        this.width = arguments[0];
        this.height = arguments[0];
    }
    if(arguments.length > 1) {
        this.width = arguments[0];
        this.height = arguments[1];
    }
    this.toString = function() {
        // console.log('width:' + this.width + ' height:' + this.height);
        return 'width:' + this.width + ' height:' + this.height;
    }
}

var r1 = new React(10);

console.log(r1.toString());

var r2 = new React(10,9);

console.log(r2.toString());