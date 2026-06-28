const songImage = document.getElementById("songimage");
const songName = document.getElementById("songname");
const artistName = document.getElementById("artistname");

const SongSlider = document.getElementById("slidersong");

const PlayButton = document.getElementById("playsong");
const PauseButton = document.getElementById("pausesong");
const PreviousButton = document.getElementById("previoussong");
const NextButton = document.getElementById("nextsong");

const loopButton = document.getElementById("loopsong");
const ShuffleButton = document.getElementById("shufflesong");

const songs = [
    {
        image:"/IMG/dancing on black.gif",
        name:"Spooky Scary Skeletons",
        artist:"Andrew Maurice Gold",
        audio:"/Music/spooky scary.mp3"
    },

    {
        image:"/IMG/dance for me.gif",
        name:"Necromancin Dancin",
        artist:"Bear Ghost",
        audio:"/Music/Bear Ghost Necromancin Dancin.m4a"
    },

    {
        image:"/IMG/dancing colorful skelet.gif",
        name:"DOOT",
        artist:"dootdoot Band E1M1 DOOT",
        audio:"/Music/dootdoot Band E1M1 DOOT.m4a"
    },

    {
        image:"/IMG/pole skeledancing.webp",
        name:"Monster Mash",
        artist:"Bobby Pickett",
        audio:"/Music/Bobby Pickett - Monster Mash.m4a"
    },

    {
        image:"/IMG/skelezilly.gif",
        name:"Addam's Family song",
        artist:"Vic Mizzy",
        audio:"/Music/The Addams Family Theme song.m4a"
    },

    {
        image:"/IMG/thinking skelet.webp",
        name:"Haunted Harmonies",
        artist:"Timeless Music",
        audio:"/Music/Haunted Harmonies.opus"
    },

    {
        image:"/IMG/trapped in a chest.gif",
        name:"The Boys Are Back in Town (to kill you)",
        artist:"Jerry Terry",
        audio:"/Music/The Boys Are Back in Town (to kill you).m4a"
    },

    {
        image:"/IMG/you lazy skelet.gif",
        name:"Kiss Me (Kill Me)",
        artist:"Jerry Terry",
        audio:"/Music/Kiss Me (Kill Me).m4a"
    },

    {
        image:"/IMG/hmm skull.webp",
        name:"Super Ghostbusters - I am the rat man",
        artist:"Joel Vargskelethor",
        audio:"/Music/I AM THE RAT MAN.m4a"
    },
];

const audio = document.createElement("audio");
let currentSongIndex = 0;

updateSong();

PreviousButton.addEventListener("click", function(){
   if (currentSongIndex == 0){
    return;
   }
   currentSongIndex--;
   updateSong();
   audio.play();
});

NextButton.addEventListener("click", function(){
   if (currentSongIndex == songs.length - 1){
    return;
   }
   currentSongIndex++;
   updateSong();
   audio.play();
});


PlayButton.addEventListener("click", function(){
    audio.play();
})

PauseButton.addEventListener("click", function(){
    audio.pause();
})

loopButton.addEventListener("click", function(){
    HTMLMediaElement.loop = true;
})

ShuffleButton.addEventListener("click", function(){
    audio.shuffle();
})

function updateSong() {
    const song = songs[currentSongIndex];
    songImage.src = song.image;
    songName.innerText = song.name;
    artistName.innerText = song.artist;

    audio.src = song.audio;

    audio.onloadedmetadata = function (){
    SongSlider.value = 0;
    SongSlider.max = audio.duration;

    }
    
};

SongSlider.addEventListener("change", function(){
    audio.currentTime = SongSlider.value;
});

function moveSlider(){
    SongSlider.value = audio.currentTime;
};

const SongTime = audio.currentTime;

function CurrentTime(){
    
    console.log(SongSlider.value);
    console.log(SongSlider.max);
    console.log(1%SongSlider.max);


    if (SongSlider.value > SongSlider.max-1%SongSlider.max && currentSongIndex != songs.length){
    console.log("song ended!"); 
    currentSongIndex++;
    updateSong();
    audio.play();
    }
    
    return;
}

SongSlider.addEventListener("change", function(){
    console.log(SongSlider.value);
    console.log(SongSlider.max);
    console.log(1%SongSlider.max);


    if (SongSlider.value > SongSlider.max-1%SongSlider.max && currentSongIndex != songs.length){
    console.log("song ended!"); 
    currentSongIndex++;
    updateSong();
    audio.play();
    }
    return;
});

setInterval(moveSlider, 1000);
setInterval(CurrentTime, 1000);



