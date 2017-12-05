import Ember from 'ember';

export default Ember.Route.extend({
  title: "Clips",
  model(params) {
    return params;
  },
    serialize(model) {
        return model;
    },
    setupController(controller, model) {
         this.controllerFor('clips').set('data', model);
    }
});
