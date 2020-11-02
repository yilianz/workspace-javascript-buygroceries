/*
 * Practice on Elements
 */

// get all the hot class elements- chane them to cool


// traverse the elements



// add a new element



// add by click
document.getElementById("add").addEventListener("click", addElement);

function addElement() {
  // add a new element

}

function changeText() {
  var val = this.value;
  var newText = document.createTextNode(this.value);

  var container = this.parentNode;
  container.appendChild(newText);
  container.onclick = changeStyle;
  container.removeChild(this);
  document.getElementById("save").textContent = "Save";
}

function changeStyle() {
  var className = this.getAttribute("class");
  if (className == "complete") {
    this.setAttribute("class", "cool");
  } else {
    this.setAttribute("class", "complete");
  }
}

// delete by click
document.getElementById("remove").addEventListener("click", removeElement);

function removeElement() {
  document.getElementById("save").textContent = "Save";
  var nlist = document.querySelectorAll("li.complete");
  for (var i = 0; i < nlist.length; i++) {
    var position = document.getElementById("todo");
    position.removeChild(nlist[i]);
  }
}
