import './calendar.html';
import $ from 'jquery';
import 'fullcalendar';

Template.calendar.onCreated(function calendarOnCreated() {
    // counter starts at 0
    this.clicked = new ReactiveVar(false);
});

Template.calendar.onRendered(function() {
    $(document).ready(function() {
        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,basicWeek,basicDay'
            },
            defaultDate: '2016-12-12',
            navLinks: true, // can click day/week names to navigate views
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            events: [
                {
                    title: 'All Day Event',
                    start: '2016-12-01'
                },
                {
                    title: 'Long Event',
                    start: '2016-12-07',
                    end: '2016-12-10'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2016-12-09T16:00:00'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: '2016-12-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: '2016-12-11',
                    end: '2016-12-13'
                },
                {
                    title: 'Meeting',
                    start: '2016-12-12T10:30:00',
                    end: '2016-12-12T12:30:00'
                },
                {
                    title: 'Lunch',
                    start: '2016-12-12T12:00:00'
                },
                {
                    title: 'Meeting',
                    start: '2016-12-12T14:30:00'
                },
                {
                    title: 'Happy Hour',
                    start: '2016-12-12T17:30:00'
                },
                {
                    title: 'Dinner',
                    start: '2016-12-12T20:00:00'
                },
                {
                    title: 'Birthday Party',
                    start: '2016-12-13T07:00:00'
                },
                {
                    title: 'Click for Google',
                    url: 'https://google.com/',
                    start: '2016-12-28'
                }
            ]
        });

    });
});

Template.calendar.helpers({
    counter() {
        return Template.instance().counter.get();
    },
    show() {
        $('.board')
            .sidebar('toggle')
        ;
    },
    /*    calendarUi() {
        return Template.instance().counter.get();
    },*/
});

Template.calendar.events({
    'click #board'(event, instance) {
        // increment the counter when button is clicked
        //instance.counter.set(instance.counter.get() + 1);
        instance.clicked.set(true);
    },
});
