console.log('party.js');

const songs = {
  1: new Audio('./sounds/wood.wav'),
  2: new Audio('./sounds/fizzle.wav'),
  3: new Audio('./sounds/hat.wav'),
  4: new Audio('./sounds/kick.wav'),
  5: new Audio('./sounds/snare.wav'),
  6: new Audio('./sounds/snarezz.wav'),
  7: new Audio('./sounds/synth.wav'),
  8: new Audio('./sounds/vox1.wav'),
  9: new Audio('./sounds/vox2.wav'),
  0: new Audio('./sounds/vox3.wav'),
};

const playSong = ({ key: keyNumber }) => {
    
  const audio = songs[keyNumber];
  const balloon = document.querySelector('#balloon_' + keyNumber);
  if (audio) {
    balloon.classList.add('blow');
    audio.currentTime = 0;
    audio.play();

    setTimeout(() => {
      balloon.classList.remove('blow');
    }, 1000);
  }
};



document.addEventListener('keypress', playSong);
