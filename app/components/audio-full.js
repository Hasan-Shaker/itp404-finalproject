import Ember from 'ember';
import config from 'itp404-finalproject/config/environment';

export default Ember.Component.extend({
  data:{},
  didInsertElement(){

    fetch(config.apiHost + "clips")
  .then((resp) => resp.json())
  .then((data) => {
     data = data.filter((c)=> c.uuid == this.id);
    console.log("songdata: ", data[0]);
    Ember.set(this, "song",data[0]);

  });

},
actions: {
  deletePost(){

    fetch(config.apiHost + "clips/" + this.song.id,
    {
      method: 'DELETE'
    })
    .then((res)=>{
      this.toast.error("Clip " + this.song.uuid + " has been deleted");
      console.log("Clip " + this.song.id + " has been deleted");
    });

  }
}
});
