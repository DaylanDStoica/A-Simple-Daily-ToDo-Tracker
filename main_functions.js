// main_functions.js
// developed by DaylanDStoica

const PERMANENT_RECORD = "dailytasklist.txt";
const TEMPORARY_RECORD = "todaystasklist.txt";

function readTxtFile(filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(text => console.log(text))
        // outputs the content of the text file
}

function writeToTxtFile(filePath, content){
    fetch(filePath, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        },
        body: content
    })
}

// at the start of the day, load the tasks from the file
// TEMPORARY_RECORD.file_contents = PERMANENT_RECORD.file_contents
function resetTasks() {
    // code to reset today's tasks
    // code to read tasks from dailytasklist.txt into todaystasklist.txt
    // task_list = TEMPORARY_RECORD.file_contents;
    temp_contents = readTxtFile(PERMANENT_RECORD);
    writeToTxtFile(TEMPORARY_RECORD, temp_contents);
}

function loadTasks() {
    // code to load today's tasks from todaystasklist.txt
    return readTxtFile(TEMPORARY_RECORD);
}

// when a new task is added, save it to the file
function addTask(task) {
    // code to append the new task to dailytasklist.txt
    writeToTxtFile(PERMANENT_RECORD, task);
}

function markTaskProgress(taskId, units) {
    // code to update the task progress in todaystasklist.txt as increments
    // check for when the task is completed, and run the markTaskComplete function
}

// when a task is marked as complete, update the file
function markTaskComplete(taskId) {
    // code to update the task status in todaystasklist.txt
}
