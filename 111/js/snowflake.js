var num;
function tbaNumber(index) {
    num = index;
    animationEffect(num);
}

//切换背景
/*
$(".switch-button span").click(function () {
    num = $(this).index()+1;
    animationEffect(num);
})
*/

//雪花飘落动画效果
const NUMBER_OF_LEAVES = 20;
//初始化
function init() {
    if(num > 0){
        $("#leafContainer > *").remove();
        var container = document.getElementById('leafContainer');
        for (var i = 0; i < NUMBER_OF_LEAVES; i++) {
            container.appendChild(createALeaf());
        }
    }

}
//下落的数量
function randomInteger(low, high) {
    return low + Math.floor(Math.random() * (high - low));
}

function randomFloat(low, high) {
    return low + Math.random() * (high - low);
}
//大小
function pixelValue(value) {
    return value + 'px';
}
//时长
function durationValue(value) {
    return value + 's';
}
//创建动画元素
function createALeaf() {

    var number;
    //t太阳花
    if(num === 1){
        imgUrl = 'image/1/img';
        number = 7;

    }else if(num === 2){
        //花瓣
        imgUrl = 'image/2/petal';
        number = 7;

    }else if(num === 3){
        //蒲公英
        imgUrl = 'image/3/catkin';
        number = 5;

    }else {
        return
    }


    var leafDiv = document.createElement('div');
    var image = document.createElement('img');
    if (imgUrl !=undefined && num > 0){
        image.src = imgUrl + randomInteger(1, number) + '.png';
    }

    leafDiv.style.right = pixelValue(randomInteger(0, 800));
    leafDiv.style.top = "-50px";
    var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip';
    leafDiv.style.webkitAnimationName = 'fade, drop';
    image.style.webkitAnimationName = spinAnimationName;
    var fadeAndDropDuration = durationValue(randomFloat(5, 11));
    var spinDuration = durationValue(randomFloat(1, 3));
    leafDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;
    var leafDelay = durationValue(randomFloat(0, 5));
    leafDiv.style.webkitAnimationDelay = leafDelay + ', ' + leafDelay;
    image.style.webkitAnimationDuration = spinDuration;
    leafDiv.appendChild(image);
    return leafDiv;



}
window.addEventListener('load', init, false);
function animationEffect(item) {
    if(item ===1){
        $('#container').css('background','url(image/1/bg.jpg) no-repeat');
        $('#container').css('background-size','cover');
        $(".article").css({ opacity: 0.8 }); // 所有浏览器有效
        $(".preview").css({ opacity: 0.8 }); // 所有浏览器有效
        this.init();

    }else if (item ===2){
        $('#container').css('background','url(image/2/bg.jpg) no-repeat');
        $('#container').css('background-size','cover');
        $(".article").css({ opacity: 0.8 }); // 所有浏览器有效
        $(".preview").css({ opacity: 0.8 }); // 所有浏览器有效
        this.init();
    }else if (item ===3){
        console.log(1111)
        $('#container').css('background','url(image/3/bg.png) no-repeat');
        $('#container').css('background-size','cover');
        $(".article").css({ opacity: 0.8 }); // 所有浏览器有效
        $(".preview").css({ opacity: 0.8 }); // 所有浏览器有效
        this.init();
    }else if (item ===4){
        $(".article").css({ opacity: 1}); // 所有浏览器有效
        $(".preview").css({ opacity: 1}); // 所有浏览器有效
    }

}

