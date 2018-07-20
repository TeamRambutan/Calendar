import './home.html';

import '../../components/hello/hello.js';
import '../../components/info/info.js';
import '../../components/calendar/calendar.js';
import '../../components/board/board.js';
import $ from "jquery";

Template.home.events({
    'click .board'(event, instance) {
        // increment the counter when button is clicked
        //instance.counter.set(instance.counter.get() + 1);
        event.preventDefault();
        console.log('home');
        $('.board')
            .sidebar('toggle')
        ;
    },
});