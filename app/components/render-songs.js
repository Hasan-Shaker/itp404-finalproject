import Ember from 'ember';


export default Ember.Component.extend({
  actions:{
setActive(id){
this.sendAction('test', id);
return true;
}
  },
  data: {

    songs: [{
      id: uuid(),
        title: "Song Name 1",
        artist: "@aidan",
        src: "https://www.dropbox.com/s/u497xpq7qbrt2l9/justbeatitbuddy.wav?dl=1",
        tags: ["Radio", "Narrative"],
        imgurl: "https://source.unsplash.com/random/" + uuid()  + "?green",
        playercolor:"green"
      },
      {
        id: uuid(),
        title: "Song Name 2",
        artist: "@baedan",
        src: "https://www.dropbox.com/s/p26y5uk5b8ek3yd/P.Y.T.%20%28Pretty%20Young%20Thing%29_y32ejtuxSjM_youtube%20R.wav?dl=1",
        tags: ["Podcast", "News"],
        playercolor:"green"
      },
      {
        id: uuid(),
        title: "Song Name 3",
        artist: "@aidan",
        src: "https://www.dropbox.com/s/u497xpq7qbrt2l9/justbeatitbuddy.wav?dl=1",
        tags: ["Radio", "Narrative"],
        imgurl: "https://source.unsplash.com/random/" + uuid()  + "?red",
        playercolor:"red"
      },
      {
        id: uuid(),
        title: "Song Name 4",
        artist: "@aidan",
        src: "https://www.dropbox.com/s/u497xpq7qbrt2l9/justbeatitbuddy.wav?dl=1",
        tags: ["Radio", "Narrative"],
        playercolor:"red"
      },{
        id: uuid(),
          title: "Song Name 1",
          artist: "@aidan",
          src: "https://www.dropbox.com/s/u497xpq7qbrt2l9/justbeatitbuddy.wav?dl=1",
          tags: ["Radio", "Narrative"],
          imgurl: "https://source.unsplash.com/random/" + uuid()  + "?yellow",
          playercolor:"yellow"
        },
        {
          id: uuid(),
          title: "Song Name 2",
          artist: "@baedan",
          src: "https://www.dropbox.com/s/p26y5uk5b8ek3yd/P.Y.T.%20%28Pretty%20Young%20Thing%29_y32ejtuxSjM_youtube%20R.wav?dl=1",
          tags: ["Podcast", "News"],
          playercolor:"yellow"
        },
        {
          id: uuid(),
          title: "Song Name 3",
          artist: "@aidan",
          src: "https://www.dropbox.com/s/u497xpq7qbrt2l9/justbeatitbuddy.wav?dl=1",
          tags: ["Radio", "Narrative"],
          imgurl: "https://source.unsplash.com/random/" + uuid() + "?blue",
          playercolor:""
        },
        {
          id: uuid(),
          title: "Song Name 4",
          artist: "@aidan",
          src: "https://www.dropbox.com/s/u497xpq7qbrt2l9/justbeatitbuddy.wav?dl=1",
          tags: ["Radio", "Narrative"],
          playercolor:""
        }
    ]

  }
});

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
