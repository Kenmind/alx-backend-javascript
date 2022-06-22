var student_0 = {
    firstName: "Kennedy",
    lastName: "Kalaluka",
    age: 25,
    location: "Kafue"
};
var student_1 = {
    firstName: "Sibeso",
    lastName: "Simasiku",
    age: 23,
    location: "Chisamba"
};
var studentList = [student_0, student_1];
var student_table = document.createElement('table');
var student_body = document.createElement('tbody');
studentList.forEach(function (objectList) {
    var tableName = document.createElement('tableName');
    var tableRow = document.createElement('tableRow');
    var tableLocation = document.createElement('tableLocation');
    tableName.textContent = objectList.firstName;
    tableLocation.textContent = objectList.location;
    tableRow.appendChild(tableName);
    tableRow.appendChild(tableLocation);
    student_body.appendChild(tableRow);
});
student_table.appendChild(student_body);
document.body.appendChild(student_table);
