import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

const DEBOUNCE_TIME = 500;
const FIVE_SECONDS = 5000;

export default Ember.Controller.extend({
  saveModelTask: task(function *() {
    yield this.get('model').save();
  }).keepLatest(),

  forceSaveTask: task(function *() {
    yield timeout(FIVE_SECONDS);
    this.get('saveModelTask').perform();
  }).drop(),

  updatedModelTask: task(function *() {
    this.get('forceSaveTask').perform();
    yield timeout(DEBOUNCE_TIME);
    this.get('forceSaveTask').cancelAll();
    this.get('saveModelTask').perform();
  }).restartable()
});
