function addNote() {
  var note = document.getElementById("note").value;
  var li = document.createElement("li");
  var t = document.createTextNode(note);
  li.appendChild(t);
  if (note === '') {
    alert("Please enter a note!");
  } else {
    document.getElementById("notes").appendChild(li);
  }
  document.getElementById("note").value = "";
}
function updateNote() {
  var note = document.getElementById("note").value;
  var li = document.createElement("li");
  var t = document.createTextNode(note);
  li.appendChild(t);
  if (note === '') {
    alert("Please enter a note!");
  } else {
    var list = document.getElementById("notes");
    list.replaceChild(li, list.childNodes[0]);
  }
  document.getElementById("note").value = "";
}
function deleteNote() {
  var list = document.getElementById("notes");
  list.removeChild(list.childNodes[0]);
}
function submitNotes() {
  var notes = document.getElementById("notes").innerHTML;
  alert("Notes submitted: " + notes);
}
