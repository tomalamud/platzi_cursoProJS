      // class
      function MediaPlayer(config) {
        this.media = config.med;
      }

      // object from class
      const video1 = document.querySelector('#firstVideo');
      const player = new MediaPlayer({ med: video1 });

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
      
      // button interactivity
      const button = document.querySelector('button');
      button.onclick = () => player.togglePlay();