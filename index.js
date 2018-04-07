function createCoolDiv() {
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("I'm a cool div");
  newDiv.appendChild(newContent);
  newDiv.classList.add("cool-div");

  return newDiv;
}

function addDiv() {
  var coolDivs = document.getElementById("cool-divs");
  var newCoolDiv = createCoolDiv();
  coolDivs.appendChild(newCoolDiv);
}

var button = document.getElementById("make-div");
button.addEventListener("click", addDiv);
