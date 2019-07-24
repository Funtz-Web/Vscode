var mydog = {
    'name': 'wangcai',
    'birth': 1990,
    'age': function(){
        var that = this;
        // var fn = function() {
        //     return new Date().getFullYear() - that.birth;
        // }
        var fn = () => new Date().getFullYear() - this.birth; 
        return fn();
    },
    'foot': 3,
    'color': 'red'
};

// delete mydog.name;

// console.log(mydog.age());
// console.log(mydog);
// console.log('name' in mydog);

for (var i in mydog) {console.log(mydog[i]);}


console.log(2**32);