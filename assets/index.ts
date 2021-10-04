import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

// object from class
const video1 = document.querySelector('#firstVideo');
const player = new MediaPlayer({ 
    med: video1, 
    plugins: [ new AutoPlay(), new AutoPause() ] 
});

// button interactivity
const buttonPlay: HTMLElement = document.querySelector('#buttonPlay');
const buttonSound: HTMLElement = document.querySelector('#buttonSound');

buttonPlay.onclick = () => player.togglePlay();
buttonSound.onclick = () => player.toggleSound();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    });
}
