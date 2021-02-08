const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {

    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSounds();

        document.getElementById(sound).play();
    });

    document.getElementById('buttons').appendChild(btn)

});

function stopSounds() {
    sounds.forEach(sound_name => {
        const sound = document.getElementById(sound_name);
        sound.pause();
        sound.currentTime = 0;
    });
}