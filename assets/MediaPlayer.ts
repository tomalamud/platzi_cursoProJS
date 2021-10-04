// class
// prototipado de la clase
class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;

  constructor(config) {
    this.media = config.med;
    this.plugins = config.plugins || [];
    this.initPlugins();
  }

  // class methods
  play() {
    this.media.play();
  }

  pause() {
    this.media.pause();
  }

  togglePlay() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  toggleSound() {
    this.media.muted = !this.media.muted;
  }

  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }
}

export default MediaPlayer;