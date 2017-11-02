import Ember from 'ember';

export default Ember.Component.extend({
  data: {
    playing: false,
    preload: "metadata",
    type: "audio/wav",
    allow_images: true
  },
  didInsertElement() {

    this.player_global = document.querySelector("audio#aud_main");

    this.player = this.$('audio')[0];
    this.playerbutton = this.$('.playerbutton')[0];
    this.playertime = this.$('.player_time')[0];
    this.seek = this.$('.seek')[0];
    this.holder = this.$('.song-holder')[0];

    if (this.data.allow_images) {
      if (this.get('img_url') !== undefined) {
        this.holder.classList.add("has_bg");
        this.holder.style.background = "linear-gradient(-45deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%), url('" + this.get('img_url') + "') no-repeat";
      }
    }

    this.seek.addEventListener("change", () => {

      if (this.player.duration) {
        this.player.currentTime = ((this.seek.value / 1000) * this.player.duration);
      }

    }, true);


    this.player.addEventListener("loadedmetadata", () => {
      this.playertime.innerHTML = fmtMSS(Math.floor(this.player.currentTime)) + "/" + fmtMSS(Math.floor(this.player.duration));
    }, true);

    this.player.addEventListener("seeked", () => {
      this.playertime.innerHTML = fmtMSS(Math.floor(this.player.currentTime)) + "/" + fmtMSS(Math.floor(this.player.duration));
    }, true);

    this.player.addEventListener("timeupdate", () => {
      this.playertime.innerHTML = fmtMSS(Math.floor(this.player.currentTime)) + "/" + fmtMSS(Math.floor(this.player.duration));
      this.seek.value = (this.player.currentTime / this.player.duration) * 1000;

    }, true);


  },
  actions: {

    playAud: function() {

      if (this.player.paused && !this.player.ended && this.player.buffered) {

        console.log("id: ", this.attrs.id.value);

        // this.sendAction('setActive', {data: this.attrs.id.value, player: this.player });



        this.playerbutton.innerHTML = "pause";
        this.data.playing = true;
        this.data.playing ? this.player.play() : this.player.pause();
      } else {
        this.playerbutton.innerHTML = "play_arrow";
        this.data.playing = false;
        this.data.playing ? this.player.play() : this.player.pause();
      }

    }

  }

});


function fmtMSS(s) {
  return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s
}
