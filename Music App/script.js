for (let e of document.querySelectorAll(
  'input[type="range"].slider-progress'
)) {
  e.style.setProperty("--value", e.value);
  e.style.setProperty("--min", e.min == "" ? "0" : e.min);
  e.style.setProperty("--max", e.max == "" ? "100" : e.max);
  e.addEventListener("input", () => e.style.setProperty("--value", e.value));
}
let songs = [
  {
    songNmae: "Na Cher Malangaa Nu",
    songDesc: "Farhan Saeed & Aima Baig",
    filePath: "songs/song1.mp3",
    coverPath: "images/cover1.jpg",
  },
  {
    songNmae: "Main Tera",
    songDesc: "Azan Sami Khan",
    filePath: "songs/song2.mp3",
    coverPath: "images/cover2.jpg",
  },
  {
    songNmae: "Uchiyaan Dewaraan",
    songDesc: "Bilal Saeed & Momina Mustehsan",
    filePath: "songs/song3.mp3",
    coverPath: "images/cover3.jpg",
  },
  {
    songNmae: "Ankhiyan",
    songDesc: "Falak Shabbir",
    filePath: "songs/song4.mp3",
    coverPath: "images/cover4.jpg",
  },
  {
    songNmae: "Ji Jaun",
    songDesc: "Farhan Saeed",
    filePath: "songs/song5.mp3",
    coverPath: "images/cover5.jpg",
  },
  {
    songNmae: "Sajna",
    songDesc: "Farhan Saeed",
    filePath: "songs/song6.mp3",
    coverPath: "images/cover6.jpg",
  },
  {
    songNmae: "Na Cher Malangaan Nu",
    songDesc: "Farhan Saeed & Aima Baig",
    filePath: "songs/song1.mp3",
    coverPath: "images/cover1.jpg",
  },
  {
    songNmae: "Main Tera",
    songDesc: "Azan Sami Khan",
    filePath: "songs/song2.mp3",
    coverPath: "images/cover2.jpg",
  },
  {
    songNmae: "Uchiyaan Dewaraan",
    songDesc: "Bilal Saeed & Momina Mustehsan",
    filePath: "songs/song3.mp3",
    coverPath: "images/cover3.jpg",
  },
  {
    songNmae: "Ankhiyan",
    songDesc: "Falak Shabbir",
    filePath: "songs/song4.mp3",
    coverPath: "images/cover4.jpg",
  },
  {
    songNmae: "Ji Jaun",
    songDesc: "Farhan Saeed",
    filePath: "songs/song5.mp3",
    coverPath: "images/cover5.jpg",
  },
  {
    songNmae: "Sajna",
    songDesc: "Farhan Saeed",
    filePath: "songs/song6.mp3",
    coverPath: "images/cover6.jpg",
  },
];

let songIndex = 0;
let audioElement = new Audio("songs/song1.mp3");
let masterPlay = document.getElementById("masterPlay");
let songContainor = Array.from(document.getElementsByClassName('songContainor'));
var volumeSlider = document.getElementById("volumeRange");
var musicIcon = document.getElementById("musicIcon");
var progressBar = document.getElementById("progressBar");

volumeSlider.addEventListener("mousemove", function () {
  var x = volumeSlider.value;
  var color =
    "linear-gradient(90deg,  rgb(25, 213, 19)" +
    x +
    "%,  rgb(140, 140, 140)" +
    x +
    "%)";
  volumeSlider.style.background = color;
});
// update songs name/picture 
songContainor.forEach((element ,i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songDesc")[0].innerHTML = songs[i].songDesc;
  element.getElementsByClassName("songTital")[0].innerHTML = songs[i].songNmae;
});
//handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
  }
});

//song progress bar updating while song is playing
audioElement.addEventListener('timeupdate', ()=>{
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  progressBar.value = progress;
})

//play song from song card

const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('playButton')).forEach((element)=>{
    element.classList.remove('fa-play');
    element.classList.add('fa-pause');
  })
}

Array.from(document.getElementsByClassName("playButton")).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    
    if(audioElement.paused || audioElement.currentTime<=0){
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-play');
      e.target.classList.add('fa-pause');
      audioElement.src = `songs/song${songIndex+1}.mp3`;
      audioElement.currentTime=0;
      audioElement.play();
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    }
    else{
      makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.add('fa-play');
    e.target.classList.remove('fa-pause');
    audioElement.src = `songs/song${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.pause();
    masterPlay.classList.add("fa-circle-play");
    masterPlay.classList.remove("fa-circle-pause");
    }
    
  })
})

