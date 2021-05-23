// from data.js
const tableData = data;

// get table references with d3.select()
const tbody = d3.select("tbody");

// define a function called buildTable that takes an argument called data
// the job of this function is to parse out the data and create an html table
function buildTable (data) {

  // clear out any existing data in tbody by setting the .html() to an empty string
  tbody.html("");

  // Next, loop forEach() dataRow in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // .append() a table row "tr" to the tbody
   const row = tbody.append("tr");

    // Loop through forEach val in the Object.values(dataRow)
   Object.values(dataRow).forEach((val) => {
      // append each value as a table cell (td)
      let cell = row.append("td");
      // set the .text of cell to the val
       cell.text(val);
      }
    );
  });
}

// define a function handleClick() that takes no arguments
// the job of this function is to 
function handleClick() {

  // Grab the #datetime value from the filter with d3.select().property()
  const date = d3.select("#datetime").property("value");
  // store the tableData into a local variable called filteredData
  let filteredData = tableData;

  // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
  filteredData = filteredData.filter(row => row.datetime ==date);
  }  

  // Rebuild the table by calling you buildTable() function and passing in your filteredData variable
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table with your buildTable function when the page loads
buildTable (tableData);
