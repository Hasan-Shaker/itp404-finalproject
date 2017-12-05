import Ember from 'ember';

export default Ember.Component.extend({
classes : "modalbg",
  didInsertElement(){
    if (this.active == undefined || this.active == null){
      this.set('active', false);
    } else {
this.set('active', JSON.parse(this.active));
}
console.log("dis: ", this);
    window.addEventListener('modal-toggle', (e)=> {
      this.set('active', !JSON.parse(this.active));
    }, false);
  },
  actions: {
  toggleModal(){
    this.set('active', !JSON.parse(this.active));
  }
  },
  activeStateChanged: Ember.observer('active', function() {
    this.set("classes", this.active ? "modalbg active" : "modalbg");

  })

});
