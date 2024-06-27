let playlists=[
  {
    image:"assets/images/1.jpeg",
    title:"Dinner with Friends",
    discription:"The perfect soundtrack to those long nights over dinner",
    link:"https://open.spotify.com/playlist/37i9dQZF1DX4xuWVBs4FgJ"
  },
  {
    image:"assets/images/2.jpeg",
    title:"Dinner Jazz",
    discription:"The gentle sound of some of the greatest voices. ",
    link:"https://open.spotify.com/playlist/37i9dQZF1DWWKeNBqaIy5U"
  },
  {
    image:"assets/images/3.jpeg",
    title:"Dinner Lounge",
    discription:"Soft electronic music for your dinner.",
    link:"https://open.spotify.com/playlist/37i9dQZF1DX6kz6Kli3wib"
  },
  {
    image:"assets/images/4.jpeg",
    title:"Feel Good Dinner",
    discription:"An uplifting yet tasteful dinner playlist.",
    link:"https://open.spotify.com/playlist/37i9dQZF1DXbm6HfkbMtFZ"
  },
  {
    image:"assets/images/5.jpeg",
    title:"Bossa Nova Dinner",
    discription:"Soundtrack your cozy dinner with bossa nova jazz.",
    link:"https://open.spotify.com/playlist/37i9dQZF1DWVleyMkaelTd"
  },
  {
    image:"assets/images/6.jpeg",
    title:"Kitchen Swagger",
    discription:"Gettin' figgy with it, bana-na-na-nanana",
    link:"https://open.spotify.com/playlist/37i9dQZF1DX2FsCLsHeMrM"
  },
  {
    image:"assets/images/7.jpeg",
    title:"Soul Cuisine",
    discription:"Perfect music for perfect food.",
    link:"https://open.spotify.com/playlist/37i9dQZF1DWZheHO7xislj"
  },
  {
    image:"assets/images/8.jpeg",
    title:"Dinner & Chill",
    discription:"Gentle Indie songs for a relaxed dinner.",
    link:"https://open.spotify.com/playlist/37i9dQZF1DX319l60u7Jxg"
  },
  {
    image:"assets/images/9.jpeg",
    title:"Beer & Wings",
    discription:"Cold beer. Hot wings. Great rock. ",
    link:"https://open.spotify.com/playlist/37i9dQZF1DXauOWFg72pbl"
  },
  {
    image:"assets/images/10.jpeg",
    title:"Latin Dinner",
    discription:"You bring the ingredients, we bring the flavor.",
    link:"https://open.spotify.com/playlist/37i9dQZF1DX2zAr9vdmFlU"
  }
];
let card=document.querySelector(".spotify-playlist-cards");
let spotifyPlaylist=document.querySelector(".spotify-playlist");
let showAll=document.querySelector(".spotify-playlist-show-all");

playlists.slice(0,5).forEach((playlist)=>{
    addToPlaylist(playlist.image,playlist.title,playlist.discription);
});

spotifyPlaylist.addEventListener("click",()=>{
  card.innerHTML=``;
  playlists.forEach((playlist)=>{
      addToPlaylist(playlist.image,playlist.title,playlist.discription);
  });
});

showAll.addEventListener("click",()=>{
  card.innerHTML=``;
  playlists.forEach((playlist)=>{
      addToPlaylist(playlist.image,playlist.title,playlist.discription);
  });
});

function addToPlaylist(image,title,discription){
  card.innerHTML+=`
    <div class="card flex justify-center">
    <img class="pic" src="${image}">
    <span class="title block">${title}</span>
    <span class="discription block">${discription}</span>
    <img class="play-button" src="svgs/song-play.svg" alt="play">
    </div>`
}
