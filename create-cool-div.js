function createCoolDiv() {
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("I'm a cool div");
  newDiv.appendChild(newContent);
  newDiv.classList.add("cool-div");

  return newDiv;
}

module.exports = createCoolDiv;
