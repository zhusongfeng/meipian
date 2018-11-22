//展示阅读全文
$('.mp-article-content-more-wrap').click(function () {
    $('.mp-article-images').show();
    $('.mp-article-texts').show();
    $(this).hide();
});
//关注
$('.mp-author-link-hand').click(function () {
    alert('功能尚未开通，后期完善。敬请你的期待！')
});
//解决音乐自动播放
/*$(document).ready(function () {
    $('html').one('touchstart',function(){
        audio.play();
        $('.mp-article-music-static-hand i').addClass('mp-article-music-static-pause').removeClass('mp-article-music-static-play')
    });
});*/

//控制音乐按钮的显示或隐藏
$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $('.mp-article-music-migu-fixed').show();
        } else {
            $('.mp-article-music-migu-fixed').hide();
        }
    });
});

//控制音乐播放或暂停
 $('.mp-article-music-migu-fixed').click(function () {
     if(audio.paused) {
         $(this).addClass('animation');
         $('.mp-article-music-static-hand i').addClass('mp-article-music-static-pause').removeClass('mp-article-music-static-play');
         audio.play();
     } else {
         $(this).removeClass('animation');
         $('.mp-article-music-static-hand i').addClass('mp-article-music-static-play').removeClass('mp-article-music-static-pause');
         audio.pause();
     }
 });
//输入框
$('.comment-input').focus(function () {
    $('.mp-article-foots').show();
    $('.mp-article-foot').hide();
});
//点击发送
$('.input-send').click(function () {
    $('.mp-article-foot').show();
    $('.mp-article-foots').hide();
});
