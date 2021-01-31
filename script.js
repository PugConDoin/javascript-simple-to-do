const form = document.getElementById("form");
const addTask = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// listen for the submit form our form
// we'll add a parameter 'e' into the function to represent the event that occurs on submit
// then we will use 'e' to prevent the default action for the form, which is to refresh the webpage and send teh user somewhere 
form.addEventListener('submit', (e) => {
  e.preventDefault();
  createTask(addTask.value);
})

// use 'x' as a parameter (placeholder) for the createTask function
// we'll pass into 'x' the argument 'input.value' from the 'form' listener event callback
// this in turn will create a new task, appending as HTML before the end of the UL element with the id tasks 
function createTask(x) {
  const taskHTML = `
    <li>${x} <button onclick="deleteTask(this)">Delete</button></li>`
  taskList.insertAdjacentHTML("beforeend", taskHTML)
  // remove prior task input field text
  addTask.value = ""
  // retain focus for easy multiple task re-entry
  addTask.focus()
}

////////////////////
// DELETE BUTTONS 

// to add delete button functionailty we can't use an event listener because
// the delete buttons don't exist on page load, they get added together with each task. 
// instead, add an 'on-click' property to the taskHTML we created in createTask
// target the correct delete key that's been clicked, using 'this' to target the correct object
// use this deleteTask function as the onclick event. 
// the element to be deleted is the entire parent of the button, which os the 'li'
function deleteTask(elementToDelete) {
  elementToDelete.parentElement.remove()
}

///////////////////////////
// PERSISTENT DATA STORAGE

// the to-do list will not be saved if the user refreshes browser of swaps between their pc, laptop, mobile
// in the real world we would need to persist this data in a database
// databases don't understand the html we've written, they takein raw data
// libraries like React make this easier but we'll understand the fundamentals with vanilla language and full scope of the application fand requirement first