const createCoolDiv = require("./create-cool-div");

function addDiv() {
  var coolDivs = document.getElementById("cool-divs");
  var newCoolDiv = createCoolDiv();
  coolDivs.appendChild(newCoolDiv);
}

var button = document.getElementById("make-div");
button.addEventListener("click", addDiv);
