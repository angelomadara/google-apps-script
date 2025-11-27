function markOldUnreadAsRead() {
  // Search for unread threads older than 7 days
  let threads = GmailApp.search("is:unread older_than:30d");
  let count = threads.length;

  let olderMailsWithCleanupSummarySubject = GmailApp.search('subject:"Gmail Cleanup Summary" older_than:30d');
  for(let i=0; i<olderMailsWithCleanupSummarySubject.length; i++){
    olderMailsWithCleanupSummarySubject[i].moveToTrash();
  }
  let trashMessage = "Moved "+olderMailsWithCleanupSummarySubject.length+" Gmail Cleanup Summary mails to trash";
  Logger.log(trashMessage);
  

  // ✅ If no unread emails found, stop the script
  if (count === 0) {
    Logger.log("No unread emails older than 7 days. Nothing to mark as read.");
    return; // Exit function early
  }

  // Mark each thread as read
  for (let i = 0; i < count; i++) {
    threads[i].markRead();
  }

  // Log and send summary
  let subject = "Gmail Cleanup Summary";
  let message ="Marked " + count + " unread email(s) older than 7 days as read.\n\n";
  message += "Date: " + new Date().toLocaleString();
  message += "\n\n" + trashMessage;
  // Send summary email to yourself
  GmailApp.sendEmail(Session.getActiveUser().getEmail(), subject, message);

  Logger.log("Marked " + count + " threads as read and sent summary email.");
}