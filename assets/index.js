import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

// object from class
const video1 = document.querySelector('#firstVideo');
const player = new MediaPlayer({ med: video1, plugins: [ new AutoPlay() ] });

// button interactivity
const buttonPlay = document.querySelector('#buttonPlay');
const buttonSound = document.querySelector('#buttonSound');

buttonPlay.onclick = () => player.togglePlay();
buttonSound.onclick = () => player.toggleSound();
