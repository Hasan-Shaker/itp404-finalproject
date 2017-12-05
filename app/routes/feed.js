import Ember from 'ember';

export default Ember.Route.extend({
   title: 'Chorder Pounder',
  actions:{

    setActive(id){

      console.log("active: ", id);

    }

  }
});
