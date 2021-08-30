// sticky top

$('.main').scroll(function () {
    var screenTop = $(this).scrollTop(),
        topBg = $('.main .top-scroll-bg'),
        init = 306,
        nowTop = init - (screenTop * 1.2);

    //sticky header show/hide			
    if (nowTop < 35) {
        nowTop = 0;
        $('.summary.on').show();
    }
    else {
        $('.summary.on').hide();
    }

    //sticky header background color		
    topBg.css({ 'background': 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1)' + (nowTop) + '%)' });


}); //scroll END








/*==================================================================*/


/*
Play bar and Volume bar
	reference : https://codepen.io/arlinadesign/pen/pvMPWE 
*/

$('#aud_controll_slider').on('input', function (e) {
    var min = e.target.min,
        max = e.target.max,
        val = e.target.value;

    $(e.target).css({
        'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
    });
    audio.volume = e.currentTarget.value / 100;
}).trigger('input');


/*==================================================================*/

// add icons at the playlist
$('.playlist__td--play').html('<i class="far fa-play-circle"></i>');
$('.playlist__td--like').html('<i class="far fa-heart"></i>');
$('.playlist__td--hour').text('3 days ago');
$('.playlist__td--dislike').html('<i class="fas fa-ban"></i>');
$('.playlist__td--more').html('<i class="fas fa-ellipsis-h"></i>');


/*==================================================================*/
// modal(new playlist)

const openModalBtn = document.querySelector('.new-list'),
    clostModalBtn = document.querySelector('.modal__close-btn'),
    modalBg = document.querySelector('.bg-area'),
    modal = document.querySelector('.modal');


openModalBtn.addEventListener('click', function () {
    modalBg.style.display = 'block';
    modal.style.display = 'block';
});

clostModalBtn.addEventListener('click', function () {
    modalBg.style.display = '';
    modal.style.display = '';
});

modalBg.addEventListener('click', function () {
    modalBg.style.display = '';
    modal.style.display = '';
});

$('.reset_btn').on('click', function () {
    audio.currentTime = 0;
    audio.load();
    audio.play();
});

$('.total_timing').html('<p>'+ (Math.floor(audio.duration)/60).toFixed(2) +'</p>');

setInterval(function(){
    $('.total_timing').html('<p>'+ (Math.floor(audio.duration/60)) + ':' + ((Math.floor(audio.duration)).toFixed(0))%60 +'</p>');
    var time_progress = (Math.floor(audio.currentTime)/60).toFixed(2);
    var min = (Math.floor(audio.currentTime/60));
    var sec = ((Math.floor(audio.currentTime)).toFixed(0))%60;
    if(sec < 10)
        sec = '0' + sec;
    $('.current_timing').html('<p>'+ min + ':' + sec +'</p>');
    $('#aud_progress_slider').css({'backgroundSize': (audio.currentTime / audio.duration) * 100  + '% 100%'});  
}, 1000);

document.querySelector('.play_btn').addEventListener('click', function () {
    if(document.querySelector(".play_btn_icon").classList.contains("fa-play-circle")) {
        audio.play();
        $('.play_btn').html('<i class="play_btn_icon play-btns__icon far fa-pause-circle"></i>');
    }
    else if(document.querySelector(".play_btn_icon").classList.contains("fa-pause-circle")) {
        audio.pause();
        $('.play_btn').html('<i class="play_btn_icon play-btns__icon far fa-play-circle"></i>');
    }   
});

$('#aud_progress_slider').on('input', function (e) {
    var min = e.target.min,
        max = e.target.max,
        val = e.target.value;

    $(e.target).css({
        'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
    });
    audio.currentTime = (((val - min) * 100 / (max - min))/100) * audio.duration;
}).trigger('input');

$('.fullscreen_mode').on('click', function () {
    var elem = document.body;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
});