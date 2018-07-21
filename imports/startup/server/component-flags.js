// don't use it. it should be client side, not the server.

import {Meteor} from 'meteor/meteor';
import {Flags} from '../../api/flags/flags.js';

Meteor.startup(() => {
    // if the Links collection is empty
    if (Flags.find().count() === 0) {
        const board = {
                isVisible: false,
            };
    }
});
