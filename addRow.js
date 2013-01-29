/**
 * this snipple is for those who don't like a form 
 *  and want convenience to fill in spreadsheet, with newest item on top (with headers)
 *  1st row is assumed to be the header with title, 
 *  2nd row includes "Buttons" and some remarks for the corresponding column
 * newRow() is linked with a Drawing in GSS which serves as a button
 */

function newRow(){
  var _firstRowPosition = 3, 
      _dateCol = 1,
      _timezone = "HKT",
      _dateFmt = "dd-MMM-yy",
      _nameCol = 2, 
      _userid = Session.getActiveUser().getUserLoginId(),
      _username = userid.substring(0,userid.indexOf("@"));

  /* Insert new row */
    SpreadsheetApp.getActiveSheet().insertRowBefore(_firstRowPosition);

  /* Insert Date */
    SpreadsheetApp.getActiveSheet().getRange(_firstRowPosition,_dateCol)
     .setValue(Utilities.formatDate(new Date(), _timezone, _dateFmt));
 
  /* Insert UserID */
    SpreadsheetApp.getActiveSheet().getRange(_firstRowPosition,_nameCol)
     .setValue(_username);
}  
