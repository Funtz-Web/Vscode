// 用递归写法来求1-100的和
function sumNum(num) {
    if(num <= 1) {
        return num;
    }
    return arguments.callee(num - 1) + num;
}

console.log(sumNum(1000));