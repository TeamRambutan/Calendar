import './calendar.html';

Template.calendar.onCreated(function calendarOnCreated() {
    // counter starts at 0
    this.counter = new ReactiveVar(0);
});

Template.calendar.helpers({
    counter() {
        return Template.instance().counter.get();
    },
});

Template.calendar.events({
    'click button'(event, instance) {
        // increment the counter when button is clicked
        instance.counter.set(instance.counter.get() + 1);
    },
});
