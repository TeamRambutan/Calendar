/*
  Script to format and generate a new .ics calendar event file.
  Currently encompasses the following fields: summary, location (string), dtstamp, start/end date/time, UID, timezone identifier, priority, classification, version
  TODO: geographic position, recurring events?
 */

//sets the default date values
window.onload = function () {
  const date = new Date();
  const dt = createDate(date);
  var dateStart = document.getElementById("dateStart");
  var dateEnd = document.getElementById("dateEnd");
  dateStart.value = dt;
  dateEnd.value = dt;
  dateEnd.min = dateStart.value;
  dateStart.onchange = function () {
    dateEnd.min = dateStart.value;
  };
  console.assert((dateEnd.value >= dateStart.value), `end date: ${dateEnd.value}, start date: ${dateStart.value}`);
}

//validation check
function submitForm() {
  //verify there is a summary
  const summary = document.getElementById("summary").value;
  if (!summary) {
    alert("The summary field is required");
    console.assert(false, 'No summary');
    return;
  }
  //verify end date/time is not before start date/time
  const start = document.getElementById("dateStart").value;
  const end = document.getElementById("dateEnd").value;
  if (end > start) {
    createFile();
    return;
  }
  else
    if (end == start) {
      const startTime = document.getElementById("start-time").value;
      const endTime = document.getElementById("end-time").value;
      if (endTime >= startTime) {
        createFile();
        return;
      }
      else {
        alert("Error: End time should not be before start time");
        console.assert((end == start) && (endTime < startTime), 'Invalid alert');
        return;
      }
    }
    else {
      alert("Error: End date should not be before start date");
      console.assert(end < start, 'Invalid alert');
      return;
    }
}

//creates a new .ics file
function createFile() {
  version = document.getElementById('version').value;
  const data = `BEGIN:VCALENDAR\r\nVERSION:${version}\r\nCALSCALE:GREGORIAN\r\n${createVevent()}END:VCALENDAR`;
  if(version == '1.0') {
    const file = new Blob([data], { type: 'text/plain;charset=utf-8' });
    saveAs(file, `${document.getElementById('summary').value}.vcs`);
  }
  else {
    const file = new Blob([data], { type: 'text/plain;charset=utf-8' });
    saveAs(file, `${document.getElementById('summary').value}.ics`);
  }
}

//creates a Vevent
function createVevent() {
  const date = new Date();
  const dtStamp = createDTSTAMP(date);

  //// begin: unit tests ////
  const test = new Date(2018, 0, 1, 00, 00);
  console.assert(createDTSTAMP(test) === '20180101T000000', `DTSTAMP function, ${createDTSTAMP(test)}`);
  const testdate = createDate(test);
  console.assert(testdate === "2018-01-01", `createDate function, ${testdate}`);
  const testdt = createDT(testdate, '00:00');
  console.assert(testdt === '20180101T000000', `createDT function, ${testdt}`);
  const testPriority = document.getElementById('priority').value;
  console.assert(testPriority >= 0 && testPriority <= 9, `Invalid priority, ${testPriority}`);
  const testClass = document.getElementById('classification').value;
  console.assert(testClass === 'PUBLIC' || testClass === 'PRIVATE' || testClass === 'CONFIDENTIAL', `Invalid priority, ${testClass}`);
  //// end: unit tests ////

  let event = `DTSTAMP:${dtStamp}\r\n`;
  event = event.concat(`UID:${dtStamp}-${document.getElementById('start-time').value.substring(3, 5)}@example.com\r\n`);
  event = event.concat(`LOCATION:${document.getElementById('location').value}\r\n`); //optional?
  event = event.concat(`SUMMARY:${document.getElementById('summary').value}\r\n`);
  event = event.concat(`TZID:${createTZid(date)}\r\n`);
  event = event.concat(`DTSTART:${createDT(document.getElementById('dateStart').value, document.getElementById('start-time').value)}\r\n`);
  event = event.concat(`DTEND:${createDT(document.getElementById('dateEnd').value, document.getElementById('end-time').value)}\r\n`);
  // TODO: optional
  event = event.concat(`PRIORITY:${document.getElementById('priority').value}\r\n`);
  event = event.concat(`CLASSIFICATION:${document.getElementById('classification').value}\r\n`);

  return `BEGIN:VEVENT\r\n${event}END:VEVENT\r\n`;
}

//creates date in the form YYYY-MM-DD
function createDate(date) {
  let dt = `${date.getFullYear()}-`;
  dt = dt.concat(("0" + (date.getMonth() + 1)).slice(-2) + "-");
  dt = dt.concat(("0" + date.getDate()).slice(-2));
  return dt;
}

//creates date/time stamp string formatted for .ics files
function createDTSTAMP(date) {
  let dt = `${date.getFullYear()}`;
  dt = dt.concat(("0" + (date.getMonth() + 1)).slice(-2));
  dt = dt.concat(("0" + date.getDate()).slice(-2));
  dt = dt.concat("T");
  dt = dt.concat(("0" + date.getHours()).slice(-2));
  dt = dt.concat(("0" + date.getMinutes()).slice(-2));
  dt = dt.concat("00");
  return dt;
}

//creates date/time start/end string formatted for .ics files
function createDT(date, time) {
  let dt = `${date.substring(0, 4)}`;
  dt = dt.concat(date.substring(5, 7));
  dt = dt.concat(date.substring(8, 10));
  dt = dt.concat("T");
  dt = dt.concat(time.substring(0, 2));
  dt = dt.concat(time.substring(3, 5));
  dt = dt.concat("00");
  return dt;
}

//creates tzid using gettimezoneoffset which is utc minus user's current time
function createTZid(time) {
  let tzos = time.getTimezoneOffset();
  switch (tzos) {
    case 720:
      timezone = 'Pacific/Kiritimati';
      break;
    case 660:
      timezone = 'Etc/GMT+11';
      break;
    case 600:
      timezone = 'Pacific/Honolulu';
      break;
    case 570:
      timezone = 'Pacific/Marquesas';
      break;
    case 540:
      timezone = 'America/Alaska';
      break;
    case 480:
      timezone = 'America/Los_Angeles';
      break;
    case 420:
      timezone = 'America/Phoenix';
      break;
    case 360:
      timezone = 'America/Guatemala';
      break;
    case 300:
      timezone = 'America/Cancun';
      break;
    case 240:
      timezone = 'America/Halifax';
      break;
    case 210:
      timezone = 'America/St_Johns';
      break;
    case 180:
      timezone = 'America/Araguaina';
      break;
    case 120:
      timezone = 'Etc/GMT+2';
      break;
    case 60:
      timezone = 'Atlantic/Azores';
      break;
    case 0:
      timezone = 'Africa/Abidjan';
      break;
    case -60:
      timezone = 'Europe/Berlin';
      break;
    case -120:
      timezone = 'Asia/Amman';
      break;
    case -180:
      timezone = 'Europe/Istanbul';
      break;
    case -210:
      timezone = 'Asia/Tehran';
      break;
    case -240:
      timezone = 'Asia/Dubai';
      break;
    case -270:
      timezone = 'Asia/Kabul';
      break;
    case -300:
      timezone = 'Asia/Tashkent';
      break;
    case -330:
      timezone = 'Asia/Colombo';
      break;
    case -345:
      timezone = 'Asia/Katmandu';
      break;
    case -360:
      timezone = 'Asia/Almaty';
      break;
    case -390:
      timezone = 'Asia/Rangoon';
      break;
    case -420:
      timezone = 'Asia/Bangkok';
      break;
    case -480:
      timezone = 'Asia/Shanghai';
      break;
    case -510:
      timezone = 'Asia/Pyongyang';
      break;
    case -540:
      timezone = 'Asia/Tokyo';
      break;
    case -570:
      timezone = 'Australia/Adelaide';
      break;
    case -600:
      timezone = 'Australia/Brisbane';
      break;
    case -630:
      timezone = 'Australia/Lord_Howe';
      break;
    case -660:
      timezone = 'Pacific/Bougainville';
      break;
    case -720:
      timezone = 'Asia/Kamchatka';
      break;
    case -765:
      timezone = 'Pacific/Chatham';
      break;
    case -780:
      timezone = 'Etc/GMT-13';
      break;
    case -840:
      timezone = 'Pacific/Kiritimati';
      break;
    default:
      timezone = 'Unknown';
      break;
  }
  return timezone;
}
