import './home.html';

import '../../components/hello/hello.js';
import '../../components/info/info.js';
import '../../components/calendar/calendar.js';

Template.home.onCreated(function helloOnCreated() {
    // counter starts at 0
    this.isBoardVisible = new ReactiveVar(false);
});

Template.home.helpers({
    counter() {
        return Template.instance().counter.get();
    },
});

Template.home.events({
    'click button'(event, instance) {
        // increment the counter when button is clicked
        instance.counter.set(instance.counter.get() + 1);
    },
});
