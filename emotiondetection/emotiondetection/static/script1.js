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


let play = document.querySelector('#play');
let track = document.createElement('audio');



Playing_song=false
// All functions
// checking.. the song is playing or not
 function justplay(){

 track.src="{% static '1234.mp3' %}";
 	if(Playing_song==false){
 		track.autoplay = true

 	}else{
 		track.pause();
 	}
 }
 /*


 function justplay(){
 mySound = new Audio(1234.mp3);
console.log("hi");
src()
alert("Found paragraph: ");
mySound.play();
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}




*/
/*==================================================================*/


/*
Play bar and Volume bar
	reference : https://codepen.io/arlinadesign/pen/pvMPWE
*/

$('input[type=range]').on('input', function (e) {
    var min = e.target.min,
        max = e.target.max,
        val = e.target.value;

    $(e.target).css({
        'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
    });
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