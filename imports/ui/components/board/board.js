import './board.html';
import $ from 'jquery';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.clicked;
});

Template.hello.helpers({
    show() {
      if(!Template.instance().) {
          $('.board')
              .sidebar('toggle')
          ;
          Template.instance().clicked.set(false);
      }
    },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.clicked.set(instance.clicked.get() + 1);
  },
});
