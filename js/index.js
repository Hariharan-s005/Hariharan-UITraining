//function is called only when dom elememts are ready 
$(function () {
  $("#tabs").tabs();
  $("#accordion").accordion();
});

//Create table
$table = $("<table>");

// get json data from the file path and append data to a table
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
