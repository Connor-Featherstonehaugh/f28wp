function changeButton() {
    var button = document.getElementById("myButton");
    if (button.innerText === "Click Me") {
      button.innerText = "Clicked!";
      button.style.backgroundColor = "green";
    } else {
      button.innerText = "Click Me";
      button.style.backgroundColor = "#007bff";
    }
  }

  function addRow() {
    const table = document.getElementById("dropdownTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    // Create a new dropdown element
    const dropdown = document.createElement("select");
    dropdown.innerHTML = document.querySelector('select').innerHTML; // Copy options from the first dropdown

    // Create a button to remove the row
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function () {
        table.deleteRow(newRow.rowIndex-1);
    };

    cell1.appendChild(dropdown);
    cell2.appendChild(removeButton);
}

function updateTime() {
  fetch("get_time.php")
      .then(response => response.json())
      .then(data => {
          const timeElement = document.getElementById("time");
          timeElement.textContent = data.datetime;
      })
      .catch(error => {
          console.error("Error fetching time data:", error);
      });
}

// Initial call to update the time
updateTime();

// Set up an interval to refresh the time every 60 seconds (60000 milliseconds)
setInterval(updateTime, 60000);