// js function to create table
$(function () {
  $("#tabs").tabs();
  $("#accordion").accordion();
});

$table = $("<table>");

$.getJSON("js/location.json", function (element) {
  element.forEach((office) => {
    $tableRow = $("<tr>");
    $tableColumns = $(
      `<td><img src="${office.country}"/></td>"+"<td>${office.state}</td>"+"<td>${office.city}</td>"+"<td>${office.contact}</td>`
    );
    $tableRow.append($tableColumns);
    $table.append($tableRow);
  });
  $("#locations").append($table);
});
