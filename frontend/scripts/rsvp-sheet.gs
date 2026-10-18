// Set RSVP_SECRET in Project Settings > Script Properties before deployment.
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var secret = PropertiesService.getScriptProperties().getProperty('RSVP_SECRET');
    if (!secret || data.secret !== secret) throw new Error('Unauthorized');
    if (typeof data.name !== 'string' || !data.name.trim() || data.name.length > 120 || ['accept', 'decline'].indexOf(data.attendance) === -1 || !Number.isInteger(data.guests) || data.guests < (data.attendance === 'accept' ? 1 : 0) || data.guests > 99 || (data.attendance === 'decline' && data.guests !== 0)) throw new Error('Invalid response');
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('RSVP') || SpreadsheetApp.getActiveSpreadsheet().insertSheet('RSVP');
    var lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      if (sheet.getLastRow() === 0) sheet.appendRow(['Submitted at', 'Name', 'Attendance', 'Guests']);
      var name = data.name.trim().replace(/^[=+@\-]/, "'$&");
      sheet.appendRow([new Date(), name, data.attendance === 'accept' ? 'Attending' : 'Declined', data.guests]);
    } finally { lock.releaseLock(); }
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false })).setMimeType(ContentService.MimeType.JSON);
  }
}
