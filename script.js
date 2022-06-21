const sounds = ["boom", "hithat", "clap","openhat", "kick","tink","snare","tom","ride"];
const title= document.querySelector('h1');
title.innerText="Creado por Keiber Hernandez";

sounds.forEach(sound=>{
    const btn = document.createElement("button");
    btn.classList.add("btn");

    btn.innerText=sound;


    btn.addEventListener("click", ()=>{
        stop();

        document.getElementById(sound).play();
    });
    document.getElementById("buttons").appendChild(btn);
})


function stop(){
    sounds.forEach(sound=>{
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}
