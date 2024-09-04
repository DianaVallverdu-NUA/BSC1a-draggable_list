// TBC - https://www.geeksforgeeks.org/create-a-drag-and-drop-sortable-list-using-html-css-javascript/

const sortableList = document.getElementById("sortable");
let draggedItem = null;
let overItem = null;

function dragStarted(event) {
  draggedItem = event.target;
  setTimeout(() => (event.target.style.display = "none"));
}

function dragEnded(event) {
  event.preventDefault();
  sortableList.insertBefore(draggedItem, overItem);
  draggedItem.style.display = "";
  draggedItem = null;
  overItem = null;
}

function dragOver(event) {
  event.preventDefault();
  const tagName = event.target.tagName;
  // not interested in UI element
  if (tagName === "UL") return;

  // store element that is beign dragged over
  overItem = event.target;
}

// triggered every time a drag starts
sortableList.addEventListener("dragstart", dragStarted);

// triggered every time dragging ends
sortableList.addEventListener("dragend", dragEnded);

// triggered every time cursors is dragging something over an element
sortableList.addEventListener("dragover", dragOver);
