import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  text() { return faker.lorem.text();},
  title() { return `<p>${faker.lorem.text()}</p>`;}
});
