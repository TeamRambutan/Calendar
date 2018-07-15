/*
  Script to format and generate a new .ics calendar event file.
  Currently encompasses the following fields: summary, location (string), dtstamp, start/end date/time, UID
  TODO: timezone identifier, priority, geographic position, classification, version, recurring events
 */

//creates a new .ics file
function createFile() {
  const data = `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nCALSCALE:GREGORIAN\r\n${createVevent()}END:VCALENDAR`;
  const file = new Blob([data], { type: 'text/plain;charset=utf-8' });
  saveAs(file, `${document.getElementById('summary').value}.ics`);
}

//creates a Vevent
function createVevent() {
  const date = new Date();
  const dtStamp = createDTSTAMP(date);
  console.log(date);

  let event = `DTSTAMP:${dtStamp}\r\n`;
  event = event.concat(`UID:${dtStamp}-${document.getElementById('start-time').value.substring(3, 5)}@example.com\r\n`);
  console.log(event);
  event = event.concat(`LOCATION:${document.getElementById('location').value}\r\n`);
  event = event.concat(`SUMMARY:${document.getElementById('summary').value}\r\n`);
  event = event.concat(`DTSTART:${createDT(document.getElementById('dateStart').value, document.getElementById('start-time').value)}\r\n`);
  event = event.concat(`DTEND:${createDT(document.getElementById('dateEnd').value, document.getElementById('end-time').value)}\r\n`);

  return `BEGIN:VEVENT\r\n${event}END:VEVENT\r\n`;
}

//creates date/time stamp string formatted for .ics files
function createDTSTAMP (date) {
  let dt = `${date.getFullYear()}`;
  dt = dt.concat(("0" + (date.getMonth() + 1)).slice(-2));
  dt = dt.concat(("0" + date.getDate()).slice(-2));
  dt = dt.concat("T");
  dt = dt.concat(("0" + date.getHours()).slice(-2));
  dt = dt.concat(("0" + date.getMinutes()).slice(-2));
  dt = dt.concat("00");
  console.log(dt);
  return dt;
}

//creates date/time start/end string formatted for .ics files
function createDT (date, time) {
  let dt = `${date.substring(0, 4)}`;
  dt = dt.concat(date.substring(5, 7));
  dt = dt.concat(date.substring(8, 10));
  dt = dt.concat("T");
  dt = dt.concat(time.substring(0, 2));
  dt = dt.concat(time.substring(3, 5));
  dt = dt.concat("00");
  console.log(dt);
  return dt;
}
