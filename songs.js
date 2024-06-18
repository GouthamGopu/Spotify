let songs = [{
  id: 1,
  image: "songImages/chaleya.jpeg",
  title: "Chaleya",
  discription: "Anirudh Ravichander",
  link: "assets/songs/Chaleya.mp3"
},
{
  id: 2,
  image: "songImages/chitti.jpeg",
  title: `Chitti (From "Jathi Ratnalu")`,
  discription: "Ram Miriyala",
  link: "assets/songs/Chitti.mp3"
},
{
  id: 3,
  image: "songImages/heeriye.jpeg",
  title: "Heeriye (feat. Arijit Singh)",
  discription: "Jasleen Royal",
  link: "assets/songs/Heeriye.mp3"
},
{
  id: 4,
  image: "songImages/hoynaHoyna.jpeg",
  title: `Hoyna Hoyna (From "Gang Leader")`,
  discription: "Anirudh Ravichander",
  link: "assets/songs/Hoyna-Hoyna.mp3"
},
{
  id: 5,
  image: "songImages/OoAntavaMama.jpeg",
  title: "Oo Antava Oo Oo Antava",
  discription: "Indravathi Chauhan",
  link: "assets/songs/OoAntavaMava.mp3"
},
{
  id: 6,
  image: "songImages/kolavariDi.jpeg",
  title: "Why This Kolaveri Di? - The Soup of Love",
  discription: "Anirudh Ravichander",
  link: "assets/songs/KolaveriDi.mp3"
},
{
  id: 7,
  image: "songImages/satranga.jpeg",
  title: `Satranga (From "ANIMAL")`,
  discription: "Arijit Singh",
  link: "assets/songs/Satranga.mp3"
},
{
  id: 8,
  image: "songImages/nvUnteNaJathaga.jpeg",
  title: "Nuvvunte Naa Jathagaa",
  discription: "A.R. Rahman",
  link: "assets/songs/Nuvvu-Unte-Naa-Jathaga.mp3"
},
{
  id: 9,
  image: "songImages/eluvachiGodaramma.jpeg",
  title: "Elluvochi Godaramma",
  discription: "S. P. Balasubrahmanyam",
  link: "assets/songs/Velluvachi-Godaramma.mp3"
},
{
  id: 10,
  image: "songImages/vachindama.jpeg",
  title: "Vachindamma",
  discription: "Sid Sriram",
  link: "assets/songs/Vachindamma-Vachindamma.mp3"
},
];

let currentSong = new Audio();

let playBar = document.querySelector(".play-bar");
let playBarLeft = document.querySelector(".play-bar-left");
let playPause = document.querySelector(".play-pause");
let play = document.querySelector(".play");
let previous = document.querySelector(".previous");
let next = document.querySelector(".next");
let shuffle = document.querySelector(".shuffle");
let repeat = document.querySelector(".repeat");
let seekBar = document.getElementById('seek-bar');

let yourPlaylisCards = document.querySelector(".your-playlist-cards");
let yourPlaylist = document.querySelector(".your-playlist");
let yourPlaylistShowall = document.querySelector(".your-playlist-show-all");
let presentDuration = document.querySelector(".present-duration");
let totalDuration = document.querySelector(".total-duration");

yourPlaylist.addEventListener("click", () => {
  yourPlaylisCards.innerHTML = ``;
  songs.forEach((song) => {
    addToSong(song.id, song.image, song.title, song.discription);
  });
  addEventListenerToPlayButton();
})

yourPlaylistShowall.addEventListener("click", () => {
  yourPlaylisCards.innerHTML = ``;
  songs.forEach((song) => {
    addToSong(song.id, song.image, song.title, song.discription);
  });
  addEventListenerToPlayButton();
})

let count = 1;
songs.forEach((song) => {
  if (count <= 5) {
    addToSong(song.id, song.image, song.title, song.discription);
  }
  count++
});

function addToSong(id, image, title, discription) {
  yourPlaylisCards.innerHTML += `<div data-product-id="${id}" class="your-playlist-card card flex pointer justify-center">
    <img class="pic" src="${image}">
    <span class="title block">${title}</span>
    <span class="discription block">${discription}</span>
    <img data-product-id="${id}" class="your-playlist-play-button play-button" src="svgs/play.svg" alt="play">
    </div>`;
}


function playMusic(track, image, title, discription, pause = false) {
  currentSong.src = track;
  if (!pause) {
    currentSong.play();
    play.src = "svgs/pause.svg";
  }


  playBarLeft.innerHTML = `<img class="current-song-img" height="64" src="${image}" alt="current-song-img">
  <div class="current-song-info flex">
    <p class="current-song-name">${title}</p>
    <p class="current-song-discription">${discription}</p>
  </div>
  <div class="play-add">
    <img class="current-song-add pointer" height="64" src="svgs/add.svg" alt="current-song-img">
    <div class="play-add-tooltip">Add To Your Liked Songs</div>
  </div>`;

};

function addEventListenerToPlayButton() {
  let playlistPlayButton = document.querySelectorAll(".your-playlist-card");
  playlistPlayButton.forEach((button) => {
    button.addEventListener("click", () => {
      let id = button.dataset.productId;
      songs.forEach(song => {
        if (id == song.id)
          playMusic(song.link, song.image, song.title, song.discription);
      });
    });
  });
}

playPause.addEventListener("click", () => {
  if (currentSong.paused) {
    currentSong.play();
    play.src = "svgs/pause.svg";
  }
  else {
    currentSong.pause();
    play.src = "svgs/play.svg";
  }
});


let randomIndex = Math.floor(Math.random() * songs.length);
playMusic(songs[randomIndex].link, songs[randomIndex].image, songs[randomIndex].title, songs[randomIndex].discription, true)


addEventListenerToPlayButton();




next.addEventListener("click", () => {
  playNextSong();
});

previous.addEventListener("click", () => {
  playPreviousSong();
});

shuffle.addEventListener("click", () => {
  playRandomSong();
});

repeat.addEventListener("click", () => {
  repeatSong();
})


function playPreviousSong(){
  let track = currentSong.src.split('/').pop();
  let currentIndex = songs.findIndex(song => song.link.endsWith(track));
  if (currentIndex === -1) {
    console.log(track);
    return; // Current song not found
  }
  let previousIndex = (currentIndex - 1 + songs.length) % songs.length; // Decrement and wrap around if necessary
  let previousSong = songs[previousIndex];
  playMusic(previousSong.link, previousSong.image, previousSong.title, previousSong.discription);
}

function playNextSong(){
  let track = currentSong.src.split('/').pop();
  let currentIndex = songs.findIndex(song => song.link.endsWith(track));
  if (currentIndex === -1) {
    console.log(track);
    return; // Current song not found
  }
  let nextIndex = (currentIndex + 1) % songs.length; // Increment and wrap around if necessary
  let nextSong = songs[nextIndex];
  playMusic(nextSong.link, nextSong.image, nextSong.title, nextSong.discription);
}

function playRandomSong(){
  let randomIndex = Math.floor(Math.random() * songs.length);
  let randomSong = songs[randomIndex];
  playMusic(randomSong.link, randomSong.image, randomSong.title, randomSong.discription);
}

function repeatSong(){
  let track = currentSong.src.split('/').pop();
  let currentIndex = songs.findIndex(song => song.link.endsWith(track));
  if (currentIndex === -1) {
    console.log(track);
    return;
  }
  playMusic(songs[currentIndex].link, songs[currentIndex].image, songs[currentIndex].title, songs[currentIndex].discription);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

currentSong.addEventListener('loadedmetadata', function () {
  const duration = currentSong.duration;
  totalDuration.textContent = `${formatTime(duration)}`;
  seekBar.max = duration;
});

currentSong.addEventListener('timeupdate', function () {
  const currentTime = currentSong.currentTime;
  presentDuration.textContent = `${formatTime(currentTime)}`;
  seekBar.value = currentTime;
});

seekBar.addEventListener('input', function () {
  currentSong.currentTime = seekBar.value;
});


currentSong.addEventListener('ended', () => {
  play.src = "svgs/play.svg";
  playRandomSong();
});

//sound controls using range input

document.addEventListener("DOMContentLoaded", () => {
  const soundRange = document.getElementById("sound");
  soundRange.value = 100;
  currentSong.volume = soundRange.value / 100;

  soundRange.addEventListener("input", (event) => {
      currentSong.volume = event.target.value / 100;
  });
});


