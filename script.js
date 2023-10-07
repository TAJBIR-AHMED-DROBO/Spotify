let progressBar = document.querySelector("input");
let icon = document.querySelector("#icon");
let songElement = new Audio("D:/Songs/Kusu Kusu - Satyameva Jayate 2 128 Kbps.mp3");
let gif = document.querySelector(".bro");
let songs = Array.from(document.querySelectorAll(".songItem"));
let id = 0;
let isPlaying = false;



const songList = [
  {
    songName: "kusu kusu",
    filepath: "D:/Songs/Kusu Kusu - Satyameva Jayate 2 128 Kbps.mp3",
    coverPath: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/11/norafatehikusu-1637126538.jpg",
  },
  {
    songName: "Saki Saki",
    filepath: "D:/Songs/O Saki Saki - Batla House 128 Kbps.mp3",
    coverPath: "https://i.ytimg.com/vi/_uUdJalMaF8/maxresdefault.jpg",
  },
  {
    songName: "Manike mage hite",
    filepath: "D:/Songs/Manike Thank God 128 Kbps.mp3",
    coverPath: "https://i.ytimg.com/vi/P9Rx8Yvzb64/maxresdefault.jpg",
  },
  {
    songName: "Dilbar",
    filepath: "D:/Songs/Dilbar (Satyameva Jayate) 128 Kbps.mp3",
    coverPath: "https://i1.sndcdn.com/artworks-000369949932-klcxvj-t500x500.jpg",
  },
  {
    songName: "Bazigaar",
    filepath: "D:/Songs/Baazigar O Baazigar Kumar Sanu 128 Kbps.mp3",
    coverPath: "https://m.media-amazon.com/images/M/MV5BZjQ2OTFkOWItMmIyNS00Mjk0LWE5MzAtMmUwNjFkM2I5NjEwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
  },
  {
    songName: "Hua hai Aaaj pehli baar",
    filepath: "D:/Songs/03 - Hua Hain Aaj Pehli Baar.mp3",
    coverPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3kUmbK6PXeqDRb-6n1yCmgGV2qrgKOyTqiKzfdI13tg&s",
  },
  {
    songName: "Dil Ibaadat",
    filepath: "D:/Songs/128-Dil Ibaadat - Tum Mile 128 Kbps.mp3",
    coverPath: "https://i.ytimg.com/vi/fKIJhHUW-G0/maxresdefault.jpg",
  },
];

let songNameElement = document.querySelector(".kaka");
let coverImageElement = document.querySelector(".Tajbir");
let gifImageElement = document.querySelector(".bro");



songs.forEach((e,i)=>{
  
  document.getElementsByClassName("Tajbir")[i].src = songList[i].coverPath;
  document.getElementsByClassName("love")[i].innerHTML = songList[i].songName;

   

});



function updateSongInfo(songIndex) {
  songNameElement.textContent = songList[songIndex].songName;
  
}

function updateGif() {
  gifImageElement.style.opacity = 1;
  // Add your GIF updating logic here, e.g., changing the GIF based on the current song
}

function updateIcons() {
  if (isPlaying) {
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
  } else {
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  }

  Array.from(document.querySelectorAll(".ioi")).forEach((element, i) => {
    if (i === id && isPlaying) {
      element.classList.remove("fa-play");
      element.classList.add("fa-pause");    
    } else {
      element.classList.remove("fa-pause");
      element.classList.add("fa-play");
    }
  });
}

icon.addEventListener("click", function () {
  if (songElement.paused || songElement.currentTime <= 0) {
    songElement.play();
    isPlaying = true;
    gifImageElement.style.opacity = 1;
  } else {
    songElement.pause();
    isPlaying = false;
    gifImageElement.style.opacity = 0;
  }
  updateIcons();
});

Array.from(document.querySelectorAll(".ioi")).forEach((element, i) => {


  element.addEventListener("click", (e) => {
    
    if (i ===id  && isPlaying) {
      songElement.pause();
      isPlaying = false;
      gifImageElement.style.opacity = 0;
    } else {
      songElement.src = songList[i].filepath;
      id = i;
      songElement.play();
      isPlaying = true;
      currentSong = songList[i];
      updateSongInfo(i);
      updateGif();
    }
    updateIcons();
  });
});

progressBar.addEventListener("change", () => {
  songElement.currentTime = (progressBar.value * songElement.duration) / 100;
});

songElement.addEventListener("timeupdate", () => {
  let progress = parseInt((songElement.currentTime / songElement.duration) * 100);
  progressBar.value = progress;
});

document.querySelector(".hi").addEventListener("click", () => {
  if (id < 0) {
    id = 6;
  } else {
    id--;
  }
  songElement.src = songList[id].filepath;
  songElement.currentTime = 0;
  songElement.play();
  isPlaying = true;
  currentSong = songList[id];
  updateSongInfo(id);
  updateGif();
  updateIcons();
});

document.querySelector(".no").addEventListener("click", () => {
  if (id > 6) {
    id = 0;
  } else {
    id++;
  }
  songElement.src = songList[id].filepath;
  songElement.currentTime = 0;
  songElement.play();
  isPlaying = true;
  currentSong = songList[id];
  updateSongInfo(id);
  updateGif();
  updateIcons();
});

let hello = document.querySelector(".sanam");
hello.addEventListener("click",()=>{
  alert("The sound of Bazzigar wil be played after 7 second");
})





  for (let i = 0; i < songList.length; i++) {
    const audio = new Audio(songList[i].filepath);
   
    audio.addEventListener("loadedmetadata", () => {
    
      const duration = formatTime(audio.duration);
      document.querySelectorAll(".td")[i].innerHTML = duration;
    });
  }


// Define a function to format the time in minutes and seconds
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}
 


