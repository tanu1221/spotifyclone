console.log("Welcome to Spotify");
let songIndex=0;
let audioElement = new Audio("C:\Users\ttanu\OneDrive\Desktop\spotify clone project\Be Mine.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs =[
    { songName: "Be Mine", filepath: "C:\Users\ttanu\OneDrive\Desktop\spotify clone project\Be Mine.mp3", coverpath: "C:\Users\ttanu\OneDrive\Desktop\spotify clone project\image.jpeg"},
   { songName: "Be Mine", filepath: "C:\Users\ttanu\OneDrive\Desktop\spotify clone project\Be Mine.mp3", coverpath: "C:\Users\ttanu\OneDrive\Desktop\spotify clone project\image.jpeg"},
   { songName: "Be Mine", filepath: "C:\Users\ttanu\OneDrive\Desktop\spotify clone project\Be Mine.mp3", coverpath: "C:\Users\ttanu\OneDrive\Desktop\spotify clone project\image.jpeg"},
   { songName: "Be Mine", filepath: "C:\Users\ttanu\OneDrive\Desktop\spotify clone project\Be Mine.mp3", coverpath: "C:\Users\ttanu\OneDrive\Desktop\spotify clone project\image.jpeg"},
   { songName: "Be Mine", filepath: "C:\Users\ttanu\OneDrive\Desktop\spotify clone project\Be Mine.mp3", coverpath: "C:\Users\ttanu\OneDrive\Desktop\spotify clone project\image.jpeg"},
   { songName: "Be Mine", filepath: "C:\Users\ttanu\OneDrive\Desktop\spotify clone project\Be Mine.mp3", coverpath: "C:\Users\ttanu\OneDrive\Desktop\spotify clone project\image.jpeg"},
]
 masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audio.Element.cureentTimes<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-solid fa-pause');
        gif.style.opacity = 1;
    
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-solid fa-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
     }
    }) 
 myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
 }) 
 