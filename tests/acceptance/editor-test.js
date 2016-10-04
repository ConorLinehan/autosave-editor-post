import { test } from 'qunit';
import moduleForAcceptance from 'autosave-editor-post/tests/helpers/module-for-acceptance';
import Ember from 'ember';
import { timeout } from 'ember-concurrency';

const triggerInput = (editor, text, $element) =>{
  editor.trigger('editableInput', {
    target: {
      innerHTML: text
    }
  }, $element);
};

moduleForAcceptance('Acceptance | editor', {
  beforeEach() {
    server.create('post', {text: ''});
  }
});

test('it debounces a save', function(assert) {
  // [Enter Code Here]
});

test('it forces a save', function(assert) {
  // [Enter Code Here]
});
