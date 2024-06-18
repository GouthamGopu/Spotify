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
    discription:"The gentle sound of some of the greatest voices and instrumentalists in Jazz. Your Jazz dinner soundtrack. ",
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
    discription:"An uplifting yet tasteful dinner playlist with a guaranteed feel good vibe.",
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
    discription:"You bring the ingredients, we bring the flavor. Enjoy la cena...",
    link:"https://open.spotify.com/playlist/37i9dQZF1DX2zAr9vdmFlU"
  }
];

let card = document.querySelector(".cards");
let spotifyPlaylist = document.querySelector(".spotify-playlist");
let showAll = document.querySelector(".show-all");
let count = 0;

// Initial load: show first 5 playlists
playlists.slice(0, 5).forEach(playlist => {
  addToPlaylist(playlist.link, playlist.image, playlist.title, playlist.description);
  document.title="Spotify - Web Player: Music for everyone";
});

spotifyPlaylist.addEventListener("click", () => {
  card.innerHTML = '';
  playlists.forEach(playlist => {
    addToPlaylist(playlist.link, playlist.image, playlist.title, playlist.description);
  });
  document.title = "Spotify - Web Player";
  // Push state to history
  history.pushState({ section: 'spotify-playlist' }, 'Spotify - Web Player', '#spotify-playlist');
  forwardStack.length = 0; // Clear forward stack on new navigation
});

showAll.addEventListener("click", () => {
  card.innerHTML = '';
  playlists.forEach(playlist => {
    addToPlaylist(playlist.link, playlist.image, playlist.title, playlist.description);
  });
  document.title = "Spotify - Web Player";
  // Push state to history
  history.pushState({ section: 'show-all' }, 'Spotify - Web Player', '#show-all');
  forwardStack.length = 0; // Clear forward stack on new navigation
});

const forwardStack = [];

document.getElementById('left-arrow').addEventListener('click', () => {
  if (history.state) {
    forwardStack.push(history.state);
  }
  history.back(); // Navigate back in the history
});

document.getElementById('right-arrow').addEventListener('click', () => {
  if (forwardStack.length > 0) {
    const nextState = forwardStack.pop();
    history.pushState(nextState, 'Spotify - Web Player', `#${nextState.section}`);
    handleStateChange(nextState);
  }
});

function addToPlaylist(link, image, title, description) {
  card.innerHTML += `<a href="${link}" target="_blank">
    <div class="card flex justify-center">
      <img class="pic" src="${image}">
      <span class="title block">${title}</span>
      <span class="description block">${description}</span>
      <img class="play-button" src="svgs/play.svg" alt="play">
    </div>
  </a>`;
}

// Handle popstate event for back navigation
window.addEventListener('popstate', (event) => {
  if (event.state) {
    handleStateChange(event.state);
  } else {
    // Default state (initial load)
    card.innerHTML = '';
    playlists.slice(0, 5).forEach(playlist => {
      addToPlaylist(playlist.link, playlist.image, playlist.title, playlist.description);
    });
  }
});

function handleStateChange(state) {
  switch (state.section) {
    case 'spotify-playlist':
      card.innerHTML = '';
      playlists.forEach(playlist => {
        addToPlaylist(playlist.link, playlist.image, playlist.title, playlist.description);
      });
      break;
    case 'show-all':
      card.innerHTML = '';
      playlists.forEach(playlist => {
        addToPlaylist(playlist.link, playlist.image, playlist.title, playlist.description);
      });
      break;
    default:
      // Handle other cases or default state
      card.innerHTML = '';
      playlists.slice(0, 5).forEach(playlist => {
        addToPlaylist(playlist.link, playlist.image, playlist.title, playlist.description);
      });
      break;
  }
}
