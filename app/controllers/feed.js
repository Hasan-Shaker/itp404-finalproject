import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    test(id){
      this.send("setActive", id);
    }

  }
});
