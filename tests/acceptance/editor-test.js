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

moduleForAcceptance('Acceptance | editor');

test('it debounces a save', function(assert) {
  server.create('post', {text: ''});

  visit('/');
  andThen(() =>{
    // Grab MediumEditor Instance
    let $editor = Ember.$('.editor')[0];
    let editor = MediumEditor.getEditorFromElement($editor);

    triggerInput(editor, 'old Text', $editor);
    timeout(5)
    .then(() =>{
      triggerInput(editor, 'new text', $editor);
      timeout(25)
      .then(() =>{
        assert.equal(server.db.posts[0].text, 'new text');
        let numberOfSaves = server.pretender.handledRequests
        .filter(r => r.method === 'PATCH').length;
        assert.equal(numberOfSaves, 1);
      });
    });
  });
});

test('it forces a save', function(assert) {
  server.create('post', { text: '' });

  // Same as above
  visit('/');
  andThen(() =>{

    let $editor = Ember.$('.editor')[0];
    let editor = MediumEditor.getEditorFromElement($editor);

    // 1
    triggerInput(editor, '1', $editor);
    timeout(15).then(() =>{
      triggerInput(editor, '2', $editor);
      timeout(15).then(() =>{
        triggerInput(editor, '3', $editor);
        timeout(15).then(() =>{
          // 2
          assert.equal(server.db.posts[0].text, '3');
          assert.equal(server.pretender.handledRequests.length, 2);
        });
      });
    });

  });
});
