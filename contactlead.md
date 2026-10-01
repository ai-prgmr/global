function doPost(e) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var data = JSON.parse(e.postData.contents);
  var p = data.profile;
  
  // 1. Determine which tab to use based on the 'source' field we just added!
  var sheetName = (data.source === "CONTACT_FORM") ? "Contact Leads" : "Chat Leads";
  var sheet = spreadsheet.getSheetByName(sheetName);
  
  // Fallback just in case you forgot to create the tab
  if (!sheet) {
    sheet = spreadsheet.getActiveSheet();
  }

  // --- 2. SPAM PROTECTION (5 MINUTE COOLDOWN) ---
  var userEmail = p.email ? p.email.toLowerCase().trim() : null;
  if (userEmail) {
    var dataRange = sheet.getDataRange();
    var values = dataRange.getValues();
    var currentTime = new Date().getTime();
    
    // Scan from bottom up (newest leads first)
    for (var i = values.length - 1; i > 0; i--) {
      var rowDate = new Date(values[i][0]).getTime();
      var rowEmail = String(values[i][3]).toLowerCase().trim(); // Column D is email
      
      // If we find the same email
      if (rowEmail === userEmail) {
        var timeDifferenceInMinutes = (currentTime - rowDate) / (1000 * 60);
        if (timeDifferenceInMinutes < 5) {
          // It has been less than 5 minutes since their last submission
          return ContentService.createTextOutput(JSON.stringify({ 
            status: 'error', 
            message: 'Rate limit exceeded. Please wait 5 minutes before submitting again.'
          })).setMimeType(ContentService.MimeType.JSON);
        }
        break; // If we found their last entry and it's > 5 mins, we can stop searching
      }
      
      // Optimization: If the row we are checking is older than 5 minutes, we can stop searching entirely 
      // (assuming rows are chronological).
      if ((currentTime - rowDate) / (1000 * 60) > 60) {
        break; 
      }
    }
  }

  // --- 3. APPEND ROW TO SHEET ---
  sheet.appendRow([
    new Date(),
    p.name || '',
    p.phone || '',
    p.email || '',
    p.interestedCountry || '',
    p.interestedCourse || '',
    p.currentQualification || '',
    p.currentPercentage || '',
    p.graduationYear || '',
    p.englishTest || '',
    p.budget || '',
    p.preferredIntake || '',
    p.scholarshipInterested ? 'Yes' : 'No',
    p.passportAvailable ? 'Yes' : 'No',
    data.leadScore || 0,
    (data.counsellorNotes || []).join(' | '),
    data.summary || ''
  ]);
  
  // --- 4. EMAIL NOTIFICATION ---
  var notificationEmail = "client@example.com"; // <-- CHANGE THIS TO THE ACTUAL EMAIL
  var subject = "New Lead Alert: " + sheetName + " (" + (p.name || 'Unknown') + ")";
  var messageBody = 
    "You have received a new lead!\n\n" +
    "Source: " + sheetName + "\n" +
    "Name: " + (p.name || 'N/A') + "\n" +
    "Email: " + (p.email || 'N/A') + "\n" +
    "Phone: " + (p.phone || 'N/A') + "\n\n" +
    "Lead Score: " + (data.leadScore || 0) + "\n" +
    "Details:\n" + (data.summary || 'No additional details provided.') + "\n\n" +
    "Check your Google Sheet for full details.";
    
  try {
    MailApp.sendEmail(notificationEmail, subject, messageBody);
  } catch (err) {
    // Ignore email failure so the webhook still returns success
  }

  return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
                       .setMimeType(ContentService.MimeType.JSON);
}
