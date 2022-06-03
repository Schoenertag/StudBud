

//add event listener listening for document ready (onload)


let playlistCovers = document.getElementsByClassName('playlistCover');
const playlistNameArray = document.getElementsByClassName("playlistName");
const audio = document.getElementById("audio");
const statusIcon = document.getElementById("statusIcon");


const songIndex = 0;


class playlist {
  constructor(playlistName, tracklist) {
    this.playlistName = playlistName;
    this.tracklist = tracklist;
  }
}

let hogwartsPlaylist = new playlist("Hogwarts Ambience", ["Hedwig's Theme.mp3"]);
let bardcorePlaylist = new playlist("Bardcore", ["Never Gonna Give You Up (Medieval Cover).mp3"]);
let playlists = [hogwartsPlaylist, bardcorePlaylist];


/* 
let playlists = [
  {
    playlistName = ,
    tracklist = 
  }, 
  {
    playlistName = "Bardcore", 
    tracklist = ["Never Gonna Give You Up (Medieval Cover).mp3"]
  }
  
]
  */



function loadPlaylist(playlistsDisplayed) {
  //update song name, 
  for (let j = 0; j < playlistsDisplayed.length; j++) {
    //loop through all playlist names currently displayed on the page
    for (let y = 0; y < playlists.length; y++) {
      console.log(playlistsDisplayed[j].innerText)
      //if displayed playlist name matches with a playlist object in array, play its tracklist
      if (playlistsDisplayed[j].innerText == playlists[y].playlistName) {
        let songToPlay = playlists[y].tracklist[0];
        playSong(songToPlay);
      }
    }
  }
}


function loadPlaylist(playlistName) {
  //update song name, 
for (let y = 0; y < playlists.length; y++) {
  if (playlistName.innerHTML == playlists[y].playlistName) {
    let songToPlay = playlists[y].tracklist[0];
    playSong(songToPlay);
  }
}


for (let x = 0; x < playlistCovers.length; x++) {
  playlistCovers[x].addEventListener("click", () => {
    console.log("click is being detected");
    //
    //console.log(playlistNameArray);

    //get playlist cover's h3 (the playlists name, then pass that into load playlist function)

    playlistCovers[x].childNodes
    //let playlistAudio = playlistCovers[x].childNodes[1];
    
    const isPlaying = audio.classList.contains("playing");
    if (isPlaying) {
      pauseSong();
    }
    else {
      loadPlaylist(playlistNameArray);
    }
  })
}


function playSong(songToPlay) {
  
  audio.classList.add("playing");
  statusIcon.classList.replace("playButtonActive", "pauseButtonActive");
  statusIcon.src = "icons/pause.svg";
  audio.src = "songs/" + songToPlay;
  audio.play();
}



function pauseSong() {
  audio.classList.remove("playing");
  statusIcon.classList.replace("pauseButtonActive", "playButtonActive");
  statusIcon.src = "icons/play.svg";
  audio.pause();
}



//find out which playlist has been clicked (hogwarts, bardcore, etc)

//store songs for each playlist in specific arrays, and play them when that playlist has been selected
