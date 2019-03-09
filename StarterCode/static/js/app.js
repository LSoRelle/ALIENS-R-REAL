
// from data.js
var tableData = data;

// YOUR CODE HERE!
// Create a basic HTML web page or use the index.html file provided 
// (we recommend building your own custom page!). Look into this if you have time remaining after doing everything else

// Using the UFO dataset provided in the form of an array of JavaScript objects, 
// write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

// Use a date form in your HTML document and write JavaScript code that will 
// listen for events and search through the date/time column to find rows that match user input.

// Get a reference to the table body in the HTML
var tbody = d3.select("tbody");

// Pull in the values from the data.js into a table
data.forEach((UFOReport) => {
  var row = tbody.append("tr");
  Object.entries(UFOReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the submit button
var submit = d3.select("#search-btn");
// Set the click to the on for the function

// Prevent the page from refreshing
submit.on("click", function() {
  d3.event.preventDefault();

  // // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);
  
  // clear data
  tbody.html("");

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  filteredData.forEach((UFOReport) => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  console.log(filteredData);
});
});

