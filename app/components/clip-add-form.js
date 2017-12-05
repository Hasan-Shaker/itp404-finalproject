import Ember from 'ember';
import config from 'itp404-finalproject/config/environment';

export default Ember.Component.extend({
  data: {},
  isYoutube: function() {
  return this.get('source') == 'yt';
}.property('source'),
  actions : {
  getAudio : function(){
    this.data = this.getProperties("source", "name", "creator", "url", "color","img", "tags");

if (this.data.source == "yt"){
  fetch("https://formats.yout.com/formats?url=" + encodeURIComponent(this.url))
  .then((resp) => resp.json())
    .then((data) => {
      if (data.error){

      } else {
        console.log("source: ", this.data.source);
        sendPost({
        title: this.data.name,
        created_at: new Date().toJSON(),
        artist_name: this.data.creator,
        file_url: data.cache[0].url ,
        file_type: "audio/mpeg",
        img_url: this.useThumb ? getYoutubeThumbnail(this.data.url): this.data.img,
        player_color: this.data.color,
        tags: JSON.stringify(this.data.tags.split(",")),
        play_count: 0,
        like_count: 0
      });

      this.toast.success("Click here to refresh the page.", "New Clip '" + this.data.name + "' has been created.", { onclick: ()=>{window.location.reload(false)}});

      }
    });
  } else if (this.data.source == "url"){
    sendPost({
    title: this.data.name,
    created_at: new Date().toJSON(),
    artist_name: this.data.creator,
    file_url: this.data.url ,
    file_type: "audio/mpeg",
    img_url: this.data.img,
    player_color: this.data.color,
    tags: JSON.stringify(this.data.tags.split(",")),
    play_count: 0,
    like_count: 0
    });

      this.toast.success("Click here to refresh the page.", "New Clip '" + this.data.name + "' has been created.", { onclick: ()=>{window.location.reload(false)}});

  }
  }
}

});

function uint8ToString(buf) {
    var i, length, out = '';
    for (i = 0, length = buf.length; i < length; i += 1) {
        out += String.fromCharCode(buf[i]);
    }
    return out;
}

function sendPost(body){

  fetch(config.apiHost + "clips", {
method: 'POST',
headers: new Headers({
'Content-Type': 'application/json'
}),
body: JSON.stringify(body)
}).then((res)=>{
// console.log("postres: ", res);
});

}


function getYoutubeThumbnail(url){

  //https://img.youtube.com/vi/{video id}/0.jpg

  const regex = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/g;

  let m;

  while ((m = regex.exec(url)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
          regex.lastIndex++;
      }

return `https://img.youtube.com/vi/${m[1]}/0.jpg` ;

  }

}
