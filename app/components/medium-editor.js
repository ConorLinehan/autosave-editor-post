import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement() {
    let editor = new MediumEditor('.editor');
    editor.subscribe('editableInput', (event) =>{
      this.sendAction('updateText', event.target.innerHTML);
    });
    this.set('editor', editor);
  }

});
