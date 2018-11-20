$(function() {
    var playerTrack = $("#player-track"),  playPauseButton = $("#play-pause-button"),    curMinutes, curSeconds, durMinutes, durSeconds, playProgress, bTime, nTime = 0,  tFlag = false,  albumArtworks = ['_1'], trackUrl = ['mp3/1.mp3','mp3/2.mp3'],  currIndex = -1;
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
    /*$(document).ready(function () {
        setTimeout(function () {
            audio.play();
        },1000 )
    })*/
});