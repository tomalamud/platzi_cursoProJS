// class
// prototipado de la clase
function MediaPlayer(config) {
    this.media = config.med;
    this.plugins = config.plugins || [];
  
    this._initPlugins();
  }
  
  // class methods
  MediaPlayer.prototype.play = function() {
    this.media.play();
  };
  
  MediaPlayer.prototype.pause = function() {
    this.media.pause();
  };
  
  MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  };

  MediaPlayer.prototype.toggleSound = function() {
    this.media.muted = !this.media.muted
  }
  
  MediaPlayer.prototype._initPlugins = function () {
    const player = {
      play: () => this.play(),
      pause: () => this.pause(),
      media: this.media,
      get muted() {
        return this.media.muted;
      },
      set muted(value) {
        this.media.muted = value;
        // lo de arriba simplifica:
        // if (value === true) {
        //   this.media.muted = true;
        // } else {
        //   this.media.muted = false;
        // }
      }
    }

    this.plugins.forEach(plugin => {
      plugin.run(player);
    })
  }
  
  export default MediaPlayer;