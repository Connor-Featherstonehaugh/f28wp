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