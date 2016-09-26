import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateTitle(newTitle) {
      let model = this.get('model');
      model.set('title', newTitle);
      this.set('isSaving', true);
      this.set('isErrored', false);
      model.save()
      .catch(() =>{
        this.set('isErrored', true);
      })
      .finally(() =>{
        this.set('isSaving', false);
      })
    },

    updateText(newText) {
      let model = this.get('model');
      model.set('text', newText);
      this.set('isSaving', true);
      this.set('isErrored', false);
      model.save()
      .catch(() =>{
        this.set('isErrored', true);
      })
      .then(() =>{
        this.set('isSaving', false);
      })
    },

    resaveModel() {
      this.set('isSaving', true);
      this.get('model').save()
      .then(() =>{
        this.set('isErrored', false);
      })
      .finally(() =>{
        this.set('isSaving', false);
      });
    }
  }
});
