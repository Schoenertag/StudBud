//MODAL
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');


openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    //when an open modal button is clicked
    const modal = document.querySelector(button.dataset.modalTarget); //get modal html element
    openModal(modal); //pass into open modal function
  });
});


//When background is clicked, close modal
overlay.addEventListener('click', () => {
  //find every modal that is open
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  });
});


closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal'); //gets the closest parent element with the class modal
    closeModal(modal); 
  });
});



function openModal(modal) {
  if (modal == null) return; //if no modal gets passed through, dont do anything
  modal.classList.add('active'); //add a class, which then activates open modal styling in css
  overlay.classList.add('active');
}


function closeModal(modal) {
  if (modal == null) return; //if no modal gets passed through, dont do anything
  modal.classList.remove('active'); //add a class, which then activates open modal styling in css
  overlay.classList.remove('active');
  console.log("modal has been closed");
}


//DRAG TASKS INTO DIFFERENT COLUMNS
const draggables = document.querySelectorAll('.taskBox');
const containers = document.querySelectorAll('.taskColumn');

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
  });
});

draggables.forEach(draggable => {
  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  });
});


containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault();
    //const afterElement = getDraggablePosition(container, e.clientY); //passes in users mouse position on screen
    const draggable = document.querySelector('.dragging');
    container.appendChild(draggable);
    /*
    if (afterElement == null) {
      //if dragged element is not above anything, append child to end of list
      container.appendChild(draggable);
    } else {
      //if dragged element IS above something, insert it before the element its on top of
      container.insertBefore(draggable, afterElement);
    }
    */
    
  });
});


/*
function getDraggablePosition(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]; //gets every other draggable element that isnt currently being dragged in an array

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}
*/


//KANBAN BOARD TASK CREATION
const form = document.getElementById("createTaskForm");
const button = document.getElementById("addButton");
var tasklist = document.getElementById("");
const taskColumn = document.querySelector(".taskColumn.toDo");

//store user inputs in js elements
var assignmentNameInput = document.getElementById("assignmentNameInput");
var taskInput = document.getElementById("taskNameInput");
var unitCodeInput = document.getElementById("unitCodeInput")
var dueDateInput = document.getElementById("dueDateInput");
var taskDescriptionInput = document.getElementById("taskDescriptionInput");

let taskList = [];

//submit above user inputs into js addTask function
form.addEventListener("submit", function(event) {
  console.log("form is being submitted");
  event.preventDefault();
  let assignmentName = assignmentNameInput.value;
  let taskName = taskInput.value;
  let dueDate = dueDateInput.value;
  let unitCode = unitCodeInput.value;
  let taskDescription = taskDescriptionInput.value;
  modal.classList.remove('active'); //add a class, which then activates open modal styling in css
  overlay.classList.remove('active');
  addTask(assignmentName, taskName, dueDate, unitCode, taskDescription);
});


function addTask(assignmentName, taskName, dueDate, unitCode, taskDescription) {
  let task = {
    assignmentName,
    taskName, 
    dueDate, 
    unitCode, 
    taskDescription
  }
  console.log(task);
  taskList.push(task);
  renderTask(task);
}


function renderTask(task) {
  let newTaskContainer = document.createElement("div");
  newTaskContainer.classList.add("taskBox");
  newTaskContainer.setAttribute("draggable", "true");
  taskColumn.appendChild(newTaskContainer);
  
  let newAssignmentName = document.createElement("p");
  newAssignmentName.innerHTML = task.assignmentName + " | ";
  newAssignmentName.classList.add("assignmentID");

  let newTaskName = document.createElement("h1");
  newTaskName.innerHTML = task.taskName;
  newTaskName.classList.add("taskName");

  let newTaskDescription = document.createElement("p");
  newTaskDescription.innerHTML = task.taskDescription;
  newTaskDescription.classList.add("taskDescription");

  let newTaskDetailsContainer = document.createElement("ul");
  newTaskDetailsContainer.classList.add("taskDetails");
  
  let newDueDate = document.createElement("li");
  newDueDate.classList.add("dueDate");
  newDueDate.innerHTML = task.dueDate;
  let newUnitCode = document.createElement("li");
  newUnitCode.classList.add("unitCode");
  newUnitCode.innerHTML = task.unitCode.toUpperCase();
  

  
  newTaskContainer.appendChild(newAssignmentName);
  newTaskContainer.appendChild(newTaskName);
  newTaskContainer.appendChild(newTaskDescription);
  newTaskContainer.appendChild(newTaskDetailsContainer);
  
  newTaskDetailsContainer.appendChild(newDueDate);
  newTaskDetailsContainer.appendChild(newUnitCode);


  //create delete button

  let deleteBtn = document.createElement("button");
  let deleteBtnText = document.createTextNode("Delete Task");
  deleteBtn.appendChild(deleteBtnText);
  newTaskContainer.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", function(event) {
    event.preventDefault();
    item.remove();
  })

  form.reset();
}

//MUSIC PLAYER 
/*
const playlistCover = document.getElementsByClassName('playlistCover');
const playlistName = document.getElementsByClassName("playlistName");
const audio = document.getElementById("audio");

console.log("this is" + playlistCover);

const hogwartsAmbienceTracks = ["Hedwig's Theme"];

playlistCover.addEventListener("click", () => {
  const isPlaying = playlistCover.classList.contains("playing");

  if (isPlaying) {
    pauseSong();
  }
  else {
    playSong();
  }
});

function playSong() {
  playlist.classList.add("playing");
  audio.play();
}
*/

const playlistCover = document.querySelectorAll(".playlistCover");

console.log(playlistCover);

playlistCover.forEach(playlistCover => {
    playlistCover.addEventListener("click", () => {
        console.log("fuck me");
    });
});


//DICTIONARY 
var api = "https://api.dictionaryapi.dev/api/v2/entries/en/"
//add word thats getting looked up at the end of the link
var searchedWord = "happy";

window.onload=function(){
  
}


function getDefinition() {
  var link = api + searchedWord;
  LOADJSON(link, gotData);
}

function gotData(data) {
  definition = data;
}