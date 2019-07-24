
// 封装一个矩形，矩形x,y坐标，width，height，background，文字坐标，文字信息，字体，颜色等

function rect(rectObj) {
    console.log(rectObj.text + ' ' + rectObj.y);
}

var my = {
    x: 19,
    y: 20,
    width: 200,
    heith: 300,
    text: 'laoma'
};

rect(my);