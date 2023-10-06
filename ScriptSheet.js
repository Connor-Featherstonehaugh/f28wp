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

  function addRow(button) {
    const table = document.getElementById("dropdownTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(button.closest("tr").rowIndex + 1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Create a new dropdown element
    const dropdown = document.createElement("select");
    dropdown.innerHTML = button.closest("tr").cells[0].querySelector('select').innerHTML; // Copy options from the first dropdown

    // Create a button to remove the row
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function () {
        table.deleteRow(newRow.rowIndex);
    };

    cell1.appendChild(dropdown);
    cell2.appendChild(removeButton);
}