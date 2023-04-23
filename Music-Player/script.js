const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progess = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getAnimations('cover');

const songs = ['hey', 'summer', 'ukulele'];

// keep track of song
let songIndex = 2;

// initial load song details into DOM
loadSong(songs[songIndex]);

function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.mp3`;
}

// play  song
function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

// pause  song
function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

// prev song
function prevSong() {
    songIndex--;
    if (songIndex < 0) songIndex = songs.length - 1;

    loadSong(songs[songIndex]);
    playSong();
}

// next song
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) songIndex = 0;

    loadSong(songs[songIndex]);
    playSong();
}

// progress update
function updateProgress(e) {
    // get duration , currenttime of audio
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progess.style.width = `${progressPercent}%`;
}

// set progress bar
function setProgress(e) {
    console.log(this);
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}
// event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

// change song

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// time/ song update
audio.addEventListener('timeupdate', updateProgress);

// click on porogress bar
progressContainer.addEventListener('click', setProgress);

// song end
audio.addEventListener('ended', nextSong);
