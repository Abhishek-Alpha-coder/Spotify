console.log("Welcome to spotify")

//Intialise the variables
let songIndex = 0;
let audioelemnt = new Audio(`1.mp3`);
let masterplay = document.querySelector("#masterplay");
let myprogressBar = document.querySelector("#myprogressBar")
let gif = document.querySelector("#gif")
let mastersong = document.querySelector("#mastersong")
let songitems = Array.from(document.getElementsByClassName(`songItem`));

let songs = [
    {songName:"Baba ji", filepath:"songs/1.mp3",coverpage:"covers/1.jpg"},
    {songName:"chaska aa ye yarra nu ", filepath:"songs/2.mp3",coverpage:"covers/2.jpg"},
    {songName:"Insecure", filepath:"songs/3.mp3",coverpage:"covers/3.jpg"},
    {songName:"Jaata ka choorra", filepath:"songs/4.mp3",coverpage:"covers/4.jpg"},
    {songName:"sanam teri kasam", filepath:"songs/2.mp3",coverpage:"covers/5.jpg"},
    {songName:"Tu jaane na", filepath:"songs/2.mp3",coverpage:"covers/6.jpg"},
    {songName:"Mera  yashu ", filepath:"songs/2.mp3",coverpage:"covers/7.jpg"},
    {songName:"Apna bna le piya", filepath:"songs/2.mp3",coverpage:"covers/8.jpg"},
]

songitems.forEach((element, i )=>{
    // console.log(element, i);
    element.getElementsByTagName(`img`)[0].src = songs[i].coverpage;
    element.getElementsByClassName(`songName`)[0].innerText = songs[i].songName;
});
// audioelemnt.play()
//handle play/pause lick
masterplay.addEventListener("click",()=>{
    if(audioelemnt.paused || audioelemnt.currentTime <=0){
    audioelemnt.play()
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
    }
    else{
          audioelemnt.pause();
          masterplay.classList.remove("fa-circle-pause");
          masterplay.classList.add("fa-circle-play");
          gif.style.opacity = 0;

    }
});


//listen to event
audioelemnt.addEventListener(`timeupdate`,()=>{    
    // console.log("timeupdate")
    // update seekba
    progress = parseInt((audioelemnt.currentTime/audioelemnt.duration)*100);
    myprogressBar.value = progress;
})

myprogressBar.addEventListener("change",()=>{
    audioelemnt.currentTime = myprogressBar.value * audioelemnt.duration/100;
})
 const makeallplays = ()=>{
    Array.from(document.getElementsByClassName("songplayitems")).forEach((element) =>{
        element .classList.remove(`fa-circle-pause`);
        element.classList.add(`fa-circle-play`);
    })
}


Array.from(document.getElementsByClassName("songplayitems")).forEach((element) =>{
    element.addEventListener(`click`,(e)=>{
        makeallplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove(`fa-circle-play`);
        e.target.classList.add(`fa-circle-pause`);
        audioelemnt.src = `songs/${songIndex+1}.mp3`;
        mastersong.innerText = songs[songIndex].songName;
        audioelemnt.currentTime = 0;
        audioelemnt.play();
        gif.style.opacity = 1;
        masterplay.classList.remove(`fa-circle-play`);
        masterplay.classList.add(`fa-circle-pause`);
        });
});

document.getElementById(`next`).addEventListener(`click`,()=>{
    if(songIndex >=7){
        songIndex = 0;
    }else{
        songIndex += 1;
    }
    audioelemnt.src = `songs/${songIndex+1}.mp3`;
    mastersong.innerText = songs[songIndex].songName;
    audioelemnt.currentTime = 0;    
    audioelemnt.play();
    masterplay.classList.remove(`fa-circle-play`);
    masterplay.classList.add(`fa-circle-pause`);
});



document.getElementById(`previous`).addEventListener(`click`,()=>{
    if(songIndex<=0){
        songIndex = 0;
    }else{
        songIndex -= 1;
    }
    audioelemnt.src = `songs/${songIndex+1}.mp3`;
    mastersong.innerText = songs[songIndex].songName;
    audioelemnt.currentTime = 0;   
    audioelemnt.play();
    masterplay.classList.remove(`fa-circle-play`);
    masterplay.classList.add(`fa-circle-pause`);
});
