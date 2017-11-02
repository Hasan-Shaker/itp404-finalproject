import Ember from 'ember';

export default Ember.Route.extend({
  actions:{

    setActive(id){

      console.log("active: ", id);

    }

  }
});
