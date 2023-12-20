const sounds=['ac','Cartoon','clock','lion',
'monster']

sounds.forEach(sound =>{
    const btn =document.createElement('button')
    btn.classList.add('btn')

    btn.innerText=sound

btn.addEventListener('click',()=>{
    stopSongs()
    document.getElementById(sound).play()
})

    document.getElementById('buttons').
    appendChild(btn)
})

function stopSongs(){
    sounds.forEach(sound=>{
        const song=document.getElementById(sound)

        song.pause()
        song.CurrentTime=0;
    })
}

var pp=document.getElementById('buttons');
pp.addEventListener("click",playPause);

muaudio=document.getElementById('ac');
function playPause(){
    if(myaudio.paused){
        myaudio.play();
        pp.innerHTML="Pause";
    }
    else{
        myaudio.pause();
        pp.innerHTML="Play";
    }
}

