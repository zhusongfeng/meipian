/*
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
/!*$(document).ready(function () {
    $('html').one('touchstart',function(){
        audio.play();
        $('.mp-article-music-static-hand i').addClass('mp-article-music-static-pause').removeClass('mp-article-music-static-play')
    });
});*!/

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
*/

 new Vue({
    el: '#app',
    data: {
        //数据类型
        dataType:null,
        //用户信息
        userInformation:[],
        //文章内容
        articleContent:[],
        //推荐列表
        articleList:[],
        //评论列表
        commentList:[],
        //歌曲信息
        musicInformation:[],
        //歌曲名称
        musicName:'',
        //控制展开阅读全文
        isHidden:true,
        loader:true,
    },
    mounted() {
        //初始化数据
        this.init();

    },
    methods: {
        init: function () {
            let self = this;
            $.post('https://api.songfuniaops.com/article/ajax-detail', {
                token: 'tAOXebNMDdp5Q3YUiLNXwi31PeAIJQsHZBLW6oOe',
                article_id: 116,
            }, function (res) {
                if(res.code == 200){
                    if(res.data.type == 1){
                        self.dataType = res.data.type;
                        self.userInformation = res.data.data;
                        self.articleList = res.data.data.article_list;
                        self.musicInformation = res.data.data.music;
                        self.musicName = res.data.data.music.music;
                        self.commentList = res.data.data.comment;
                        self.articleContent = res.data.data.content;
                    }else if(res.data.type == 3){
                        console.log(1111111,res.data.data.info);
                        self.dataType = res.data.type;
                        self.userInformation = res.data.data.info;
                        self.musicName = res.data.data.info.music;
                        self.commentList = res.data.data.comment;
                        self.articleList = res.data.data.article_list;
                    }


                    setTimeout(function () {
                        self.loader = false;
                    },600);

                    self.$nextTick(function () {
                        if($('#number').val() == 1){
                            tbaNumber(1);
                        }else if($('#number').val() == 2){
                            tbaNumber(2);
                        }else if ($('#number').val() == 3){
                            tbaNumber(3);
                        }
                        self.musicPlay();
                    })

                }
            });
        },
        musicPlay:function () {
            let self = this;
            console.log(111111111,self.musicName)
            let playerTrack = $("#player-track"),
                playPauseButton = $(".mp-article-music-static"),
                curMinutes, curSeconds, durMinutes, durSeconds, playProgress, bTime, nTime = 0,  tFlag = false,
                albumArtworks = ['_1'], trackUrl = [self.musicName],  currIndex = -1;
            //播放音乐
            function playPause() {
                $('.mp-article-music-static-hand i').addClass('mp-article-music-static-pause').removeClass('mp-article-music-static-play');
                setTimeout(function() {
                    if(audio.paused) {
                        audio.play();
                    } else {
                        $('.mp-article-music-static-hand i').addClass('mp-article-music-static-play').removeClass('mp-article-music-static-pause');
                        audio.pause();
                    }
                },300);
            }

            function selectTrack(flag) {
                if( flag == 0 || flag == 1 )
                    ++currIndex;
                else
                    --currIndex;
                if( (currIndex > -1) && (currIndex < albumArtworks.length) ) {
                    audio.src = trackUrl[currIndex];
                    nTime = 0;
                    bTime = new Date();
                    bTime = bTime.getTime();
                    if(flag != 0) {
                        audio.play();
                    }
                } else {
                    if( flag == 0 || flag == 1 )
                        --currIndex;
                    else
                        ++currIndex;
                }
            }

            function initPlayer() {
                audio = new Audio();
                selectTrack(0);
                audio.loop = false;
                //控制音乐播放
                playPauseButton.on('click',playPause);
            }
            initPlayer();
        },
        //点击播放音乐
        broadcast:function () {
            if(audio.paused) {
                $('.mp-article-music-migu-fixed').addClass('animation');
                $('.mp-article-music-static-hand i').addClass('mp-article-music-static-pause').removeClass('mp-article-music-static-play');
                audio.play();
            } else {
                $('.mp-article-music-migu-fixed').removeClass('animation');
                $('.mp-article-music-static-hand i').addClass('mp-article-music-static-play').removeClass('mp-article-music-static-pause');
                audio.pause();
            }
        },
        //展开阅读全文
        loadMore:function () {
            this.isHidden = !this.isHidden;
        }
    },

});

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