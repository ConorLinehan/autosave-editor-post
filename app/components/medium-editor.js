import Ember from 'ember';

const {
  isBlank
} = Ember;

export default Ember.Component.extend({

  didInsertElement() {
    let html = this.get('text');
    let editor = new MediumEditor('.editor');

    if (!isBlank(html)) {
      editor.setContet(html);
    }
    editor.subscribe('editableInput', (event) =>{
      this.sendAction('updateText', event.target.innerHTML);
    });
    this.set('editor', editor);
  }

});
