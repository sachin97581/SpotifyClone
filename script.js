
let songIndex = 0;
let audioElement= new Audio("song3.mp3");
let icon3 = document.getElementById('icon3');
// let songPlay = document.getElementsByClassName('songPlay');           // for trail 
let musicBar = document.getElementById("musicBar");
let songItem = Array.from(document.getElementsByClassName("songItem"));

let songs = [
   {songName:"ringtune" , filePath:"song1.mp3" , coverPath:"card3img.jpeg"},
   {songName:"JONY,_HammAli_&_Nava" , filePath:"song2.mp3" , coverPath:"card3img.jpeg"},
   {songName:"Kala Tikka " , filePath:"song3.mp3" , coverPath:"card3img.jpeg"},
   {songName:"Milne Hai Mujhse Aayi" , filePath:"song4.mp3" , coverPath:"boy.jpg"},
   {songName:"Safar(Panjabi)" , filePath:"song5.mp3" , coverPath:"card3img.jpeg"},
   {songName:"Tera Zikr" , filePath:"song6.mp3" , coverPath:"boy.jpg"},
]

songItem.forEach((element, i)=>{
    // console.log(element , i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
    
});

// audioElement.play();

icon3.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        icon3.classList.remove("fa-play");
        icon3.classList.add("fa-pause");
    }
    else{
        audioElement.pause();
        icon3.classList.add("fa-play");
        icon3.classList.remove("fa-pause");
    }
});


// Lisition to Event

audioElement.addEventListener("timeupdate" , ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100)
    // console.log(progress); 
    musicBar.value = progress;
});

musicBar.addEventListener("change" , ()=> {
     audioElement.currentTime =musicBar.value * audioElement.duration/100;
});

let makepalyAll = ()=>{
    Array.from(document.getElementsByClassName("songPlay")).forEach((element)=>{
       element.classList.remove("fa-pause");
        element.classList.add("fa-play");
    })
};



Array.from(document.getElementsByClassName("songPlay")).forEach((element)=>{
    element.addEventListener("click", (e)=>{
        makepalyAll();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        audioElement.src = `song${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        icon3.classList.remove("fa-play");
        icon3.classList.add("fa-pause");

    })
})

document.getElementById("next").addEventListener("click", ()=>{
    if(songIndex>=6){
        songIndex = 1;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    icon3.classList.remove("fa-play");
    icon3.classList.add("fa-pause");

});document.getElementById("previous").addEventListener("click", ()=>{
    if(songIndex<=1){
        songIndex = 1;
    }else{
        songIndex -= 1;
    }
    audioElement.src = `song${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    icon3.classList.remove("fa-play");
    icon3.classList.add("fa-pause");

})

// list play and pouse btn

