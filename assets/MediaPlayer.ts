// class
// prototipado de la clase
class MediaPlayer {
  media: HTMLMediaElement;
  container: HTMLElement;
  plugins: Array<any>;


  constructor(config) {
    this.media = config.med;
    this.plugins = config.plugins || [];
    this.initPlayer();
    this.initPlugins();
  }

  initPlayer() {
    this.container = document.createElement('div');

    this.container.style.position = "relative";
    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
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