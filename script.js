let playPauseImg = document.querySelector("#play-pause");
let songImage = document.querySelector(".song-image");
let volumeRange=document.querySelector("#volume-range")
let index = 1;
let playingSong = false;
let track = document.createElement("audio");

let songs = [
    {
        name: "Arjun Vailly",
        path: "songs/a.mp3",
        image: "songs/img1.jpeg"
    },
    {
        name: "Arjun Vailly",
        path: "songs/b.mp3",
        image: "songs/img2.jpeg"
    },
    {
        name: "Arjun Vailly",
        path: "songs/c.mp3",
        image: "songs/img3.jpeg"
    },
    {
        name: "Arjun Vailly",
        path: "songs/d.mp3",
        image: "songs/img4.jpeg"
    },
    {
        name: "Arjun Vailly",
        path: "songs/e.mp3",
        image: "songs/img5.jpeg"
    }
];

function loadTrack(index) {
    track.src = songs[index].path;


    songImage.style.backgroundImage = `url("${songs[index].image}")`;

}

loadTrack(index);

function playPause() {
    if (playingSong == false) {
        playSong();
    } else {
        pauseSong();
    }
}

function playSong() {
    track.play();
    playingSong = true;
    playPauseImg.src = "pause.svg";
}

function pauseSong() {
    track.pause();
    playingSong = false;
    playPauseImg.src = "play.svg";
}

function nextSong(){
    if(index<songs.length-1){
        index++;
        loadTrack(index)
        playSong()
    }else{
        index=0;
        loadTrack(index)
        playSong()
    }
}
function previousSong(){
    if(index>0){
        index--;
        loadTrack(index)
        playSong()
    }else{
        index=songs.length-1;
        loadTrack(index)
        playSong()
    }
}
function volume(){
    track.volume=volumeRange.value/100
}
