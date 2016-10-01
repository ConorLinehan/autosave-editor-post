import Mirage from 'ember-cli-mirage';

export default function() {
  this.timing = 800;

  this.get('/posts/:id');
  this.patch('/posts/:id');

  // Uncomment to fake error case
  // this.patch('/posts/:id', () =>{
  //   return new Mirage.Response(500);
  // });
}
