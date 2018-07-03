# Calendar

This is our final project for ICS 414 (Software Engineering II) which entails the following:

The task, outlined below, is to create .ics “event files”, as described in RFC 5545 https://tools.ietf.org/html/rfc5545 . Of course, you won’t be implementing everything that’s in RFC 5545! I don’t know of any commercial implementation of everything in RFC 5545, so you’ll be doing a small piece. Your system will generate event files – you are not building a system to read event files. You can use an existing calendaring system like Outlook, Google Calendar, or Mac OS Calendar to read files (hint: that’s a good way to test the output of your system). You are building a system to create .ics files that can be emailed or shared, and read into the recipient’s calendars.

Required functionality. You are developing a stand-alone application to create .ics event files. You must demonstrate the following are implemented:
* Version (section 3.7.4 of RFC 5545)
* Classification (3.8.1.3). Note this is a way of users designating events as
public (default), private, or confidential.
* Geographic Position (3.8.1.6)
* Priority (3.8.1.9)
* Summary (3.8.1.12)
* DTSTART (3.8.2.4)
* DTEND (3.8.2.2)
* Time zone identifier (3.8.3.1)
* And some aspect (your choice) of recurring events (3.8.5). Recurring events
(and exceptions to recurrences) can be very complicated. Start small and do what you can. For example, you might want to start with being able to schedule a meeting on the 25th of every month. Then add the ability to do exceptions, such as “except in December”).
