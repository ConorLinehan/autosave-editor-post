import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

const DEBOUNCE_TIME = (Ember.testing) ? 20 : 500;
const FIVE_SECONDS = (Ember.testing) ? 40 : 5000;

export default Ember.Controller.extend({
});
