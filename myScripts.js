/*
  Script to format and generate a new .ics calendar event file.
  Currently encompasses the following fields: summary, location (string)
  TODO: start/end date/time, UID, timezone identifier, priority, geographic position, classification, version, recurring events
 */


//creates a new .ics file
function createFile() {
  const data = `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nCALSCALE:GREGORIAN\r\n${createVevent()}\r\nEND:VCALENDAR`;
  const file = new Blob([data], { type: 'text/plain;charset=utf-8' });
  saveAs(file, `${document.getElementById('summary').value}.ics`);
}


//creates a Vevent
function createVevent() {
  let date = new Date();
  console.log(date);

  let event = `DTSTAMP:${createDT(date, document.getElementById('start-time'))}\r\n`;
    event = event.concat('UID:19970610T172345Z-AF23B2@example.com\r\n');
    event = event.concat(`LOCATION:${document.getElementById('location').value}\r\n`);
    event = event.concat(`SUMMARY:${document.getElementById('summary').value}\r\n`);
    event = event.concat(`DTSTART:${createDT(document.getElementById('date'), document.getElementById('start-time'))}\r\n`);
    event = event.concat(`DTEND:${createDT(document.getElementById('date'), document.getElementById('end-time'))}\r\n`);

    return `BEGIN:VEVENT\r\n${event}END:VEVENT\r\n`;
}


//TODO:
//creates date/time string formatted for .ics files
function createDT(date, time) {
  /*let dt = date.getFullYear() + ("0" + (this.getMonth() + 1)).slice(-2) + ("0" + this.getDate()).slice(-2) + "T" + date.getHours() + date.getMinutes() + "00\r\n"; */
  return '20180713T100000';
}


