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
    this.plugins.forEach(plugin => {
      plugin.run(this);
    })
  }

  export default MediaPlayer;