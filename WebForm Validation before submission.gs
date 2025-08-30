function insertDate (){
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getActiveSheet();
var range = sheet.getRange('A5:A6');
range.setValue(new Date());
}
