// main_functions.js
// developed by DaylanDStoica

const PERMANENT_RECORD = "dailytasklist.txt";
const TEMPORARY_RECORD = "todaystasklist.txt";
// at the start of the day, load the tasks from the file
function loadTasks() {
    // code to read tasks from dailytasklist.txt into todaystasklist.txt
}

// when a new task is added, save it to the file
function saveTask(task) {
    // code to append the new task to dailytasklist.txt
}

function markTaskProgress(taskId, units) {
    // code to update the task progress in todaystasklist.txt as increments
    // check for when the task is completed, and run the markTaskComplete function
}

// when a task is marked as complete, update the file
function markTaskComplete(taskId) {
    // code to update the task status in todaystasklist.txt
}
