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

function dragOver() {
}

// triggered every time a drag starts
sortableList.addEventListener("dragstart", dragStarted);

// triggered every time dragging ends
sortableList.addEventListener("dragend", dragEnded);

// triggered every time cursors is dragging something over an element
sortableList.addEventListener("dragover", dragOver);