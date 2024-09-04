// TBC - https://www.geeksforgeeks.org/create-a-drag-and-drop-sortable-list-using-html-css-javascript/

const sortableList = document.getElementById("sortable");
let draggedItem = null;

function dragStarted(event) {
  draggedItem = event.target;
  setTimeout(() => (event.target.style.display = "none"));
}

function dragEnded() {
  draggedItem.style.display = "";
  draggedItem = null;
}

sortableList.addEventListener("dragstart", dragStarted);
sortableList.addEventListener("dragend", dragEnded);
