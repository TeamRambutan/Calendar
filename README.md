# Calendar

## ICS 414 (Software Engineering II) final project

Our system creates .ics “event files”, as described in RFC 5545 https://tools.ietf.org/html/rfc5545 . Once you create and download your custom event file, you can then use existing calendaring systems like Outlook, Google Calendar, or Mac OS Calendar to read files. Our application allows users to create iCalendar (or vCalendar) event files that can be emailed or shared, and read into the recipient’s calendars.

Current functionality:
* Version (section 3.7.4 of RFC 5545)
* Classification (3.8.1.3). Note this is a way of users designating events as
public (default), private, or confidential.
* Priority (3.8.1.9)
* Summary (3.8.1.12)
* Location (3.8.1.7)
* DTSTART (3.8.2.4)
* DTEND (3.8.2.2)
* Time zone identifier (3.8.3.1)
* Recurring events (3.8.5) (Frequency and count of repeats)


Future functionality: 
* Geographic Position (3.8.1.6)


## How to start generating calendar event files with our application: 

* Clone this Calendar repository
``` git clone https://github.com/TeamRambutan/Calendar.git```
* Open main.html in a browser window (preferably Chrome)
* Fill in the fields to create your own iCalendar (or vCalendar with version 1.0) event file with the extension .ics (or .vcs)
* If your event requires more details, click on the button that says “Show Advanced” to fill in additional, optional fields
* Once you have filled in your data, click on the “download” button (if there are issues with your input, such as an end date that is before the start date, an alert should appear to inform you to make the necessary changes)
* And that’s it!  Now you can import your event file into various calendar systems such as the Mac OS Calendar, Google Calendar, etc. 
