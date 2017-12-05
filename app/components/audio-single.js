import Ember from 'ember';
import config from 'itp404-finalproject/config/environment';

export default Ember.Component.extend({
  data: {
    playing: false,
    preload: "metadata",
    type: "audio/wav",
    clip_path : "",
    allow_images: true
  },
  didRender(){

this.data.clip_path = this.guid;

    this.player_global = document.querySelector("audio#aud_main");

    this.audio = this.$('audio')[0];

    this.playerbutton = this.$('.playerbutton')[0];
    this.playertime = this.$('.player_time')[0];
    this.seek = this.$('.seek')[0];
    this.holder = this.$('.song-holder')[0];
    this.player = this.$('.player')[0];

    this.handleStyle(this);

        this.audio.load();
        this.seek.classList.add("loading");
        this.seek.disabled=true;

    this.seek.addEventListener("change", () => {

      if (this.audio.duration) {
        this.audio.currentTime = ((this.seek.value / 1000) * this.audio.duration);
      }

    }, true);

this.audio.addEventListener("play", () => {

console.log("playing");

  fetch(config.apiHost + "clips/" + this.id, {
method: 'PATCH',
headers: new Headers({
'Content-Type': 'application/json'
}),
body: JSON.stringify({
  play_count: this.play_count +=1
})
}).then((res)=>{
// console.log("postres: ", res);
});

});
  this.audio.addEventListener("canplay", () => {
    this.seek.classList.remove("loading");
    this.seek.disabled=false;
  });

    this.audio.addEventListener("loadedmetadata", () => {

              this.audio.currentTime = 0;
      this.playertime.innerHTML = fmtMSS(Math.floor(this.audio.currentTime)) + "/" + fmtMSS(Math.floor(this.audio.duration));

    }, true);

    this.audio.addEventListener("seeked", () => {
      this.playertime.innerHTML = fmtMSS(Math.floor(this.audio.currentTime)) + "/" + fmtMSS(Math.floor(this.audio.duration));
    }, true);

    this.audio.addEventListener("timeupdate", () => {
      this.playertime.innerHTML = fmtMSS(Math.floor(this.audio.currentTime)) + "/" + fmtMSS(Math.floor(this.audio.duration));
      this.seek.value = (this.audio.currentTime / this.audio.duration) * 1000;

    }, true);


  },
  handleStyle(ref){

    //ref.player.style.backgroundColor

    if (this.data.allow_images) {
      if (this.get('img_url') !== undefined) {
        console.log("img_url defined");
        this.holder.classList.add("has_bg");
        this.holder.style.background = "linear-gradient(-45deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.65) 100%), url('" + this.get('img_url') + "') no-repeat";
      } else {
        //none
      }
    } else {

      //Nothing
    }

  },
  actions: {

    playAud: function() {

      if (this.audio.paused && !this.audio.ended && this.audio.buffered) {

        //console.log("id: ", this.attrs.id.value);

        // this.sendAction('setActive', {data: this.attrs.id.value, player: this.player });



        this.playerbutton.innerHTML = "pause";
        this.data.playing = true;
        this.data.playing ? this.audio.play() : this.audio.pause();
      } else {
        this.playerbutton.innerHTML = "play_arrow";
        this.data.playing = false;
        this.data.playing ? this.audio.play() : this.audio.pause();
      }

    }

  }

});


function fmtMSS(s) {
  return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s
}
