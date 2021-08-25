function AutoPlay() {
    AutoPlay.prototype.run = function(player) {
        player.toggleSound();
        player.play();
    }
}

export default AutoPlay;