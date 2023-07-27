
const music = document.getElementById('music');

const img = document.querySelector("img");

const play =document.getElementById('play');
const artist =document.getElementById('artist');
const title =document.getElementById('title');
const prev =document.getElementById('prev');
const next =document.getElementById('next');

const songs = [
    {
        name: "p1",
        title: "Ve kamleya",
        artist: "Arijit Singh"
    },
    {
        name: "p2",
        title: "barish",
        artist: "Neha Kakkar"
    },
    {
        name: "p3",
        title: "RamSiyaRam",
        artist: "Sanchet Tandon"
    },
];

let isPlaying = false;
// for play function
const playMusic =  () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};


const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};


play.addEventListener('click', () => {
    // if(isPlaying){
    //     pauseMusic();
    // }else{
    //     playMusic();
    // }

    isPlaying? pauseMusic() : playMusic();
});

// changing the music data

const loadSong = (songs) => {
     title.textContent = songs.title;
     artist.textContent = songs.artist;
     music.src = "music/" + songs.name + ".mp3"; 
     img.src = "images/" + songs.name + ".jpg"; 
};

songIndex = 0;
// loadSong(songs[2]);

const nextSong = ()=> {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const prevSong = ()=> {
    songIndex = (songIndex -1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

